'use server'
import { jwtVerify,importJWK } from 'jose'
import { cookies } from 'next/headers'


        export async function callMyProfile(){
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey);
            const  data = payload.user;

            const response = await fetch(`http://localhost:3000/api/get/user/${data.myID}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store', 
                });
                const myData = response.json();

            return myData;
            
            }

            export async function callUser({uid}){           
    
                const response = await fetch(`http://localhost:3000/api/get/user/${uid}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                    });
                    const userData = response.json();
    
                return userData;
                
                }


        export async function callMyPhoto(){ 
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey);

            if(payload.user){
                const getUser = payload.user; 
                const res = await fetch(`http://localhost:3000/api/get/user/img/${getUser.myID}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                });
                const myProImg = res.json();
                return myProImg;
            }
        }


        

        export async function callChatList(){ 
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey); 

            if(payload.user){
                const getUser = payload.user; 
                const res = await fetch(`http://localhost:3000/api/get/chat/${getUser.myID}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                });
                const myChatRooms = res.json();
                return myChatRooms;
            }
        }


        export async function callMessages({roomChatID}){                  
                
            const response = await fetch(`http://localhost:3000/api/get/chat/messages/${roomChatID}`, {                   
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: 'no-store',        
        });
        const dataChat = response.json();

        return dataChat;
        }    


