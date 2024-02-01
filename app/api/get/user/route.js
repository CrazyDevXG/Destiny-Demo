import { query } from "/server/connect/db";


export async function GET(req) {
    const users = await query({
        query: "SELECT * FROM ds_user",
        values: [],
    });

    let allData = users.arr;
    return new Response(JSON.stringify(allData));
}

