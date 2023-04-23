import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kggwhuebxhfnonqlrjwb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnZ3dodWVieGhmbm9ucWxyandiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjIwMTgzMSwiZXhwIjoxOTk3Nzc3ODMxfQ.AssZh4pYZ2-7s_U1gv6290JbiSW8NoJFB97HbbJV6uo'
export const supabase = createClient(supabaseUrl, supabaseKey)