'use client'
import Link from 'next/link'
import Image from 'next/image'
import date from 'date-and-time'
import { imageLoader } from "/components/utils/loader.js"


export default function Rooms({chatLists}) {    
  
                            return (
                                                   
                                        <div className="space-y-2 p-2 overflow-y-auto h-[calc(100vh-127px)]">   
                                           
                                            { chatLists.map((chat) => (chat.map((chat,key) => (
                                                                      
                                            <Link key={key} 
                                                  href={`/chat/rooms/${chat.room_id}?idfrn=${chat.user_id}`} scroll={false} className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-secondery">
                                                <div className="relative w-14 h-14 shrink-0">  
                                                    {chat.user_profile_img ?(<Image loader={imageLoader} src={`/${chat.user_profile_img}`} width={250} height={250}  alt="profile" priority={true} className="object-cover w-full h-full rounded-full" />):null}
                                                    <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-slate-800"></div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <div className="mr-auto text-sm text-black dark:text-white font-medium">{chat.user_fulname}</div>
                                                        <div className="text-xs font-light text-gray-500 dark:text-white/70">{date.format(new Date(chat.room_update_time), 'DD/MMM - HH:mm')}</div>
                                                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full dark:bg-slate-700"></div>
                                                    </div>
                                                    <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap">Last Messages? </div>
                                                </div>
                                            </Link>
                                            
                                            ))))
                                             } 

                                        </div>

  
                            )
}
 