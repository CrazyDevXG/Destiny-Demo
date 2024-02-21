'use client'
import USidebar from "/components/nav/sidebar"  
import Link from "next/link"
import Image from 'next/image'
import { imageLoader } from "/components/utils/loader.js"
import Rooms from '/components/ui/chat/rooms'
import HeadBarMs from '/components/ui/chat/headMs'
import ContactMenu from '/components/ui/chat/contactMenu'
import BoxMessages from '/components/ui/chat/messages'
import Sticker from "/components/ui/chat/sticker"
import { useEffect, useState } from 'react'
import { callMyProfile, callChatList, callFriendInfo } from '/components/utils/callApiFunction'
import { useSearchParams } from 'next/navigation'
import { io } from 'socket.io-client'


export default function ChatMessages({params}) {

        const socket = io('http://localhost:3090'); 

        const [myData, setMyData] = useState([]);
        const [chatLists, setChatLists] = useState([]);  
        const [friendInfo, setFriendInfo] = useState([]);

        const [newMessage, setNewMessage] = useState('');        
        const [messages, setMessages] = useState([]);
        
        const [fileImg, setFileImg] = useState();
        const [srcPhoto, setSrcPhoto] = useState([]);

        const searchParams = useSearchParams();
        const friendId = searchParams.get('idFN');        
        const roomId = params.id_room;
        const userId = myData.user_id;

        const joinrChat = () =>{
            socket.emit("join_room", roomId);
        }
       

        useEffect(()=>{
            const getMyData = async() =>{
                const queryData = await callMyProfile(); 
                setMyData(queryData);
            }
            getMyData();

            const getMyChat = async () =>{    
                const queryMyChat = await callChatList();  
                setChatLists(queryMyChat);                
            }
            getMyChat();        

            joinrChat();

        },[roomId]);  

        
    useEffect(()=>{ 
        const getMyFriendInfo = async () =>{    
            const queryFriendInfo = await callFriendInfo({friendId});  
            setFriendInfo(queryFriendInfo);                
        }
        getMyFriendInfo();         

    },[friendId]); 
    
    useEffect(() => {
       
        socket.on("receive_msg", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });         
        
 
      }, [socket]);


        const sendMessage = () => {
           
              const msgData = { 
                roomId,
                userId,                          
                text: newMessage,
                time: new Date(Date.now())                
              };

              socket.emit("send_msg", msgData);
              setNewMessage("");
          
          };

          const handleSendMessage = () => {
            if (newMessage.length > 0) {
              sendMessage();
            }
          };
          const handleKeyPressed = (event) => {
            if (event.key === "Enter" && newMessage.length > 0) {
              sendMessage();
            }
          };

          const sendPhotos = () => {

            const reader = new FileReader();          
            reader.readAsDataURL(fileImg);
             
              reader.onloadend = () => {
                
                const imgData = { 
                    roomId,
                    userId,  
                    photo: reader.result,
                    time: new Date(Date.now())                
                  };
                
                socket.emit('upload', imgData);                
              }
            setFileImg();
          }

          const setSelectPhoto = (e) =>{
            setFileImg(e.target.files[0]);

            sendPhotos();
          }



        
    return (
      <>              
            
            <USidebar myData={myData}/>

                  <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small] sm:ml-[--w-side]">

                        <div className="2xl:max-w-4xl md:max-w-3xl md:ml-10 sm:mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">
                            <div className="flex bg-white dark:bg-dark2">                    
                                <div className="md:w-[310px] xl:w-[340px] relative border-r dark:border-slate-700">    
                                <div id="side-chat" className="top-0 left-0 max-md:fixed max-md:w-5/6 max-md:h-screen bg-white z-50 max-md:shadow max-md:-translate-x-full dark:bg-dark2">                                
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

                                                    <button type="button" className="md:hidden" uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full">
                                                        <ion-icon name="chevron-down-outline"></ion-icon>
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

                    <div className="flex-1"> 
                                    <HeadBarMs friendInfo={friendInfo} />
                                    
                                    <BoxMessages messages={messages} srcPhoto={srcPhoto} myData={myData} friendInfo={friendInfo} />



                        <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden">

                                <Sticker setSelectPhoto={setSelectPhoto}/>                                 
                          
                                    <div className="relative flex-1">                                
                                        <input 
                                        type="text"
                                        name="messageText"
                                        placeholder="Write your message" 
                                        rows="1" 
                                        className="w-full resize-none bg-secondery rounded-full px-4 p-2" 
                                        value={newMessage}
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        onKeyDown={handleKeyPressed}
                                        />                                       
                                    </div>

                                    <button type="submit" className="flex h-full dark:text-white" onClick={handleSendMessage}>
                                        <ion-icon class="text-2xl flex m-2" name="send-outline"></ion-icon> 
                                    </button>  

                                </div>                        
                         </div>                                

                                <ContactMenu friendInfo={friendInfo} />

                            </div>      
                        </div>   

                        <div className="flex justify-end">                             
                                <div className="hidden xl:block xl:absolute xl:w-[460px] top-0 right-0 bg-white z-49 xl:h-screen max-xl:-translate-x-full dark:bg-dark2 border-l dark:border-slate-700">                                
                                        <div className="px-6 py-4">
                                        <div className="flex gap-4 mx-auto max-flex-col">
                                            <div className="relative mt-5 p-1 rounded-full h-full max-w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                                                <Link href={`/profile/${friendInfo.user_id}`}>
                                                <div className="relative h-20 w-20 rounded-full overflow-hidden border-[3px] border-gray-100 shrink-0 dark:border-slate-900">                                 
                                                    {friendInfo.user_id ? 
                                                        <Image loader={imageLoader} src={`/${friendInfo.user_profile_img}`} width={80} height={80} alt="profile" className="w-full h-full absolute object-cover"/> 
                                                        : null} 
                                                </div>
                                                </Link>
                                            </div>
                                            <div className="max-w-2x flex-1">
                                                <h3 className="mt-5 text-base font-semibold text-black dark:text-white">
                                                    <span className={friendInfo.user_activated == 1 ? 'font-semibold text-blue-500 mr-1' : 'font-semibold text-gray-500 mr-1'}>
                                                        {friendInfo.user_activated == 1 ? <ion-icon name="shield-checkmark" uk-tooltip="Account Confirmed"></ion-icon> : <ion-icon name="shield-half-outline" uk-tooltip="Non-Activated"></ion-icon>}
                                                    </span>
                                                        {friendInfo.user_fulname}
                                                    </h3>                              
                                                <p className={friendInfo.user_online == 1 ? 'text-xs text-green-500 font-semibold sm:text-sm mt-1' : 'text-xs text-gray-300 font-semibold'}>
                                                {friendInfo.user_online == 1 ? <ion-icon name="flash"></ion-icon> : <ion-icon name="flash-off"></ion-icon> }
                                                {friendInfo.user_online == 1 ? 'Online' : 'Offline' }
                                                </p>     
                                                
                                                <div className="flex items-end justify-between mt-4 max-md:flex-col gap-4">
                                                    <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
                                                        <div>
                                                            <p>Photos</p>
                                                            <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">0</h3>
                                                        </div>
                                                        <div>
                                                            <p>Video</p>
                                                            <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">0</h3>
                                                        </div>
                                                        <div>
                                                            <p>Like</p>
                                                            <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">0</h3>
                                                        </div>
                                                    </div>                                                    
                                                </div>                        
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                             <hr />
                                        </div>
                                    </div>                                       
                                </div>                                 
                            </div>
                       
                </main>               
               
    
        </>  
    )
}
 