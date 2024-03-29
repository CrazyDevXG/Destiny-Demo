'use client'
import Link from 'next/link'
import Image from 'next/image'
import { imageLoader } from "/components/utils/loader.js"


export default function ContactMenu({friendInfo}) {
  
    return (      
         <>              
                    
                    <div className="rightt w-full h-full absolute top-0 right-0 z-10 hidden transition-transform">
                        <div className="w-[360px] border-l shadow-lg h-screen bg-white absolute right-0 top-0 uk-animation-slide-right-medium delay-200 z-50 dark:bg-dark2 dark:border-slate-700">

                            <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500 -mt-px"></div>

                            <button type="button" className="absolute top-0 right-0 m-4 block p-2 bg-secondery rounded-full max-sm:hidden" uk-toggle="target: .rightt ; cls: hidden">
                                <ion-icon name="close" class="text-2xl flex"></ion-icon>
                            </button>
                            
                            <div className="py-10 text-center text-sm pt-20">                               
                                {friendInfo.user_profile_img ?(<Image loader={imageLoader} src={`/${friendInfo.user_profile_img}`} width={280} height={280}  alt="profile" priority={true} className="w-24 h-24 rounded-full mx-auto mb-3" />):null}
                                <div className="mt-8">
                                    <div className="md:text-xl text-base font-medium text-black dark:text-white"> {friendInfo.user_fulname} </div>
                                    <div className="text-gray-500 text-sm mt-1 dark:text-white/80">{friendInfo.user_at}</div>
                                </div>
                                <div className="mt-5">
                                     <Link href={`/profile/${friendInfo.user_id}`} className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold bg-secondery">View profile</Link>
                                </div>
                            </div>
 
                            <hr className="opacity-80 dark:border-slate-700"/>

                            <ul className="text-base font-medium p-3">
                                <li> 
                                    <div className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"> 
                                        <ion-icon name="notifications-off-outline" class="text-2xl"></ion-icon> Mute Notification     
                                        <label className="switch cursor-pointer ml-auto"> <input type="checkbox" /><span className="switch-button !relative"></span></label>
                                    </div>
                                </li>
                                <li> <button type="button" className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"> <ion-icon name="settings-outline" class="text-2xl"></ion-icon> Chat Room   </button> </li>                               
                                <li> <button type="button" className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-secondery"> <ion-icon name="trash-outline" class="text-2xl"></ion-icon> Delete Chat   </button> </li>
                                <li> <button type="button" className="flex items-center gap-5 rounded-md p-3 w-full hover:bg-red-50 text-red-500"> <ion-icon name="eye-off-outline" class="text-2xl"></ion-icon> Block    </button> </li>
                            </ul>                            
                            <button type="button" className="absolute mt-10 ml-4 p-2 bg-secondery rounded-full md:hidden" uk-toggle="target: .rightt ; cls: hidden">
                                <ion-icon name="chevron-back-outline" class="text-2xl flex"></ion-icon>
                            </button>
                           
                        </div>                        
                        <div className="bg-slate-100/40 backdrop-blur absolute w-full h-full dark:bg-slate-800/40" uk-toggle="target: .rightt ; cls: hidden"></div>
                    </div>

    
        </>  
    )
}
 