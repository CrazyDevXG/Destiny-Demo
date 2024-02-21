'use client'
import USidebar from "/components/nav/sidebar"  
import Rooms from '/components/ui/chat/rooms'
import { useEffect, useState } from 'react'
import { callMyProfile, callChatList } from '/components/utils/callApiFunction'

export default function Chat() {
        
    const [myData, setMyData] = useState([]);
    const [chatLists, setChatLists] = useState([]); 
  

    useEffect(()=>{
        const getMyData = async() =>{
            const queryData = await callMyProfile(); 
            setMyData(queryData);
        }
        getMyData();

        const getMyChat = async () =>{    
            const queryData = await callChatList();  
            setChatLists(queryData);                
        }
        getMyChat();

    },[]); 
      
    return (
      <>              
            
            <USidebar myData={myData} />

                  <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small] sm:ml-[--w-side]">
                        <div className="2xl:max-w-4xl md:max-w-3xl md:ml-10 sm:mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">

                            <div className="flex bg-white dark:bg-dark2">                    
                                <div className="md:w-[360px] w-full relative border-r dark:border-slate-700">    
                                    <div id="side-chat" className="top-0 left-0  max-md:h-screen bg-white z-50 max-md:shadow  dark:bg-dark2"> 

                                        <div className="p-4 border-b dark:border-slate-700">                                
                                            <div className="flex mt-2 items-center justify-between">
                                                <h2 className="text-2xl font-bold text-black ml-1 dark:text-white"> Chats </h2>      
                                                <div className="flex items-center gap-2.5">
                                                    
                                                    <button className="group">
                                                        <ion-icon name="settings-outline" class="text-2xl flex group-aria-expanded:rotate-180"></ion-icon>
                                                    </button>                                       
                                                    
                                                    <button className="">
                                                        <ion-icon name="checkmark-circle-outline" class="text-2xl flex"></ion-icon>
                                                    </button>  
                                                </div>

                                               
                                            </div>
                                        
                                            <div className="relative mt-4">
                                                <div className="absolute left-3 bottom-1/2 translate-y-1/2 flex"><ion-icon name="search" class="text-xl"></ion-icon></div>
                                                <input type="text" placeholder="Search" className="w-full !pl-10 !py-2 !rounded-lg"/>
                                            </div> 
                                        </div>   
                                        
                                        <Rooms chatLists={chatLists} />
                                        
                                    </div>  

                                </div>  
                                
                            </div>
                        </div> 
                </main>
    
        </>  
    )
}
 