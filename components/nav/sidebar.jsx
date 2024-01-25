'use client'
import Image from 'next/image'
import Link from 'next/link'
import LogoIcon from '/public/assets/images/logo-icon.png'
import LogoDark from '/public/assets/images/logo-dark.png'
import LogoLight from '/public/assets/images/logo-light.png'
import { imageLoader } from "/components/utils/loader.js"
import Notyfi from './notify'
import Searching from './searching'
import { useEffect, useState } from 'react'
import { callMyProfile } from '/components/utils/callApiFunction'



export default function UserSidebar() {


    const [myData, setMyData] = useState([]);
    const uid = myData.user_id;
 
    useEffect(()=>{
        const getMyData = async() =>{
            const queryData = await callMyProfile(); 
            setMyData(queryData);
        }
        getMyData();
    }); 
    
    useEffect(()=>{
    function callApiOnline(uid){  
        fetch(`${process.env.NEXT_API_URL}/update/user/online`, {                   
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid })
    });
    }    
    callApiOnline(uid);
    });
    return (
       <>
            <div className="top-0 left-0 z-40 max-md:top-auto max-md:bottom-0 fixed">
                <div id="sidebar__inner" className="flex side md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-white shadow-md dark:bg-dark2 2xl:w-60 xl:w-60 max-xl:w-[60px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">

                    <div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
                        <Link href="/" id="logo" className="flex items-center gap-3">
                            <Image id="logo__icon" src={LogoIcon} width={220} height={220} priority={true} alt="Logo-icon" className="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up" />
                            <Image id="logo__img" src={LogoDark} width={220} height={220} priority={true} alt="Logo" className="w-full h-10 ml-1 max-xl:hidden max-md:block dark:!hidden" />
                            <Image id="logo__img" src={LogoLight} width={220} height={220} priority={true} alt="Logo" className="w-full h-10 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block" />
                        </Link>
                    </div>

                    <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">

                        <Link href="/people" scroll={ false }>
                            <ion-icon name="people-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Looking for </span>
                        </Link>  

                        <Link href="/friendship" scroll={ false }>                            
                            <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Friendship </span>
                            <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                        </Link>

                        <Link href="/chat" scroll={ false }>
                            <ion-icon name="chatbubble-ellipses-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Chat Rooms </span>
                            <div className="w-2 h-2 bg-green-500 rounded-full absolute left-7 top-2.5"></div> 
                        </Link>


                        <Link href="/popular" scroll={ false }>                            
                            <ion-icon name="sparkles-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Most Popular </span>
                        </Link>

                        <Link href="/shop" className="max-md:!hidden" scroll={ false }>
                        <ion-icon name="storefront-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Lovely Stores </span>
                        </Link> 

                        <Link href="" className="max-md:!fixed max-md:top-2 max-md:right-14" aria-selected="false">
                            <ion-icon name="mail-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Notifications </span> 
                            <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-7 top-2.5 hidden"></div>                           
                        </Link>
                        <Notyfi />   

                        <Link href="" className="max-md:!fixed max-md:top-2 max-md:right-2" aria-selected="false">
                            <ion-icon name="search-outline" class="text-2xl"></ion-icon>
                            <span className="max-xl:hidden"> Search </span>
                        </Link>
                        <Searching />     

                    </nav>

                    <div >
                        <Link href="" id="profile-link" className="flex items-center gap-2 md:p-3 py-3 px-6 group" aria-selected="false">
                           {myData.user_profile_img ?(<Image loader={imageLoader} src={`/${myData.user_profile_img}`} width={50} height={50} placeholder='empty' priority={true} alt="profile"  className="rounded-full md:w-8 md:h-8 w-7 h-7 shrink-0" />):null }  
                            <span className="font-semibold text-sm max-xl:hidden"> {myData.user_fulname} </span>
                            <ion-icon name="chevron-forward-outline" class="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"></ion-icon>
                        </Link>
                        <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">
                            <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>
                            <div className="p-4 text-xs font-medium">
                                <Link href="/profile" scroll={ false }>
                                {myData.user_profile_img ?(<Image loader={imageLoader} src={`/${myData.user_profile_img}`} width={50} height={50} placeholder='empty' priority={true} alt="mini-profile" className="w-8 h-8 rounded-full" />):null } 
                                    <div className="mt-2 space-y-0.5">
                                        <div className="text-base font-semibold"> {myData.user_fulname} </div>
                                        <div className="text-gray-400 dark:text-white/80"> @monroe </div>
                                    </div>
                                </Link>
                                <div className="mt-3 flex gap-3.5">
                                    <div> <Link href="/profile" scroll={ false }> <strong> 620K </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Credits </span> </Link> </div>
                                    <div> <Link href="/profile" scroll={ false }> <strong> 38 </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Friends </span> </Link>  </div>
                                </div>

                            </div>
                            <hr className="opacity-60" />
                            <ul className="text-sm font-semibold p-2">
                                <li> <Link href="/profile" scroll={ false } className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="person-outline" class="text-lg"></ion-icon> My Profile </Link></li>
                                <li> <Link href="/setting" scroll={ false } className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="settings-outline" class="text-lg"></ion-icon> Acount Setting  </Link></li>
                                <li> <Link href="/membership" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="ribbon-outline" class="text-lg"></ion-icon> Premium </Link></li>                                
                                <li> <Link href="/sign-out" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="log-out-outline" class="text-lg"></ion-icon> Log Out </Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
