'use client'

export default function Searching(){
    return(
    <>
     <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="animation: uk-animation-slide-left-small , uk-transform-origin-center-left ;animate-out: true; pos: left ; mode:click; offset: 9">
                            <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                                <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                                    <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Search User</h3>

                                    <div className="relative -mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                        <input type="text" placeholder="ID or NAME" className="bg-transparen w-full !pl-10 !py-2 !rounded-lg" />
                                    </div>
                                </div>
                                <div className="p-2 space-y-2 dark:text-white">
                                <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                                        <h4>Recent</h4>
                                        <button type="button" className="text-blue-500 text-sm">Clear all</button>
                                    </div>

                                    

                                    <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                                        <h4>Last Viewed</h4>
                                        <button type="button" className="text-blue-500 text-sm"></button>
                                    </div>

                                   


                                </div>

                            </div>
                        </div>
    </>
    )
}

