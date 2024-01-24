import { query } from "/components/server/connect/db";

export async function PUT(request) {

    try {
        const { id, name, email, age, gender } = await request.json();
        const updateUsers = await query({
            query: "UPDATE `ds_user` SET user_fulname = ?, user_email = ?, user_ages = ?, user_gender = ? WHERE user_id = ?",
            values: [name, email, age, gender, id],
        });
        const result = updateUsers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const editUser = {
            ID: id,
            Name: name,
            Email: email,
            Age: age,
            Gender: gender,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            update: editUser
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error
        }));
    }

}