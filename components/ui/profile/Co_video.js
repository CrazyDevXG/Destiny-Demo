'use client'
import Link from "next/link"
import Image from "next/image"
import Reel from '/public/assets/images/reels/reels-1.jpg'

export function Co_Video(){

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
                                <div className="pt-16">
                            <div className="grid gap-3 lg:gap-4 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-3 grid-cols-2" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">                                
                               
                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">                                
                                    <Link href="#">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">                                            
                                            <Image className="object-cover w-full h-full" src={Reel} alt=""/>                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                <div className="flex items-center gap-2.5 text-white p-3">
                                                    <ion-icon className="text-2xl" name="play-outline"></ion-icon> 14
                                                </div>
                                            </div>                                    
                                        </div>
                                    </Link>
                                </div>
                                  
                                
                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">                                 
                                    <Link href="#">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">                                            
                                            <Image className="object-cover w-full h-full" src={Reel} alt=""/>                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                <div className="flex items-center gap-2.5 text-white p-3">
                                                    <ion-icon className="text-2xl" name="play-outline"></ion-icon> 24
                                                </div>
                                            </div>                                    
                                        </div>
                                    </Link>
                                </div>         
                                
                               
                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">                                
                                    <Link href="#">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">                                            
                                            <Image className="object-cover w-full h-full" src={Reel} alt=""/>                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                <div className="flex items-center gap-2.5 text-white p-3">
                                                    <ion-icon className="text-2xl" name="play-outline"></ion-icon> 38
                                                </div>
                                            </div>                                    
                                        </div>
                                    </Link>
                                </div>                 
                                  
                                
                                <div className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100">                                
                                    <Link href="#">
                                        <div className="relative w-full lg:h-[270px] aspect-[2.5/4] overflow-hidden rounded-lg shrink-0">                                            
                                            <Image className="object-cover w-full h-full" src={Reel} alt=""/>                                            
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-20">
                                                <div className="flex items-center gap-2.5 text-white p-3">
                                                    <ion-icon className="text-2xl" name="play-outline"></ion-icon> 42
                                                </div>
                                            </div>                                    
                                        </div>
                                    </Link>
                                </div>                                       
                               
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                            </div>  
                           
                            <Loadmore />
                            
                        </div>    
        </>
    )
}