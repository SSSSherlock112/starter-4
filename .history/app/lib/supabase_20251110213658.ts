import {createBrowserClient} from '@supabase/ssr';

const supabase = createBrowserClient( 
    process.env.SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default supabase;

export type msg = {
    id: number;
    text: string;
};

export  createMsg = async (text: string) => {
    const { data, error } = await supabase
        .from('msg')
        .insert([{ text }]);
    return { data, error };
}