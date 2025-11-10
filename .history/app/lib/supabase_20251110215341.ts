// import {createBrowserClient} from '@supabase/ssr';

// const supabase = createBrowserClient( 
//     process.env.SUPABASE_URL!, 
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export default supabase;

// export type msg = {
//     text: string;
// };

// export const createMsg = async (text: string) => {
//     const { data, error } = await supabase
//         .from('msg')
//         .insert([{ text }]);
//     return { data, error };
// }

// export const getMsg = async () => {
//     const { data, error } = await supabase
//         .from('msg')
//         .select('*');
//     return { data, error };
// }