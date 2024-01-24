import { query } from "/components/server/connect/db";


export async function GET(request, {params}) {
    const textMessages = await query({
        query: "SELECT * FROM ds_message WHERE mes_room_id = ? ORDER BY mes_id ASC ",
        values: [params.textMS],
    });
   
    let data = textMessages.arr;
    
    return new Response(
        JSON.stringify(data)          
    );
}