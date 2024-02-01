import { query } from "/server/connect/db";


export async function GET(req, {params}) {
   
    const findUser = await query({
        query: "SELECT * FROM ds_user WHERE user_id != ?",
        values: [params.id],
    });
   
    let allData = findUser.arr;
    
    return new Response(JSON.stringify(allData));
}