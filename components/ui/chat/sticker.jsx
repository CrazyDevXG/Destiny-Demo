'use client'

export default function Sticker({setSelectPhoto}) {
    
    return (      
        <>   
                     <div id="message__wrap" className="flex items-center gap-2 h-full dark:text-white -mt-1.5"> 
                                <button type="button"  className="shrink-0">
                                    <ion-icon class="text-3xl flex m-2" name="cash-outline"></ion-icon>
                                </button>

                                <div className="dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-900" uk-drop="stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200"> 
                                    <div className="p-3 flex gap-5" uk-scrollspy="target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true">
                                       
                                        <button type="button" className="bg-sky-50 text-sky-400 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0 ">                                           
                                            100 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-sky-50 text-sky-600 border border-sky-200 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0 ">                                           
                                            300 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            500 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            1,000 <small>Points</small>
                                        </button>
                                        <button type="button" className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0">
                                            3,000 <small>Points</small>
                                        </button>

                                    </div>                                    
                                </div>


                                <button type="button"  className="shrink-0">                                    
                                    <ion-icon class="text-3xl flex m-2" name="images-outline"></ion-icon>
                                </button>
                                <div className="dropbar p-2" uk-drop="stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 "> 
                                    <div className="sm:w-60 bg-white shadow-lg border rounded-xl  pr-0 dark:border-slate-700 dark:bg-dark3">
                                        <h4 className="text-sm font-semibold p-3 pb-0">Send Photos</h4>
                                        
                                        <label htmlFor="upload-img" className="flex flex-col justify-center items-center w-full bottom-0 pb-6 pt-6 cursor-pointer">
                                            <input  type="file" className="hidden" id="upload-img" name="upload-img" accept="image/jpeg, image/png, image/jpg" onChange={setSelectPhoto}/>
                                            <ion-icon name="image" class="text-4xl text-teal-600"></ion-icon>
                                            <span className="mt-2 text-sm">Browse to Upload image </span>
                                        </label>

                                    </div>                                    
                                </div>
                     </div>

        </>
    )
}