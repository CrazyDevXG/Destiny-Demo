'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { imageLoader } from "/components/utils/loader.js"
import { useEffect, useState } from 'react'
import { callMyProfile, callFindUser } from '/components/utils/callApiFunction.js'

import { Compo_Online } from '/components/ui/compo_online'
import { Compo_Suggest } from '/components/ui/compo_suggest'
import { FilterModal } from '/components/ui/modal/filter'

import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'
import  UserSidebar  from '/components/nav/sidebar' 
 
export default function Home() {  

    const [myData, setMyData] = useState([]);
    const [findsData, setFindsData] = useState([]);

    useEffect(()=>{
        const getMyData = async() =>{
            const queryData = await callMyProfile(); 
            setMyData(queryData);
        }
        getMyData();

        const getFindData = async() =>{
            const queryFinds = await callFindUser(); 
            setFindsData(queryFinds);
        }
        getFindData();
    },[]); 

    return (      
            <>                       
            <UserSidebar myData={myData}/>

            <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
            <div className="main__inner">
                    
                <Compo_Online />

                <div className="flex max-lg:flex-col xl:gap-10 md:gap-3 md:mt-10" id="js-oversized">
                 <div className="md:max-w-[765px] flex-1 xl:space-y-6 space-y-3 mx-auto">  

                        <div className="bg-white rounded-xl shadow-sm p-4 space-y-4 text-sm font-medium border1 dark:bg-dark2">
                            <div className="flex items-center gap-3">
                                <div className="flex-1 bg-slate-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer dark:bg-dark3" uk-toggle="target: #filter-setting"> 
                                    <div className="py-2.5 text-center dark:text-white"><ion-icon name="filter-outline"></ion-icon> Looking: Female 20{" > "}25 </div>
                                </div>
                                <div className="p-2 transition-all rounded-lg cursor-pointer" uk-toggle="target: #location-setting">
                                    <ion-icon name="location-outline" class="text-2xl text-red-400"></ion-icon>
                                </div>
                                <div className="p-2 transition-all rounded-lg cursor-pointer" uk-toggle="target: #filter-setting">
                                    <ion-icon name="settings-outline" class="text-2xl text-pink-300"></ion-icon>
                                </div>
                            </div>                            
                        </div>                                              

                        <div>                  
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-4 text-xs font-normal text-gray-500 dark:text-white/80" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"> 
                        
                        {findsData.map((findsData, key) => (
                                    <div key={key}>
                                    <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                    <Link href={`/profile/${findsData.user_id}`}>
                                        <div className="relative w-30 h-30 mx-auto">                                         
                                            {findsData.user_profile_img ? 
                                            <Image loader={imageLoader} src={`/${findsData.user_profile_img}`} width={380} height={380} alt="profile" className="w-280 h-280 object-cover rounded shadow"/> 
                                            : null}
                                        </div>
                                    </Link>
                                    <div className="mt-5 text-center w-full">
                                        <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white">{findsData.user_fulname}</h4> </Link>
                                        <div className="mt-1"> <ion-icon name="male-female"></ion-icon>{findsData.user_gender} : {findsData.user_ages} years</div>
                                        
                                    </div>
                                    </div>
                                    </div>
                        ))}                                                     

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> Jesse Steeve</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> John Michael</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> Martin Gray</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> Monroe Parker</h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> James Lewis </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>

                            <div className="flex flex-col items-center shadow-sm p-2 rounded-xl bg-white border1 dark:bg-dark2">
                                <Link href="/profile/test1">
                                    <div className="relative w-30 h-30 mx-auto">
                                        <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full"/>
                                    </div>
                                </Link>
                                <div className="mt-5 text-center w-full">
                                    <Link href="/profile/test1"> <h4 className="font-semibold text-sm text-black dark:text-white"> Alexa stella </h4> </Link>
                                    <div className="mt-1"> <ion-icon name="male-female"></ion-icon>female : 25 years</div>
                                    
                                </div>
                            </div>       
                        </div>
                        <div className="flex justify-center my-10">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>
                    </div>
                                                
                        
                    </div> 

                    <Compo_Suggest />

                </div> 
            </div> 

        </main>

        <FilterModal />
           
        </>  
        
    )
}
 