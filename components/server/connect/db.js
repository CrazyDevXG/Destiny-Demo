'use strict'
const mysql = require('mysql2/promise');


export async function query({ query, values }){
    
    const dbconnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_NAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWD,
        port: process.env.MYSQL_PORT,

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



