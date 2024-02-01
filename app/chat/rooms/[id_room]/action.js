'use server'

           export async function callMessages({roomChatID}){                  
                
                const response = await fetch(`${process.env.NEXT_API_URL}/get/chat/messages/${roomChatID}`, {                   
                method: "GET",
                headers: { "Content-Type": "application/json" },        
            });
            const dataChat = response.json();

            return dataChat;
            }    