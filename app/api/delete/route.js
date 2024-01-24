import { query } from "/components/server/connect/db";

export async function DELETE(request) {

    try {
        const { id } = await request.json();
        const deleteUser = await query({
            query: "DELETE FROM ds_user WHERE user_id = ?",
            values: [id],
        });
        const result = deleteUser.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const userID = {
            id: id,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            delete: userID
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error
        }));
    }

}