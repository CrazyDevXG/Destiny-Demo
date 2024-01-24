'use client'
import Link from "next/link"
import Image from "next/image"
import AvatarLG6 from '/public/assets/images/avatars/avatar-lg-6.jpg'
import Post2 from '/public/assets/images/post/post-2.jpg'

export function Co_Gallery (){

    const item = 1;

    function Loadmore(){
    if (item > 4){   
        return (                         
            <div className="flex justify-center my-6">
                <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
            </div>  
            )  
        }
    }      

    return(
        <>
                <div className="row-auto md:max-w-[1024px] mx-auto">
                        <div className="mt-8">                              
                                <div className="flex items-center justify-between py-3">
                                    <h1 className="text-xl font-bold text-black dark:text-white">Highlight</h1>
                                    <button type="button" >                                        
                                        <ion-icon name="duplicate-outline" size="large"></ion-icon>
                                    </button>
                                </div>

                                <div className="relative mt-5" tabIndex="-1" uk-slider="autoplay: true;finite: true">
                                    <div className="overflow-hidden uk-slider-container py-10">                                    
                                    <ul className="-ml-2 uk-slider-items w-[calc(100%+0.875rem)]" uk-scrollspy="target: > li; cls: uk-animation-slide-right-small; delay: 50" uk-lightbox="">
                                       
                                       <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                            <Link href=""  data-caption="Caption">
                                                <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                                        <Image src={AvatarLG6} priority={true} placeholder='empty' className="rounded-lg w-full h-full object-cover inset-0" alt=""/>
                                                    </div>  
                                                </div>
                                            </Link>
                                        </li>                                    
                                        
                                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                            <Link href={AvatarLG6}  data-caption="Caption">
                                                <div className=" lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">
                                                    <div className="w-full lg:h-64 aspect-[2.5/4] realtive">
                                                        <Image src={AvatarLG6} priority={true} placeholder='empty' className="rounded-lg w-full h-full object-cover inset-0" alt=""/>
                                                    </div>  
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="lg:w-1/5 sm:w-1/4 w-1/3 pr-3.5">
                                            <div className="w-full lg:h-64 aspect-[2.5/4] bg-slate-200/60 rounded-lg animate-pulse"></div>
                                        </li>
                                    </ul>
                                
                                    </div>                                
                                    <button type="button" className="absolute -translate-y-1/2 bg-white rounded-full top-1/2 -left-4 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="previous"> <ion-icon name="chevron-back" className="text-2xl"></ion-icon></button>
                                    <button type="button" className="absolute -right-4 -translate-y-1/2 bg-white rounded-full top-1/2 grid w-9 h-9 place-items-center shadow  dark:bg-dark3" uk-slider-item="next"> <ion-icon name="chevron-forward" className="text-2xl"></ion-icon></button>
                                </div>
                            </div>             
                            
                                         

                            <div className="mt-8">                             
                                <div className="flex items-center justify-between py-3">
                                    <h1 className="text-xl font-bold text-black dark:text-white">Public</h1>                                    
                                </div>                                      

                                <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"  uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100">
                                   
                                    <Link href="" uk-toggle="#preview_modal">
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                            <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                    <Image src={Post2} priority={true} width={350} height={350} placeholder='empty' alt="" className="object-cover w-full h-full"/>
                                                </div>
                                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                                    <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                        <div className="flex items-center gap-2"> <ion-icon className="text-2xl" name="heart-circle"></ion-icon> 0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>              
                                   
                                    <Link href="" uk-toggle="#preview_modal">
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                            <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                    <Image src={Post2} priority={true} width={350} height={350} placeholder='empty' alt="" className="object-cover w-full h-full"/>
                                                </div>
                                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                                    <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                        <div className="flex items-center gap-2"> <ion-icon className="text-2xl" name="heart-circle"></ion-icon> 0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="" uk-toggle="#preview_modal">
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                            <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                    <Image src={Post2} priority={true} width={350} height={350} placeholder='empty' alt="" className="object-cover w-full h-full"/>
                                                </div>
                                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                                    <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                        <div className="flex items-center gap-2"> <ion-icon className="text-2xl" name="heart-circle"></ion-icon> 0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                               

                                    <Link href="" uk-toggle="#preview_modal">
                                        <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"> 
                                            <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
                                                <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
                                                    <Image src={Post2} priority={true} width={350} height={350} placeholder='empty' alt="" className="object-cover w-full h-full"/>
                                                </div>
                                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">    
                                                    <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                                                        <div className="flex items-center gap-2"> <ion-icon className="text-2xl" name="heart-circle"></ion-icon> 0</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>                                  
                                   
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                    <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                </div>  
                            </div>
                          
                          <Loadmore />
                         
                           
        </div>

        
                        
        </>
    )


}