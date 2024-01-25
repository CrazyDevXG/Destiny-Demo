'use server'
import { headers } from 'next/headers' 

  
    export async function dataMyUser(){

        const headerRequest = headers()
        const getHeaders = JSON.parse(headerRequest.get('dataUser'))
        
                  

            const resmyID = await fetch(`${process.env.NEXT_API_URL}/user/${getHeaders.myID}`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            });
            const myUser = resmyID.json()

            const resmyProImg = await fetch(`${process.env.NEXT_API_URL}/user/img/${getHeaders.myProImg}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const proImg = resmyProImg.json()

            return {myUser,proImg};
    }