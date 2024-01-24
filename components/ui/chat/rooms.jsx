'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { callChatList } from '/components/utils/callApiFunction'
import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'


export default function Rooms() {
        
                const [chatLists, setChatLists] = useState([]);               

                useEffect(()=>{
                    
                    const getMyChat = async () =>{    
                        const queryData = await callChatList();  
                        setChatLists(queryData);
                    }

                    getMyChat();
                },[]); 

  
                            return (
                                                   
                                        <div className="space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)]">   
                                           
                                            { chatLists.map((chatLists) => (                              
                                            <Link key={chatLists.room_id} 
                                                  href={`/chat/messages/${chatLists.room_id}`} scroll={false} className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery">
                                                <div className="relative w-14 h-14 shrink-0">                                                 
                                                    <Image src={Avatar02} width={250} height={250} priority={true} alt="" className="object-cover w-full h-full rounded-full"/>
                                                    <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800"></div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <div className="mr-auto text-sm text-black dark:text-white font-medium">name</div>
                                                        <div className="text-xs font-light text-gray-500 dark:text-white/70">04:20</div>
                                                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700"></div>
                                                    </div>
                                                    <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">Last Messages?</div>
                                                </div>
                                            </Link>
                                                ))
                                             } 

                                        </div>

  
                            )
}
 