
import { createClient , SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

console.log('VITE_SUPABASE_URL =>', supabaseUrl)
console.log('VITE_SUPABASE_KEY exists =>', !!supabaseKey)

export const supabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabaseClient;
