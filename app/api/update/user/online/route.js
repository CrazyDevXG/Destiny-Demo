import { query } from "/components/server/connect/db";

    export async function PUT(request) {

        try {
            const { uid } = await request.json();
            const userOnline = await query({
                query: "UPDATE `ds_user` SET user_online = 1, user_last_time = NOW() WHERE user_id = ?",
                values: [uid],           
            });            
            userOnline.affectedRows;

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