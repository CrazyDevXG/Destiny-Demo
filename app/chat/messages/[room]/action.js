'use server'

           export async function callMessages({roomChatID}){                  
                
                const response = await fetch(`http://localhost:3000/api/get/chat/messages/${roomChatID}`, {                   
                method: "GET",
                headers: { "Content-Type": "application/json" },        
            });
            const dataChat = response.json();

            return dataChat;
            }    