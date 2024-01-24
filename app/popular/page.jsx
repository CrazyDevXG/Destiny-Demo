import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import USidebar from "/components/nav/sidebar"  
import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'
import Reel1 from '/public/assets/images/reels/reels-1.jpg'
import IconPlay from '/public/assets/images/icon-play.svg'


export const metadata = {
    title: 'Popular | Destiny Love',
  }

export default function Popular() {
    return  (
        <>
            <USidebar />
                <main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
                        <div className="main__inner pt-6">   
                            <div className="page__heading">
                                <Link href="#">
                                    <ion-icon name="chevron-back-outline"></ion-icon> Back
                                </Link>
                                <h1> POPULAR</h1>
                            </div>
                            <div className="md:max-w-[1024px] mx-auto">                           
                            <div className="relative" tabIndex="-1" uk-slider="finite: true">
                                <div className="py-4 overflow-hidden uk-slider-container">
                                    <ul className="-ml-2 uk-slider-items w-[calc(100%+0.10px)] capitalize text-sm font-semibold">
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Top </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Man </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Woman </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Dating </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> One Nigth </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Friendship </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Private Talk </Link> </li>
                                        <li className="w-auto pr-2.5"> <Link href="#" className="px-4 py-2 rounded-lg bg-white border inline-block hover:shadow dark:bg-dark2 dark:border-slate-700"> Other </Link> </li>
                                    </ul>                                
                                </div>
                                        
                                <Link className="absolute left-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-start bg-gradient-to-r from-[#f6f9fb] via-[#f6f9fb] dark:from-slate-900 dark:via-slate-900" href="#" uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon> </Link>
                                <Link className="absolute right-0 -translate-y-1/2 top-1/2 flex items-center w-16 h-12 p-2.5 justify-end bg-gradient-to-l from-[#f6f9fb] via-[#f6f9fb] dark:from-slate-900 dark:via-slate-900" href="#" uk-slider-item="next">  <ion-icon name="chevron-forward" class="text-2xl"></ion-icon> </Link>

                            </div>

                            <div>
                                <div className="relative" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container p y-4">                                    
                                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]" uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50">
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5" uk-scrollspy="uk-animation-fade">   
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">                                                        
                                                        <Image className="object-cover w-full h-full" src={Reel1} alt=""/>                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Alexa </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                                640
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try </div>
                                                    </div>
                                                </Link>

                                            </li> 
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5">  
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">                                                        
                                                    <Image className="object-cover w-full h-full" src={Reel1} alt=""/>                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Martin </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                            580
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #The Top 10 Online Shopping Sites You Should Know About </div>
                                                    </div>
                                                </Link>

                                            </li>
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5">                                                
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                                        
                                                        <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Parker </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                                460
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #Health Benefits of Drinking Enough Water Every Day </div>
                                                    </div>
                                                </Link>

                                            </li> 
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5">  
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                                        
                                                        <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Michael </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                                320
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #How to Choose the Best Drone for Your Photography Needs </div>
                                                    </div>
                                                </Link>

                                            </li>
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5" uk-scrollspy="uk-animation-fade">   
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">                                                        
                                                        <Image className="object-cover w-full h-full" src={Reel1} alt=""/>                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Alexa </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                                640
                                                            </div>
                                                        </div>                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try </div>
                                                    </div>
                                                </Link>

                                            </li> 
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5">  
                                                <Link href="">
                                                    <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">                                                        
                                                        <Image className="object-cover w-full h-full" src={Reel1} alt=""/>                                                        
                                                        <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                                        <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                                <div className="text-sm"> Martin </div>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-xs">
                                                                <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                            580
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                    <div className="font-normal pt-3 pb-2.5"> 
                                                        <div className="line-clamp-2 text-sm"> #The Top 10 Online Shopping Sites You Should Know About </div>
                                                    </div>
                                                </Link>

                                            </li>
                                            <li className="lg:w-1/4 md:w-1/2 w-1/2 pr-3.5">
                                                <div className="w-full lg:h-[270px] aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse"></div>
                                                <div className="mt-4 space-y-1.5">
                                                    <div className="w-40 h-4 rounded-md bg-slate-300/20"></div>
                                                    <div className="w-24 h-3 rounded-md bg-slate-300/20"></div>
                                                </div>
                                            </li>                                            
                                        </ul>                                
                                    </div>
                                
                                    <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full bottom-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                                    <button type="button" className="absolute -right-4 -translate-y-1/2 bg-white rounded-full bottom-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>
                                    
                                </div>

                            </div>

                            <div className="mt-8">                                
                                <div className="flex items-center justify-between py-3">
                                    <h1 className="text-xl font-bold text-black dark:text-white">You may like</h1>

                                    <Link href="#" className="text-sm font-semibold flex items-center gap-2">
                                        Show acheived  <ion-icon name="chevron-forward-outline"></ion-icon> 
                                    </Link>
                                </div>
                                
                                <div    className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2"  
                                        uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #Health Benefits of Drinking Enough Water Every Day  </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try  </div>
                                        </div>
                                    </Link>
                                
                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 10 Online Shopping Sites You Should Know About </div>
                                        </div>
                                    </Link>
                                
                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    640
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Martin </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                580
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 10 Online Shopping Sites You Should Know About </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Parker </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    460
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #Health Benefits of Drinking Enough Water Every Day </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20 p-3 flex justify-between text-white">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Michael </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    320
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #How to Choose the Best Drone for Your Photography Needs </div>
                                        </div>
                                    </Link>

                                    
                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #Health Benefits of Drinking Enough Water Every Day  </div>
                                        </div>
                                    </Link>

                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 8 Online Learning Platforms You Should Try  </div>
                                        </div>
                                    </Link>
                                
                                    
                                    <Link href="">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0 uk-transition-toggle">
                                            
                                            <Image className="object-cover w-full h-full" src={Reel1} alt=""/>
                                            
                                            <Image src={IconPlay} alt="" className="w-12 h-12 absolute z-10 top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 uk-transition-fade"/>
                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-8 p-3 flex justify-between text-white uk-transition-slide-bottom">
                                                <div className="flex items-center gap-2">
                                                    <Image src={Avatar02} alt="" className="w-5 rounded-full"/>
                                                    <div className="text-sm"> Alexa </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ion-icon class="text-lg" name="heart-outline"></ion-icon>
                                                    162
                                                </div>
                                            </div>
                                    
                                        </div>
                                        <div className="font-normal pt-3 pb-2.5"> 
                                            <div className="line-clamp-2 text-sm"> #The Top 10 Online Shopping Sites You Should Know About </div>
                                        </div>
                                    </Link>                                          
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                </div>
                                
                                <div className="flex justify-center my-6">
                                    <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                                </div>                                
                            </div>
                        </div> 
                    </div>
                </main>


        </>
    )
}