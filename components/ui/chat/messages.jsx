'use client'
import Link from 'next/link'
import Image from 'next/image'
import date from 'date-and-time'
import { useEffect, useRef, useState  } from 'react'
import { imageLoader } from "/components/utils/loader.js"
import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'


export default function BoxMessages({ textChat }) {

    const [messages, setMessage] = useState(textChat);  
    
    const refLastMessages = useRef(null);  
    const scrollToBottom= () =>{
        refLastMessages.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" })
    }
 
    useEffect(() => {     
        
        setMessage(textChat);          
        scrollToBottom();

    }, [textChat]);  
       
  
    return (      
         <>                 
                    
                        <div className="w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-137px)] h-[calc(100vh-250px)]">  
                         
                            <div className="text-sm font-medium space-y-6">

                                <div className="flex justify-center">                                
                                    <div className="font-medium text-gray-500 text-sm dark:text-white/70">                                       
                                    </div>                             
                                </div> 

                                { messages.map((messages) => (   
                                <div className={messages.mes_uid == 'ds10001' ? 'flex gap-2 flex-row-reverse items-end' : 'flex gap-3'} key={messages.mes_id} ref={refLastMessages} >
                                    {messages.mes_uid !== 'ds10001' ? 
                                    <Image src={Avatar02} alt="" className="w-9 h-9 rounded-full shadow"/> 
                                    : null} 

                                    <div className={messages.mes_uid == 'ds10001' ? 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-pink-500 to-red-400 text-white shadow' : 
                                    'px-4 py-2 rounded-[20px] max-w-sm bg-secondery'}
                                    >{messages.mes_text}
                                    </div>

                                    <div className="text-gray-400 text-xs dark:text-white/70">{date.format(new Date(messages.mes_time), 'HH:mm')}</div> 
                                </div>  
                                 ))
                                } 
                                
                            </div>
                        </div>                                           
    
        </>  
    )
}
 