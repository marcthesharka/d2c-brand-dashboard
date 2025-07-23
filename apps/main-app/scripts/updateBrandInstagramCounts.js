const { createClient } = require('@supabase/supabase-js');

// Set your Supabase credentials
const supabaseUrl = process.env.SUPABASE_URL || 'https://ojpegjscdtdprztuxmqw.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcGVnanNjZHRkcHJ6dHV4bXF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjU4ODcxMCwiZXhwIjoyMDY4MTY0NzEwfQ.sDxU0cmKLIwO6N4b2NMyFkGl6u7cpNMeG2Q-nMEhlJc';
const supabase = createClient(supabaseUrl, supabaseKey);

async function updateBrandInstagramCounts() {
  // 1. Get all brands and their Instagram handles
  const { data: brands, error } = await supabase.from('brands').select('id, instagram_handle, social_media');
  if (error) throw error;

  for (const brand of brands) {
    const handle = brand.instagram_handle;
    if (!handle) continue;

    // Get the latest follower count for this handle
    const { data: latestRow, error: followerError } = await supabase
      .from('instagram_followers')
      .select('followers')
      .eq('instagram_handle', handle)
      .order('date', { ascending: false })
      .limit(1)
      .single();

    if (followerError || !latestRow) {
      console.log(`No follower data for ${handle}`);
      continue;
    }

    const latestFollowers = latestRow.followers;
    const newSocialMedia = {
      ...brand.social_media,
      instagram: latestFollowers
    };

    // Update the brands table
    await supabase.from('brands').update({
      social_media: newSocialMedia
    }).eq('id', brand.id);

    console.log(`Updated ${handle}: instagram followers = ${latestFollowers}`);
  }
}

updateBrandInstagramCounts().catch(console.error);
