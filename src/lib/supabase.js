import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jyslzgyojlqzabddkshd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5c2x6Z3lvamxxemFiZGRrc2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4Mzg3MDYsImV4cCI6MTk4NjQxNDcwNn0.0hQS_7u_7QDWszjR7XN6LXp0om8l3_XlY7TcDtZ04YQ'
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})