'use client'
import Link from 'next/link'
import Image from 'next/image'
import date from 'date-and-time'
import { useEffect, useRef, useState  } from 'react'
import { imageLoader } from "/components/utils/loader.js"


export default function BoxMessages({ messages, srcPhoto, myData, friendInfo}) {  

    const refLastMessages = useRef(null);  
    const scrollToBottom = () =>{
        refLastMessages.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {       

        scrollToBottom();

 
      }, [messages]);
       
  
    return (      
         <>                 
                    
                        <div className="w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)]">  
                         
                            <div className="text-sm font-medium space-y-6">

                                <div className="flex justify-center">                                
                                    <div className="font-medium text-gray-500 text-sm dark:text-white/70">                                       
                                    </div>                             
                                </div> 

                            { messages.map((messages, key) => (   
                                <div className={messages.userId == myData.user_id ? 'flex gap-2 flex-row-reverse items-end' : 'flex gap-3'} key={key} ref={refLastMessages} >
                                    {messages.userId !== myData.user_id ? 
                                    <Image loader={imageLoader} src={`/${friendInfo.user_profile_img}`} width={80} height={80} alt="profile" className="w-9 h-9 rounded-full shadow"/> 
                                    : null} 
                                     

                                    <div className={messages.userId == myData.user_id ? 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-pink-400 to-red-400 text-white shadow' : 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-secondery'}
                                    >{messages.text}
                                    </div>

                                    <div className="text-gray-400 text-xs dark:text-white/70">{date.format(new Date(messages.time), 'HH:mm')}</div> 
                                </div>  
                            ))}

                            { srcPhoto.map((srcPhoto, key) => (
                                <div key={key}>
                                <div className={srcPhoto.userId == myData.user_id ? 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-pink-400 to-red-400 text-white shadow' : 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-secondery'}
                                    >
                                {srcPhoto.photo ? <Image src={srcPhoto.photo}  width={240} height={110} /> : null}
                                </div>
                                </div>
                            ))}
                                
                            </div>
                            <div id="side-chat" className="bg-slate-100/40 backdrop-blur w-full h-full dark:bg-slate-800/40 z-40 fixed inset-0 max-md:-translate-x-full md:hidden" uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"></div>
                        </div>                                           
    
        </>  
    )
}
 