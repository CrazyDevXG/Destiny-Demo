'use client'
import Image from "next/image"
import Post2 from '/public/assets/images/post/post-2.jpg'
import Link from "next/link"


export function PreviewModal(){
    return (     
        <>        
       

            <div className="hidden lg:p-20 max-lg:!items-start" id="preview_modal" uk-modal="">        
            <div className="uk-modal-dialog tt relative mx-auto overflow-hidden shadow-xl rounded-lg lg:flex items-center ax-w-[86rem] w-full lg:h-[80vh]"> 

                <div className="lg:h-full lg:w-[calc(100vw-400px)] w-full h-96 flex justify-center items-center relative">                
                    <div className="relative z-10 w-full h-full">
                        <Image src={Post2} alt="" className="w-full h-full object-cover absolute" />
                    </div>  
                
                    <button type="button"  className=" rounded-full p-2 absolute right-0 top-0 m-3 uk-animation-slide-right-medium z-10 dark:bg-slate-600 uk-modal-close">
                        <ion-icon class="text-3xl" name="close-outline"></ion-icon>
                    </button>
                </div>

            
                <div className="lg:w-[400px] w-full bg-white h-full relative  overflow-y-auto shadow-xl dark:bg-dark2 flex flex-col justify-between">                
                    <div className="p-5 pb-0">                   
                        <div className="flex gap-3 text-sm font-medium">
                            <Image src={Post2} alt="" className="w-9 h-9 rounded-full"/>
                            <div className="flex-1">
                                <h4 className="text-black font-medium dark:text-white"> UserName </h4>
                                <div className="text-gray-500 text-xs dark:text-white/80"> Post Date</div>
                            </div>     
                        </div>

                        <p className="font-normal text-sm leading-6 mt-4"></p>
                        <div className="shadow relative -mx-5 px-5 py-3 mt-3">
                            <div className="flex items-center gap-4 text-xs font-semibold">
                                <div className="flex items-center gap-2.5">
                                    <button type="button" className="button__ico text-red-500 bg-red-100 dark:bg-slate-700"> <ion-icon class="text-2xl" name="heart"></ion-icon> </button>
                                    <Link href="#"></Link>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button type="button" className="button__ico bg-slate-100 dark:bg-slate-700"> <ion-icon class="text-2xl" name="gift"></ion-icon> </button>
                                    <span></span>
                                </div>
                                
                                    <button type="button" className="button__ico ml-auto"> <ion-icon class="text-3xl" name="chatbubble-ellipses-outline"></ion-icon> </button>  
                                
                            </div>
                        </div>
                    </div>
                    

                   
                </div>   
            </div>        
        </div>    
       
        </>    
    )
}