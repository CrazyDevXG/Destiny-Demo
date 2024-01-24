import { query } from "/components/server/connect/db";


export async function GET(request, {params}) {
    const roomLists = await query({
        query: "SELECT * FROM ds_chat_room WHERE room_member = ?",
        values: [params.roomMembers],
    });
   
    let data = roomLists.arr;
    
    return new Response(
        JSON.stringify(data)          
    );
}