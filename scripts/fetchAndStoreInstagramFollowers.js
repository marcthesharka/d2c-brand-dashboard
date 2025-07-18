const puppeteer = require('puppeteer');
const { createClient } = require('@supabase/supabase-js');

// Set your Supabase credentials
const supabaseUrl = 'https://ojpegjscdtdprztuxmqw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcGVnanNjZHRkcHJ6dHV4bXF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjU4ODcxMCwiZXhwIjoyMDY4MTY0NzEwfQ.sDxU0cmKLIwO6N4b2NMyFkGl6u7cpNMeG2Q-nMEhlJc';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchInstagramFollowers(handle) {
  const url = `https://www.instagram.com/${handle.replace(/^@/, '')}/`;
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Extract followers from og:description meta tag
  const ogDescription = await page.$eval(
    'meta[property="og:description"]',
    el => el.getAttribute('content')
  );

  // ogDescription will be something like "19K Followers, 688 Following, 310 Posts - ..."
  let followers = null;
  if (ogDescription) {
    const match = ogDescription.match(/^([\d.,KkMm]+)\s*Followers/);
    if (match) {
      const raw = match[1].toUpperCase();
      if (raw.endsWith('K')) {
        followers = Math.round(parseFloat(raw) * 1000);
      } else if (raw.endsWith('M')) {
        followers = Math.round(parseFloat(raw) * 1000000);
      } else {
        followers = parseInt(raw.replace(/,/g, ''), 10);
      }
    }
  }

  await browser.close();
  return followers;
}

async function main() {
  // 1. Get all brands and their Instagram handles
  const { data: brands, error } = await supabase.from('brands').select('id, instagram_handle, social_media');
  if (error) throw error;

  const today = new Date().toISOString().slice(0, 10);

  for (const brand of brands) {
    const handle = brand.instagram_handle;
    if (!handle) continue;

    const followers = await fetchInstagramFollowers(handle);
    if (!followers) {
      console.log(`Could not fetch followers for ${handle}`);
      continue;
    }

    // Insert today's follower count into instagram_followers table
    await supabase.from('instagram_followers').upsert([
      {
        date: today,
        instagram_handle: handle,
        followers,
        brand_id: brand.id,
      }
    ], { onConflict: 'instagram_handle,date' });

    // Update brands table with latest count
    const newSocialMedia = {
      ...brand.social_media,
      instagram: followers
    };

    await supabase.from('brands').update({
      social_media: newSocialMedia
    }).eq('id', brand.id);

    console.log(`Updated ${handle}: today=${followers}`);
  }
}

main().catch(console.error);
