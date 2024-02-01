'use client'
import USidebar from "/components/nav/sidebar"  
import Rooms from '/components/ui/chat/rooms'
import HeadBarMs from '/components/ui/chat/headMs'
import ContactMenu from '/components/ui/chat/contactMenu'
import BoxMessages from '/components/ui/chat/messages'
import Sticker from "@/components/ui/chat/sticker"
import { useEffect, useState } from 'react'
import { callMyProfile, callChatList, callFriendInfo } from '/components/utils/callApiFunction'
import { useSearchParams } from 'next/navigation'
import { io } from 'socket.io-client'


export default function ChatMessages({params}) {

        const socket = io('http://localhost:3010'); 

        const [myData, setMyData] = useState([]);
        const [chatLists, setChatLists] = useState([]);  
        const [friendInfo, setFriendInfo] = useState([]);

        const [newMessage, setNewMessage] = useState('');        
        const [messages, setMessages] = useState([]);
        
        const [fileImg, setFileImg] = useState();
        const [srcPhoto, setSrcPhoto] = useState([]);

        const searchParams = useSearchParams();
        const friendId = searchParams.get('idfrn');        
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
        
        socket.on("receive_Img", (imgData) => {
            setSrcPhoto((prevImg) => [...prevImg, imgData]);
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
                        <div className="2xl:max-w-6xl mx-auto h-screen relative shadow-lg overflow-hidden border1 max-md:pt-14">

                            <div className="flex bg-white dark:bg-dark2">                    
                                <div className="md:w-[380px] relative border-r dark:border-slate-700">    
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
                </main>
    
        </>  
    )
}
 