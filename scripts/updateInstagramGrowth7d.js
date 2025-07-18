const { createClient } = require('@supabase/supabase-js');

// Set your Supabase credentials
const supabaseUrl = process.env.SUPABASE_URL || 'https://ojpegjscdtdprztuxmqw.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qcGVnanNjZHRkcHJ6dHV4bXF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjU4ODcxMCwiZXhwIjoyMDY4MTY0NzEwfQ.sDxU0cmKLIwO6N4b2NMyFkGl6u7cpNMeG2Q-nMEhlJc';
const supabase = createClient(supabaseUrl, supabaseKey);

function getDateNDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

async function updateInstagramGrowth7d() {
  // 1. Get all brands and their Instagram handles
  const { data: brands, error } = await supabase.from('brands').select('id, instagram_handle');
  if (error) throw error;

  const today = getDateNDaysAgo(0);
  const sevenDaysAgo = getDateNDaysAgo(7);

  for (const brand of brands) {
    const handle = brand.instagram_handle;
    if (!handle) continue;

    // Get today's followers
    const { data: todayRow } = await supabase
      .from('instagram_followers')
      .select('followers')
      .eq('instagram_handle', handle)
      .eq('date', today)
      .single();
    const todayFollowers = todayRow ? todayRow.followers : null;

    // Get 7 days ago followers
    const { data: weekRow } = await supabase
      .from('instagram_followers')
      .select('followers')
      .eq('instagram_handle', handle)
      .eq('date', sevenDaysAgo)
      .single();
    const weekFollowers = weekRow ? weekRow.followers : null;

    let growth7d = null;
    if (todayFollowers !== null && weekFollowers !== null && weekFollowers > 0) {
      growth7d = ((todayFollowers - weekFollowers) / weekFollowers) * 100;
    }

    // Update brands table
    await supabase.from('brands').update({ instagram_growth_7d: growth7d }).eq('id', brand.id);
    console.log(`Updated ${handle}: 7d growth = ${growth7d !== null ? growth7d.toFixed(2) : 'N/A'}%`);
  }
}

updateInstagramGrowth7d().catch(console.error); 