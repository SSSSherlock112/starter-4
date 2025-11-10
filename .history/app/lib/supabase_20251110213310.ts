import {createBrowserClient} from '@supabase/ssr';

const supabase = createBrowserClient( 
    process.env., 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);