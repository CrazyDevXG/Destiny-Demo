import { query } from "/components/server/connect/db";


export async function GET(request, {params}) {
    const imgs = await query({
        query: "SELECT * FROM ds_images WHERE img_uid = ?",
        values: [params.name],
    });
   
    let data = imgs.arr[0];
    return new Response(
        JSON.stringify(data)          
    );
}