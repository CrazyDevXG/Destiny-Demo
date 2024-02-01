import { query } from "/server/connect/db";


export async function POST(request) {

    try {
        const {id, name, email, pass, age, gender} = await request.json();
        const createUsers = await query({
            query: "INSERT INTO `ds_user` (user_id, user_fulname, user_email, user_passwd, user_age, user_gender) VALUES (?, ?, ?, ?, ?, ?)",
            values: [id, name, email, pass, age, gender],
        });
        const result = createUsers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const newUser = {
            ID: id,
            Name: name,
            Email: email,
            Password: pass,
            Age: age,
            Gender: gender,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            create: newUser
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: error
        }));
    }
}