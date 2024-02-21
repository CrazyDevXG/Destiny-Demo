'use client'
import Link from 'next/link'
import Image from 'next/image'
import { imageLoader } from "/components/utils/loader.js"


    export default function HeadBarMs({friendInfo}){

            return(

                <div className="flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium">                        
                <div className="flex items-center sm:gap-4 gap-2">                                
                    <button type="button" className="md:hidden" uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full">
                        <ion-icon name="chevron-back-outline" class="text-2xl -ml-4"></ion-icon>
                    </button>
                    
                    <div className="relative cursor-pointer"  uk-toggle="target: .rightt ; cls: hidden">                       
                        {friendInfo.user_profile_img ?(<Image loader={imageLoader} src={`/${friendInfo.user_profile_img}`} width={80} height={80}  alt="profile" priority={true} className="w-8 h-8 rounded-full shadow" />):null}                        
                    </div>
                    <div className="cursor-pointer" uk-toggle="target: .rightt ; cls: hidden">
                        <div className="text-base font-bold"> {friendInfo.user_fulname}</div>
                        <div className={friendInfo.user_online == 1 ? 'text-xs text-green-500 font-semibold' : 'text-xs text-gray-300 font-semibold'}>
                            {friendInfo.user_online == 1 ? <ion-icon name="flash"></ion-icon> : <ion-icon name="flash-off"></ion-icon> }
                            {friendInfo.user_online == 1 ? 'Online' : 'Offline'}
                        </div>
                    </div>
                </div>  

                <div className="flex items-center gap-4">
                    <button type="button" className="button__ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                        </svg>
                    </button>                              
                    <button type="button" className="hover:bg-slate-100 mt-1 rounded-full" uk-toggle="target: .rightt ; cls: hidden">
                        <ion-icon name="ellipsis-vertical-circle-outline" class="text-3xl"></ion-icon>
                    </button> 
                </div>                        
                </div>
            )
        }