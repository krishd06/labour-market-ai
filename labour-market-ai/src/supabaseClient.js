import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ngrtphcwpcpzkpxhuxkg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncnRwaGN3cGNwemtweGh1eGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNjg2MzUsImV4cCI6MjEwNzc0NDYzNX0.RzDH1IwGNCumm5iLDv8z1aVKTp8wi6qibYeHTnJq9Qc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
