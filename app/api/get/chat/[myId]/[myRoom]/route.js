import { query } from "/server/connect/db";


export async function GET(request, {params}) {
    const chatLists = await query({
        query: "SELECT ds_chat_room.*, ds_user.user_id, ds_user.user_fulname, ds_user.user_at, ds_user.user_gender, ds_user.user_profile_img FROM ds_chat_room LEFT JOIN ds_user ON ds_chat_room.room_member = ds_user.user_id WHERE ds_chat_room.room_member != ? AND ds_chat_room.room_id = ?  ORDER BY ds_chat_room.room_update_time DESC",
        values: [params.myId, params.myRoom],
    });
   
    let data = chatLists.arr;
    
    return new Response(JSON.stringify(data));
}


