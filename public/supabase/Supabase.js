import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://sduwahyntemsearaxrzg.supabase.co";
export const supabaseUrl = 'https://bqasptncljkfogihjmhu.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYXNwdG5jbGprZm9naWhqbWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5MTEyNTcsImV4cCI6MjAyODQ4NzI1N30.i8zL_YDmrph94E6cplf_3v8OSyVlop85Jm-m4JuIDpg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
