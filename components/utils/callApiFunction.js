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

            const res = await fetch(`${process.env.NEXT_API_URL}/get/user/${data.myID}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store', 
                });             

            return res.json();
            
            }


        export async function callFindUser(){ 
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey);           

                const notfind = payload.user; 
                const res = await fetch(`${process.env.NEXT_API_URL}/get/user/find/${notfind.myID}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                });
                
                return res.json();
            
        }

        

        export async function callMyRooms(){ 
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey); 
            const getUser = payload.user;
                        
            const res = await fetch(`${process.env.NEXT_API_URL}/get/chat/${getUser.myID}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store', 
            });                
            return res.json();
                
        }

        export async function callChatList(){ 
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey); 
            const getUser = payload.user;


            const myRooms = await fetch(`${process.env.NEXT_API_URL}/get/chat/${getUser.myID}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store', 
            }).then((response) => response.json());     
        
            const chatLists = await Promise.all(
                myRooms.map((result) =>
                fetch(`${process.env.NEXT_API_URL}/get/chat/${getUser.myID}/${result.room_id}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                }).then((response) => response.json())
              )
            );               

                  
            return  chatLists;
                    
                
        }


        export async function callFriendInfo({friendId}){           
    
            const res = await fetch(`${process.env.NEXT_API_URL}/get/friend/${friendId}`,{
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store', 
                });                   

            return res.json();
            
            }

            export async function callFriendAll({friendId}){           
    
                const res = await fetch(`${process.env.NEXT_API_URL}/get/friend/all/${friendId}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    cache: 'no-store', 
                    });                   
    
                return res.json();
                
                }




        export async function callMessages({roomChatID}){                  
                
            const response = await fetch(`${process.env.NEXT_API_URL}/get/chat/messages/${roomChatID}`, {                   
                method: "GET",
                headers: { "Content-Type": "application/json" },
                cache: 'no-store',        
                });
       

            return response.json();
            }    


