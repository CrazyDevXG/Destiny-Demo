'use client'
import Link from 'next/link'
import Image from 'next/image'
import USidebar from "/components/nav/sidebar"  
import Avatar06 from '/public/assets/images/avatars/avatar-6.jpg'

import { PreviewModal } from '/components/ui/profile/Modal_preview'

import { Co_Gallery } from '/components/ui/profile/Co_gallery'
import { Co_About } from '/components/ui/profile/Co_about'
import { Co_bioStatus } from '/components/ui/profile/Co_status'
import { Co_Interests } from '/components/ui/profile/Co_interests'



export default function UserProfile() {  

    return (
      <>  
        <div id="wrapper">             
            <USidebar />            
         <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="main__inner">           
                <div className="py-6 relative">
  
                    <div className="flex md:gap-16 gap-4 max-md:flex-col">
                        <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
                            <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900"> 
                                <Image src={Avatar06} alt="" className="w-full h-full absolute object-cover" />
                            </div>
                            <button type="button" className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"> <ion-icon name="camera" className="text-2xl"></ion-icon></button>
                        </div>
                        <div className="max-w-2x flex-1">
                            <h3 className="md:text-xl text-base font-semibold text-black dark:text-white"><span className='font-semibold text-blue-500'><ion-icon name="shield-checkmark" uk-tooltip="Confirmed Account"></ion-icon></span>Name</h3>                              
                            <p className="sm:text-sm text-gray-600 mt-1 font-normal text-xs"><ion-icon name="flash-off"></ion-icon>Offline</p> 
                                                       
                            <Co_bioStatus />                                 
                            
                            <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
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
                                <div className="flex items-center gap-3 text-sm">
                                    <button type="submit" className="button text-gray-600 bg-slate-200 hidden">Like</button>
                                    <button type="button" className="button bg-pink-100 text-pink-600 border border-pink-200">Like</button>
                                    <button type="submit" className="button bg-pink-600 text-white">Messages</button>
                                    <div> 
                                        <button type="submit" className="rounded-lg bg-slate-200/60 flex px-2 py-1.5 dark:bg-dark2"> <ion-icon class="text-xl" name="ellipsis-horizontal"></ion-icon></button>
                                        <div  className="w-[240px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"> 
                                        <nav> 
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="gift"></ion-icon>  Send Gifts </Link>                                             
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="share-social-outline"></ion-icon>  Share profile </Link> 
                                            <Link href="#"> <ion-icon class="text-xl shrink-0" name="alert-circle-outline"></ion-icon>  Report profile </Link> 
                                            <hr />
                                            <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl shrink-0" name="eye-off-outline"></ion-icon>  Block </Link> 
                                        </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
 
                <div className="mt-10">
                    <div  uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4 dark:bg-slate-800/60; start: 500; animation: uk-animation-slide-top">
                        
                        <nav className="text-sm text-center text-gray-500 capitalize font-semibold dark:text-white">
                            <ul className="flex gap-2 justify-center border-t dark:border-slate-700"
                                    uk-switcher="connect: #story_tab ; animation: uk-animation-fade, uk-animation-slide-left-medium">                            
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="camera-outline"></ion-icon> Photos  </Link> </li>
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="play-outline"></ion-icon> Video </Link> </li>
                                <li> <Link href="#" className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl" name="lock-closed-outline"></ion-icon> Private </Link> </li>
                            </ul>
                        </nav>
                    </div>

                    <div id="story_tab" className="uk-switcher">      
                    
                    <Co_Gallery />
                    <Co_Interests />      
                    <Co_About />        
                        
                        
                    </div>
                </div>                
            </div>
        </main> 

        </div>

        <PreviewModal /> 

        </>              
        )
}

 