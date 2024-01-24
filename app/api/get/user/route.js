import { query } from "/components/server/connect/db";


export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM ds_user",
        values: [],
    });

    let allData = users.arr;
    return new Response(JSON.stringify(allData, {
        status: 200,
    }));
}

