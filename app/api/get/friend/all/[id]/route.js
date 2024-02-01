import { query } from "/server/connect/db";


export async function GET(req, {params}) {
   
    const user = await query({
        query: "SELECT user_id, user_fulname, user_email, user_at, user_ages,  user_gender, user_profile_img, user_online FROM ds_user WHERE user_id = ?",
        values: [params.id],
    });
   
    let data = user.arr;
    
    return new Response(JSON.stringify(data));
}