import { query } from "/server/connect/db";

    export async function POST(request) {

        try {
            const { dataMS } = await request.json();
            const sendTextMessages = await query({
                query: "INSERT INTO `ds_message` (mes_room_id, mes_uid, mes_text) VALUES (?, ?, ?)",
                values: [dataMS.room, dataMS.uid, dataMS.text],           
            });            
            sendTextMessages.affectedRows;

            return new Response(JSON.stringify({               
                status: 200
            }));
            } catch (error) {
            return new Response(JSON.stringify({
                status: 500,
                data: error
            }));
            }

    }