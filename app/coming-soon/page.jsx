'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import USidebar from "/components/nav/sidebar"  
import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'
import Reel1 from '/public/assets/images/reels/reels-1.jpg'
import IconPlay from '/public/assets/images/icon-play.svg'

import { useEffect, useState } from 'react'
import { callMyProfile } from '/components/utils/callApiFunction'

export default function Popular() {

    const [myData, setMyData] = useState([]);

    useEffect(()=>{
        const getMyData = async() =>{
            const queryData = await callMyProfile(); 
            setMyData(queryData);
        }
        getMyData();
    },[]); 

    return  (
        <>
            <USidebar myData={myData} />
                <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
                        <div className="main__inner pt-6">   
                            <div className="page__heading">
                                <Link href="#">
                                    <ion-icon name="chevron-back-outline"></ion-icon> Back
                                </Link>
                                <h1> Maintenance</h1>
                            </div>
                            <div className="md:max-w-[1024px] mx-auto">                           
                          
                          

                            <div className="mt-8">      
                                <div className="flex justify-center pt-20">
                                    <h1 className="md:text-8xl text-5xl font-bold text-black dark:text-white">Coming Soon..</h1>                                                                
                                </div>   
                                <div className="flex justify-center my-10">                              
                                    <h2 className="md:text-3xl text-xl font-bold text-black dark:text-white">ปิดปรับปรุงหน้าเพจชั่วคราว</h2>                                   
                                </div>                              
                            </div>
                        </div> 
                    </div>
                </main>


        </>
    )
}