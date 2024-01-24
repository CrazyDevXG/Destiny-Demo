'use client'
import Link from 'next/link'
import { useEffect, useRef, useState  } from 'react'
import { callUser } from '/components/utils/callApiFunction'



export default function HandleInputMs({userData}) {

    const [message, setMessage] = useState("");
    const [myData, setMyData] = useState([]);

        
      
        const handleSubmit = (e) => {

          let dataMS = {
            message,
          };
            console.log(dataMS);

          fetch(`http://localhost:3000/api/send/textMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataMS),

          }).then((res) => {   
            if (res.status === 200) {             
              setMessage("");
            }
          });
        };

        const handleSendMessage = () => {
          if (message.length > 0) {
            handleSubmit();
          }
        };
        const handleKeyPressed = (event) => {
          if (event.code === "Enter" && message.length > 0) {
            handleSubmit();
          }
        };
  
    return (      
         <>     
                        <form action={handleSendMessage}>
                        <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden"> 
                            <div id="message__wrap" className="flex items-center gap-2 h-full dark:text-white -mt-1.5">                                
                                <button type="button"  className="shrink-0">
                                    <ion-icon class="text-3xl flex m-2" name="cash-outline"></ion-icon>
                                </button>

                                <div className="dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-900" uk-drop="stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200"> 
                                    <div className="sm:w-full p-3 flex justify-center gap-5" uk-scrollspy="target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true">
                                       
                                        <button type="button" className="bg-sky-50 text-sky-400 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0 ">                                           
                                            100 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-sky-50 text-sky-600 border border-sky-200 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0 ">                                           
                                            300 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            500 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            1,000 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            3,000 <small>Points</small>
                                        </button>
                                    </div>                                    
                                </div>

                                <button type="button"  className="shrink-0">
                                    <ion-icon class="text-3xl flex m-2" name="happy-outline"></ion-icon>
                                </button>
                                <div className="dropbar p-2" uk-drop="stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 "> 
                                    <div className="sm:w-60 bg-white shadow-lg border rounded-xl  pr-0 dark:border-slate-700 dark:bg-dark3">
                                        <h4 className="text-sm font-semibold p-3 pb-0">Send Imogi</h4>
                                        <div className="grid grid-cols-5 overflow-y-auto max-h-44 p-3 text-center text-xl">
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😊 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🤩 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😎</div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🥳 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😂 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🥰 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😡 </div> 
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😊 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🤩 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😎</div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🥳 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😂 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🥰 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😡 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🤔 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😊 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🤩 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😎</div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 🥳 </div>
                                            <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200"> 😂 </div>                                          
                                        </div>         
                                    </div>                                    
                                </div>
                            </div>
                           
                            <div className="relative flex-1">                                
                                <textarea placeholder="Write your message" rows="1" className="w-full resize-none bg-secondery rounded-full px-4 p-2"
                               >
                                </textarea>                                       
                            </div>
                            <button type="submit" className="flex h-full dark:text-white">
                                <ion-icon class="text-2xl flex m-2" name="send-outline"></ion-icon> 
                            </button>                            
                        </div>
                        </form>
                    
                                      
    
        </>  
    )
}
 