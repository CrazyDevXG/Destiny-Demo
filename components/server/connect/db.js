const mysql = require('mysql2/promise');


export async function query({ query, values }){
    
    const dbconnection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,

    });

    try{
        const [arr] = await dbconnection.execute(query, values);
        dbconnection.end();
        let rows = {arr};

        return rows;

    }catch(error){
        throw Error(error.message);       
    }

}



