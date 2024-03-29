'use client'
import Image from 'next/image'
import USidebar from "/components/nav/sidebar" 
import { useEffect,useState } from 'react'
import { callMyProfile } from '/components/utils/callApiFunction'
import { imageLoader } from "/components/utils/loader"

  

export default function MySetting() {  

    const [myData, setMyData] = useState({});    

    useEffect(()=>{
        const getMyData = async() =>{

            const queryData = await callMyProfile();     
            setMyData(queryData);           
        }
        getMyData();
    },[myData]); 
        
        return (
                <>  
                <div id="wrapper">             
                <USidebar myData={myData} />

                 <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
                            <div className="max-w-2xl mx-auto">                              
                                <div className="page__heading py-6 px-2 mt-12">
                                    <a href="/profile">
                                        <ion-icon name="chevron-back-outline"></ion-icon> Back
                                    </a>
                                    <h1> Settings </h1>
                                </div>
                                
                                <div className="bg-white border border-slate-200 rounded-xl shadow-sm dark:border-slate-700 dark:bg-dark2">
                                    
                                    <div className="flex md:gap-8 gap-4 items-center md:p-10 p-6">                
                                        <div className="relative md:w-20 md:h-20 w-12 h-12 shrink-0"> 
                                            <label htmlFor="file" className="cursor-pointer">
                                            {myData.user_profile_img ?(<Image id="img" loader={imageLoader} src={`/${myData.user_profile_img}`} width={250} height={250} priority={true}  className="object-cover w-full h-full rounded-full" alt="profile"/>):null}
                                                <input type="file" id="file" className="hidden" />
                                            </label>
                    
                                            <label htmlFor="file" className="md:p-1 p-0.5 rounded-full bg-slate-600 md:border-4 border-white absolute -bottom-2 -right-2 cursor-pointer dark:border-slate-700">
                    
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:w-4 md:h-4 w-3 h-3 fill-white">
                                                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                                    <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                                </svg>                    
                                                <input id="file" type="file" className="hidden" />                            
                                            </label>

                                        </div>
                                        <div className="flex-1">
                                            <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">{myData.user_fulname}</h3>
                                            <p className="text-sm text-blue-600 mt-1 font-normal">{myData.user_at}</p>
                                        </div>
                                    </div>
                                    
                                    <hr className="border-t border-gray-100 dark:border-slate-700"/>                                    
                                   
                                    <div className="relative -mb-px px-2" tabIndex="-1" uk-slider="finite: true">
                                        <nav className="overflow-hidden rounded-xl uk-slider-container pt-2">                            
                                            <ul className="uk-slider-items w-[calc(100%+10px)] capitalize font-semibold text-gray-500 text-sm dark:text-white" 
                                                uk-switcher="connect: #setting_tab; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">                                                 
                                                <li className="w-auto pr-2.5"> <a href="#" className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"> General </a> </li>
                                                <li className="w-auto pr-2.5"> <a href="#" className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"> social links</a> </li>                                               
                                                <li className="w-auto pr-2.5"> <a href="#" className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"> notifications</a> </li> 
                                                <li className="w-auto pr-2.5"> <a href="#" className="inline-block p-4 pt-2 border-b-2 border-transparent aria-expanded:text-blue-500 aria-expanded:border-blue-500"> password</a> </li>                                                 
                                            </ul>                                        
                                        </nav>                                
                                    </div>                
                                </div>
                                
                                <div className="mt-6 mb-20 text-sm font-medium text-gray-600 dark:text-white/80">
                                    <div id="setting_tab" className="uk-switcher bg-white border rounded-xl shadow-sm md:py-12 md:px-20 p-6 overflow-hidden dark:border-slate-700 dark:bg-dark2">      
                                        <div>
                                            <div>                                                
                                                <div className="space-y-6">
                                                    <div className="md:flex items-center gap-10">
                                                        <label className="md:w-32 text-right"> @ID </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <input type="text" defaultValue={myData.user_at} className="lg:w-1/2 w-full"/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="md:flex items-center gap-10">
                                                        <label className="md:w-32 text-right"> Full Name </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <input type="text" defaultValue={myData.user_fulname} className="w-full"/>
                                                        </div>
                                                    </div> 
                            
                                                    <div className="md:flex items-start gap-10">
                                                        <label className="md:w-32 text-right"> Bio </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <textarea className="w-full" rows="5" placeholder="Inter your Bio"></textarea>
                                                        </div>
                                                    </div> 
                        
                                                    <div className="md:flex items-center gap-10">
                                                        <label className="md:w-32 text-right"> Gender </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <select className="!border-0 !rounded-md lg:w-1/2 w-full">
                                                                <option value="1">Male</option>
                                                                <option value="2">Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="md:flex items-center gap-10">
                                                        <label className="md:w-32 text-right"> Relationship </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <select className="!border-0 !rounded-md lg:w-1/2 w-full">
                                                                <option value="0">None</option>
                                                                <option value="1"  >Single</option>
                                                                <option value="2"  >In a relationship</option>
                                                                <option value="3"  >Married</option>
                                                                <option value="4"  >Engaged</option>
                                                            </select>
                                                        </div>
                                                    </div>                 

                                                </div>
                    
                                                <div className="flex items-center justify-center gap-4 mt-16">
                                                    <button type="submit" className="button lg:px-6 bg-secondery max-md:flex-1"> Cancle</button>
                                                    <button type="submit" className="button lg:px-10 bg-primary text-white max-md:flex-1"> Save <span className="ripple-overlay"></span></button>
                                                </div>                                                
                                            </div> 
                                        </div> 

                                        <div>
                                            <div>
                                                <div className="font-normal text-gray-400">                                                
                                                    <div>
                                                        <h4 className="text-xl font-medium text-black dark:text-white"> Social Links </h4>
                                                        <p className="mt-3 font-normal text-gray-600 dark:text-white">We may still send you important notifications about your account and content outside of you preferred notivications settings</p>
                                                    </div>
                    
                                                    <div className="space-y-6 mt-8">                    
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-blue-50 rounded-full p-2 flex ">
                                                                <ion-icon name="logo-facebook" class="text-2xl text-blue-600"></ion-icon> 
                                                            </div>
                                                            <div className="flex-1">
                                                                <input type="text" className="w-full" placeholder="http://www.facebook.com/myname"/>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-pink-50 rounded-full p-2 flex ">
                                                                <ion-icon name="logo-instagram" class="text-2xl text-pink-600"></ion-icon> 
                                                            </div>
                                                            <div className="flex-1">
                                                                <input type="text" className="w-full" placeholder="http://www.instagram.com/myname"/>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-sky-50 rounded-full p-2 flex ">
                                                                <ion-icon name="logo-twitter" class="text-2xl text-sky-600"></ion-icon> 
                                                            </div>
                                                            <div className="flex-1">
                                                                <input type="text" className="w-full" placeholder="http://www.twitter.com/myname"/>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="bg-red-50 rounded-full p-2 flex ">
                                                                <ion-icon name="logo-youtube" class="text-2xl text-red-600"></ion-icon> 
                                                            </div>
                                                            <div className="flex-1">
                                                                <input type="text" className="w-full" placeholder="http://www.youtube.com/myname"/>
                                                            </div>
                                                        </div>     
                                                    </div> 
                                                
                                                </div> 
                                                
                                                <div className="flex items-center justify-center gap-4 mt-16">
                                                    <button type="submit" className="button lg:px-6 bg-secondery max-md:flex-1"> Cancle</button>
                                                    <button type="submit" className="button lg:px-10 bg-primary text-white max-md:flex-1"> Save</button>
                                                </div>

                                            </div>

                                        </div>
                                      
                                         
                                         
                                        <div>
                                            <div>
                                                <div className="font-normal text-gray-400 text-sm">                                                    
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-black dark:text-white"> Alerts preferences </h4>
                                                        <p className=" mt-3">We may still send you important notifications about your account and content outside of you preferred notivications settings</p>
                                                    </div>

                                                    <div className="mt-8 md:space-y-8 space-y-4" uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-medium; delay: 100 ;repeat: true">

                                                        <div className="w-full">
                                                            <label className="switch flex justify-between items-center cursor-pointer gap-4">
                                                                <div className="bg-sky-100 text-sky-500 rounded-full p-2 md:flex hidden shrink-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                                    </svg> 
                                                                </div>
                                                                <div className="flex-1 md:pr-8">
                                                                    <h4 className="text-base font-medium mb-1.5 text-black dark:text-white"> Email notifications</h4>
                                                                    <p className=""> You can receive notifications about important updates and content directly to your email inbox. </p>
                                                                </div>
                                                                <input type="checkbox" defaultChecked/><span className="switch-button !relative"></span> 
                                                            </label>
                                                        </div>

                                                        <div className="w-full">
                                                            <label className="switch flex justify-between items-center cursor-pointer gap-4">
                                                                <div className="bg-purple-100 text-purple-500 rounded-full p-2 md:flex hidden shrink-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                                                                    </svg>
                                                                </div>
                                                                <div className="flex-1 md:pr-8">
                                                                    <h4 className="text-base font-medium mb-1.5 text-black dark:text-white"> web notifications</h4>
                                                                    <p className="">  You can receive notifications through your notifications center </p>
                                                                </div>
                                                                <input type="checkbox"/><span className="switch-button !relative"></span> 
                                                            </label>
                                                        </div>

                                                        <div className="w-full">
                                                            <label className="switch flex justify-between items-center cursor-pointer gap-4">
                                                                <div className="bg-teal-100 text-teal-500 rounded-full p-2 md:flex hidden shrink-0">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                                    </svg>
                                                                </div>
                                                                <div className="flex-1 md:pr-8">
                                                                    <h4 className="text-base font-medium mb-1.5 text-black dark:text-white"> Phone notifications</h4>
                                                                    <p className="">  You can receive notifications on your phone, so you can stay up-to-date even when you’re on the go</p>
                                                                </div>
                                                                <input type="checkbox" defaultChecked/><span className="switch-button !relative"></span> 
                                                            </label>
                                                        </div>
                                                        
                                                    
                                                    </div>

                                                </div> 

                                                <div className="flex items-center justify-center gap-4 mt-16">
                                                    <button type="submit" className="button lg:px-6 bg-secondery max-md:flex-1"> Cancle</button>
                                                    <button type="submit" className="button lg:px-10 bg-primary text-white max-md:flex-1"> Save</button>
                                                </div>

                                            </div> 
                                            
                                        </div>
                                        
                                      
                                        <div>
                                            <div>                                                
                                                <div className="space-y-6">
                                                    <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                                                        <label className="md:w-40 text-right"> Current Password </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <input type="password" placeholder="******" className="w-full"/>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                                                        <label className="md:w-40 text-right"> New password </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <input type="password" placeholder="******" className="w-full"/>
                                                        </div>
                                                    </div>

                                                    <div className="md:flex items-center gap-16 justify-between max-md:space-y-3">
                                                        <label className="md:w-40 text-right"> Repeat password </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <input type="password" placeholder="******" className="w-full"/>
                                                        </div>
                                                    </div>

                                                    <hr className="border-gray-100 dark:border-gray-700" />

                                                    <div className="md:flex items-center gap-16 justify-between">
                                                        <label className="md:w-40 text-right"> Two-factor authentication </label>
                                                        <div className="flex-1 max-md:mt-4">
                                                            <select className="w-full !border-0 !rounded-md">
                                                                <option value="1">Enable</option>
                                                                <option value="2">Disable</option> 
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>                                                
                                                <div className="flex items-center justify-center gap-4 mt-16">
                                                    <button type="submit" className="button lg:px-6 bg-secondery max-md:flex-1"> Cancle</button>
                                                    <button type="submit" className="button lg:px-10 bg-primary text-white max-md:flex-1"> Save</button>
                                                </div>
                                            </div>                                            
                                        </div>                
                                    </div>                                    
                                </div>
                            </div> 
                        </main>  
                </div>
                </>              
                )
        }
