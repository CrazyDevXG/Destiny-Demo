'use client'
import Link from 'next/link'
import Image from 'next/image'
import USidebar from "/components/nav/sidebar"  

import Product01 from "/public/assets/images/product/product-1.jpg"

import { useEffect, useState } from 'react'
import { callMyProfile } from '/components/utils/callApiFunction'

export default function GiftShop() {

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
            <div className="main__inner">                
                <div uk-sticky="cls-active: bg-slate-100/60 z-30 backdrop-blur-lg px-4; start: 80; animation: uk-animation-slide-top">
                
                    
                    <div className="page__heading">
                        <h1>LOVELY STORES </h1>
                    </div>                    
                    <div className="overflow-hidden mt-6">
                        <div id="product-nav" className="relative flex items-center justify-between border-b dark:border-slate-800 uk-animation-slide-top-medium">                            
                            <ul className="flex gap-2 text-sm text-center text-gray-600 capitalize font-semibold dark:text-white/80 -mb-px" uk-switcher="connect: #shop_tab ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">                                
                                
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="storefront-outline"></ion-icon> Shop</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="cash-outline"></ion-icon> Credit Gifts</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="bag-check-outline"></ion-icon> My Stickers</Link> </li>
                                <li> <Link href="#" className="flex items-center md:p-4 p-2.5 border-b-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"> <ion-icon class="mr-2 text-2xl max-md:hidden" name="list-outline"></ion-icon> History</Link> </li>                                
                            </ul>     
                            
                            <div className="flex items-center gap-4"> 
                                <button className="flex" uk-toggle="target: #product-nav">
                                    <ion-icon class="text-xl" name="search"></ion-icon> 
                                </button> 
                                <select className="!bg-transparent focus:!border-transparent focus:!ring-transparent max-sm:hidden md:w-40">
                                    <option value="1">Latest</option> 
                                    <option value="3">Popular</option>
                                    <option value="4">Newest</option>
                                </select>
                            </div>    
                        </div> 
                       
                        <div id="product-nav" className=" w-full  rounded-lg z-30 uk-animation-slide-bottom" hidden>
                            <div className="bg-slate-200 py-2 px-3.5 rounded-md w-full flex items-center gap-3 dark:bg-dark2"> 
                                <button type="submit" className="flex"> <ion-icon class="text-2xl" name="search"></ion-icon></button> 
                                <input type="text" className="!bg-transparent !outline-none !w-full" placeholder="Search"/>
                                <button className="flex" uk-toggle="target: #product-nav">
                                    <ion-icon class="text-2xl" name="close"></ion-icon> 
                                </button>
                            </div>  
                        </div>
                    </div>                     
                </div>

                <div className="uk-switcher" id="shop_tab">                   
                    <div>                        
                        <div className="relative" tabIndex="-1" uk-slider="finite: true">
                            <div className="py-6 overflow-hidden uk-slider-container">                 
                                <ul className="uk-slider-items w-[calc(100%+0.10px)] capitalize text-sm font-semibold">
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Gamings </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> headphones </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Parfums </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Fruits </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Gaming </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Mobiles </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Laptops </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Gaming </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> headphones </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Parfums </Link> </li>
                                    <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-slate-200 inline-block hover:shadow dark:bg-dark2"> Fruits </Link> </li>
                                </ul>                            
                            </div>                                    
                            <Link className="absolute left-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-start bg-gradient-to-r from-bgbody via-bgbody" href="#" uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon> </Link>
                            <Link className="absolute right-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-end bg-gradient-to-l from-bgbody via-bgbody" href="#" uk-slider-item="next">  <ion-icon name="chevron-forward" class="text-2xl"></ion-icon> </Link>
                        
                        </div>

                        
                        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mt-2"  uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">         
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> The Deep Cleanse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Jesse Steeve </Link> </p>
                                </div> 
                            </div>

                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Regency High Gloss </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> John Michael </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Gaming Mouse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Martin Gray </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Abstract Minimalism Bright </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Alexa stella </Link> </p>
                                </div> 
                            </div>                            
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Abstract art </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Alexa stella </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Chill Lotion </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Alexa stella </Link> </p>
                                </div> 
                            </div>                            
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> The Deep Cleanse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Jesse Steeve </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Regency High Gloss </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> John Michael </Link> </p>
                                </div> 
                            </div>                             
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Gaming Mouse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Martin Gray </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> The Deep Cleanse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Jesse Steeve </Link> </p>
                                </div> 
                            </div>                              
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> Abstract art </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Alexa stella </Link> </p>
                                </div> 
                            </div>
                           
                            <div>
                                <Link href="#product_modal" className="group" uk-toggle="">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <div className="relative w-full md:h-60 h-56 transition-all group-hover:scale-110 duration-300">
                                            <Image src={Product01} alt="" className="object-cover w-full h-full inset-0"/>
                                        </div> 
                                        <div className="absolute right-0 top-0 m-2 bg-slate-100 rounded-full py-0.5 px-2 text-sm font-bold dark:bg-slate-800/60"> $12 </div>
                                    </div> 
                                </Link>
                                <div className="py-2">
                                    <h4 className="text-black lg:font-medium mb-0.5 dark:text-white"> The Deep Cleanse </h4>
                                    <p className="md:text-sm text-xs lg:font-medium text-gray-500 dark:text-white"> by <Link href="profile.html"> Jesse Steeve </Link> </p>
                                </div> 
                            </div>                            
                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                            <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                        </div>                        
                        <div className="flex justify-center my-8">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>
                    </div>
                    
                    
                    <div>                       
                        <div className="mt-3 hidden">
                            <Link href="#" className="flex items-center gap-1 text-blue-500 font-semibold text-sm lg:-ml-1 mb-1">
                                <ion-icon name="chevron-back-outline"></ion-icon> Back
                            </Link>
                            <h2 className="text-2xl font-bold text-black dark:text-white"> Downloads</h2>
                        </div>
                        <div className="bg-white rounded-md shadow mt-6 dark:bg-dark2">                           
                            
                            <div className="p-3 md:px-6 border-b flex md:items-center justify-between dark:border-slate-700 max-md:flex-col gap-3"> 
                                <h3 className="text-base font-semibold text-black dark:text-white">Item Purchased 16</h3> 
                                
                                <div className="flex bg-slate-100 border border-slate-200 p-[1px] rounded-lg dark:bg-dark3 dark:border-slate-700 ml-auto max-md:-mt-10">
                                    <ion-icon name="list-outline" class="text-lg p-2 py-1.5 rounded-md bg-white shadow dark:bg-dark4"></ion-icon>
                                    <ion-icon name="grid-outline" class="text-lg p-2 py-1.5"></ion-icon>
                                </div>
                                <div className="bg-slate-100 rounded-md flex items-center dark:bg-dark3 max-md:w-full">
                                    <ion-icon name="search" class="text-lg ml-2"></ion-icon>
                                    <input type="text" placeholder="Search" className="!h-8 w-full"/>
                                </div>                                 
                            </div>                            
                            <div className="grid lg:grid-cols-2 gap-2 md:p-4"  uk-scrollspy="target: > div; cls: uk-animation-slide-bottom-small; delay: 100">                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Gaming Mouse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">  John Michael </p></Link>
                                    </div>

                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>         
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div>                                         
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Abstract art </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">  Jesse Steeve </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                      <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div>                                
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>
                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> The Deep Cleanse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">  Jesse Steeve  </p></Link>
                                    </div>
                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button> 
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div> 
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>

                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Regency High Gloss </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">  Martin Gray  </p></Link>
                                    </div>

                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>

                                </div> 

                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">

                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>

                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Abstract Minimalism   </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white"> James Lewis  </p></Link>
                                    </div>

                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>

                                </div> 
 
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">

                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>

                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Gaming Mouse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white"> John Michael  </p></Link>
                                    </div>

                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>

                                </div> 

                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">

                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>

                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Gaming Mouse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white"> John Michael  </p></Link>
                                    </div>

                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>

                                </div> 
                                         
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>
                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Abstract art </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white"> Jesse Steeve  </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                                                        
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div> 

                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> The Deep Cleanse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white"> Jesse Steeve  </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div> 
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>
                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Regency High Gloss </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">   Martin Gray  </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>

                                </div> 

                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>

                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Abstract Minimalism   </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">   James Lewis </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div> 
 
                               
                                <div className="flex hover:bg-secondery rounded-md p-2 duration-500">                                    
                                    <Link href="#product_modal" className="group" uk-toggle="">
                                         <div className="relative overflow-hidden rounded-lg w-20">
                                            <div className="relative w-full h-16">
                                                <Image src={Product01} alt="" className="object-cover w-full h-full"/>
                                            </div> 
                                        </div> 
                                    </Link>                                    
                                    <div className="flex-1 px-4">
                                        <h4 className="text-black font-medium mb-1 dark:text-white"> Gaming Mouse </h4>
                                        <Link href="profile.html"><p className="text-sm font-normal text-gray-500 dark:text-white">  John Michael </p></Link>
                                    </div>                                    
                                    <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="cloud-download-outline"></ion-icon> </button>
                                    
                                    <div>
                                        <button type="button" className="hover:bg-secondery w-10 h-10 rounded-full grid place-items-center"> <ion-icon class="text-2xl" name="ellipsis-horizontal"></ion-icon> </button>
                                        <div  className="w-[245px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"> 
                                            <nav>
                                                <Link href="#"> <ion-icon class="text-xl" name="bookmark-outline"></ion-icon>  Add to favorites </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="albums-outline"></ion-icon>  add to collections </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="flag-outline"></ion-icon>  Report </Link>  
                                                <Link href="#"> <ion-icon class="text-xl" name="share-outline"></ion-icon>  Share </Link>  
                                                <hr/>
                                                <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon class="text-xl" name="trash-outline"></ion-icon> Delete  </Link>  
                                            </nav>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>                                               
                        <div className="flex justify-center my-8">
                            <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                        </div>                
                    </div>       
                </div>

 

            </div>
        </main>
            
        </>
      )
}