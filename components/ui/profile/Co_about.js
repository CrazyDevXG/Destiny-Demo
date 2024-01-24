'use client'
import Link from "next/link"
import Image from "next/image"
import Post2 from '/public/assets/images/post/post-2.jpg'
import Avatar06 from '/public/assets/images/avatars/avatar-6.jpg'


export function Co_About(){

    return(

        <>
                        <div className="pt-16 md:max-w-[840px] mx-auto" >
                            <div    className="grid lg:grid-cols-3 grid-cols-2 gap-4" uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100;repeat:true">

                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link> 
                                        </div>                                        
                                        <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>                                        
                                    </div>
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>

                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
 
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>

                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
                            
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>

                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>
 
                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> John Michael </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>
  
                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> Alexa stella </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>
  
                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> Monroe Parker </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
 
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>
 
                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white">  Jesse Steeve </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
 
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>

                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> Martin Gray </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
                            
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>

                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>
 
                                <div className="relative lg:rounded-xl rounded-md overflow-hidden shadow bg-white dark:bg-dark2">

                                   
                                    <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">

                                        <Link href="profile" className="max-md:hidden">
                                            <Image src={Avatar06} alt="" className="w-6 h-6 rounded-full"/>
                                        </Link>
                                        <div className="flex-1">
                                            <Link href="profile"><h4 className="text-black dark:text-white"> John Michael </h4></Link> 
                                        </div>

                                        
                                        <div className="absolute top-0.5 right-0 m-2.5">
                                            <button type="button" className="button__ico w-8 h-8"> <ion-icon className="text-xl" name="ellipsis-horizontal"></ion-icon> </button>
                                            <div  className="w-[232px]" uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click">
                                                <nav> 
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="bookmark-outline"></ion-icon> Add favorites </Link>   
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="flag-outline"></ion-icon>  Report </Link>  
                                                    <Link href="#"> <ion-icon className="text-xl shrink-0" name="share-outline"></ion-icon>  Share </Link>  
                                                    <hr />
                                                    <Link href="#" className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"> <ion-icon className="text-xl shrink-0" name="stop-circle-outline"></ion-icon> Remove </Link>  
                                                </nav>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    
                                    <Link href="#preview_modal" uk-toggle="">
                                        <div className="relative w-full h-48">
                                            <Image src={Post2} alt="" className="w-full h-full object-cover inset-0"/>
                                        </div>
                                    </Link>
                            
                                    
                                    <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="heart-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico"> <ion-icon className="md:text-2xl text-lg" name="chatbubble-ellipses-outline"></ion-icon> </button>
                                        <button type="button" className="button__ico ml-auto"> <ion-icon className="md:text-2xl text-lg" name="bookmark-outline"></ion-icon> </button>
                                    </div>

                                </div>

                                
                               
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>
                                <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse"></div>

                            </div>
  
                           
                            <div className="flex justify-center my-6">
                                <button type="button" className="bg-white py-2 px-5 rounded-full shadow-md font-semibold text-sm dark:bg-dark2">Load more...</button>
                            </div>
                        </div>
        </>
    )


}