import { query } from "/server/connect/db";


export async function GET(request, {params}) {
    const roomLists = await query({
        query: "SELECT room_id FROM ds_chat_room WHERE room_member = ?",
        values: [params.myId],
    });
   
    let data = roomLists.arr;
    
    return new Response(JSON.stringify(data));
}