
import { query } from "/server/connect/db";
import bcrypt from 'bcrypt';


export async function PUT(req) {    

    try {
        const { userID, password } = await req.json();
        const hashPassword = await bcrypt.hash(password, 10);
        const updateUsers = await query({
            query: "UPDATE `ds_user` SET user_passwd = ? WHERE user_id = ?",
            values: [hashPassword, userID]
        });      

        let message = "";

        if (updateUsers) {
            message = "success";
        } else {
            message = "error";
        }

        const editUser = {
            ID: userID,
            Password: hashPassword,
        };

        return new Response(JSON.stringify({
            update: message,
            status: 200,
            update: editUser
        }));
        
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error.message
        }));
    }

}