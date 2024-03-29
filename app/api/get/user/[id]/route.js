import { query } from "/server/connect/db";


export async function GET(req, {params}) {
   
    const user = await query({
        query: "SELECT * FROM ds_user WHERE user_id = ?",
        values: [params.id],
    });
   
    let data = user.arr[0];
    
    return new Response(JSON.stringify(data));
}