'use client'
import Link from 'next/link'
import Image from 'next/image'
import Avatar02 from '/public/assets/images/avatars/avatar-2.jpg'
import Product1 from '/public/assets/images/product/product-1.jpg'

export function Compo_Suggest(){

    return(
        <>
                    <div className="lg:max-w-[370px] md:max-w-[510px] mx-auto">
                        <div className="xl:space-y-6 space-y-3 md:pb-12"  uk-sticky="end: #js-oversized; offset: 50; media:992">
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Suggested For You </h3>                                    
                                </div>
    
                                <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">    
                                    <div className="flex items-center gap-3">
                                        <Link href="/user/profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="/user/profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 1</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 25 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> Follow </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="/user/profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="/user/profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 2</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 20 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> Follow </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="/user/profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="/user/profile"><h4 className="font-semibold text-sm text-black dark:text-white"> User name 3</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>female : 31  </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> Follow </button>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link href="/user/profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="/user/profile"><h4 className="font-semibold text-sm text-black dark:text-white">  User name 4</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>male : 29 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> Follow </button>
                                    </div> 
                                    <div className="flex items-center gap-3">
                                        <Link href="/user/profile">
                                            <Image src={Avatar02} alt="" className="bg-gray-200 rounded w-10 h-10" />
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="/user/profile"><h4 className="font-semibold text-sm text-black dark:text-white">  User name 5</h4></Link>
                                            <div className="mt-0.5"> <ion-icon name="male-female"></ion-icon>any : 25 </div>
                                        </div>
                                        <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold text-white bg-primary"> Follow </button>
                                    </div>
                                </div>    
                            </div>
    

                            
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Premium Sticker </h3>
                                </div>
    
                                <div className="relative capitalize font-medium text-sm text-center mt-4 mb-2" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container">                                       
                                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">                                            
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User1 </div>
                                                </Link>

                                            </li>
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User2 </div>
                                                </Link>
 
                                            </li>
                                            <li className="w-1/2 pr-2"> 
                                                <Link href="#">
                                                    <div className="relative overflow-hidden rounded-lg">
                                                        <div className="relative w-full md:h-40 h-full">
                                                            <Image src={Product1} alt="" className="object-cover w-full h-full inset-0" />
                                                        </div> 
                                                        <div className="absolute right-0 top-0 m-2 bg-white/60 rounded-full py-0.5 px-2 text-sm font-semibold dark:bg-slate-800/60"> 12 </div>
                                                    </div>
                                                    <div className="mt-3 w-full"> User3 </div>
                                                </Link> 
                                            </li>
                                        </ul>
                                        <button type="button" className="absolute bg-white rounded-full top-16 -left-4 grid w-9 h-9 place-items-center shadow dark:bg-dark3"  uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                                        <button type="button" className="absolute -right-4 bg-white rounded-full top-16 grid w-9 h-9 place-items-center shadow dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>
                                    </div>                                
                                </div>    
                            </div>              
                           
                            <div className="bg-white rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">                                
                                <div className="flex justify-between text-black dark:text-white">
                                    <h3 className="font-bold text-base"> Popular User </h3>
                                </div>    
                                <div className="relative capitalize font-normal text-sm mt-4 mb-2" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container">                                       
                                        <ul className="-ml-2 uk-slider-items w-[calc(100%+0.5rem)]">                                            
                                            <li className="w-1/2 pr-2">                                            
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="/user/profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="/user/profile"> <h5 className="font-semibold"> Martin Gray</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 25</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                                                    </div>
                                                </div>                                         
                                            </li>
                                            <li className="w-1/2 pr-2">
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="/user/profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="/user/profile"> <h5 className="font-semibold"> Alexa Park</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 25</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="w-1/2 pr-2">
                                                <div className="flex flex-col items-center shadow-sm p-2 rounded-xl border1">
                                                    <Link href="/user/profile"> 
                                                        <div className="relative w-16 h-16 mx-auto mt-2">
                                                            <Image src={Avatar02} alt="" className="h-full object-cover rounded shadow w-full" />
                                                        </div>
                                                    </Link>
                                                    <div className="mt-5 text-center w-full">
                                                        <Link href="/user/profile"> <h5 className="font-semibold"> James Lewis</h5> </Link>
                                                        <div className="text-xs text-gray-400 mt-0.5 font-medium"> <ion-icon name="male-female"></ion-icon>female : 20</div>
                                                        <button type="button" className="bg-primary block font-semibold text-white mt-4 py-1.5 rounded-lg text-sm w-full border1"> Follow </button>
                                                    </div>
                                                </div>
                                            </li> 
                                        </ul>
                                        <button type="button" className="absolute -translate-y-1/2 bg-slate-100 rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center dark:bg-dark3"  uk-slider-item="previous"> <ion-icon name="chevron-back" class="text-2xl"></ion-icon></button>
                                        <button type="button" className="absolute -right-4 -translate-y-1/2 bg-slate-100 rounded-full top-1/2 grid w-9 h-9 place-items-center dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" class="text-2xl"></ion-icon></button>

                                    </div>                                
                                </div>     
                            </div>

                            
                            
                        </div>
                    </div>  
        </>
        
    )
}