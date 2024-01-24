'use server'
import { headers } from 'next/headers' 

  
    export async function dataMyUser(){

        const headerRequest = headers()
        const getHeaders = JSON.parse(headerRequest.get('dataUser'))
        
                  

            const resmyID = await fetch(`http://localhost:3000/api/user/${getHeaders.myID}`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            });
            const myUser = resmyID.json()

            const resmyProImg = await fetch(`http://localhost:3000/api/user/img/${getHeaders.myProImg}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const proImg = resmyProImg.json()

            return {myUser,proImg};
    }