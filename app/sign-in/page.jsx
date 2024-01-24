'use client'
import {actionLogin} from './action'
import {useFormState} from 'react-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link'
import Image from 'next/image'
import BGimages from 'public/assets/images/BG-pink-yell.jpg'
import Logo from '/public/assets/images/logo-dark.png'
import { useEffect } from 'react';


export default function sign_in() {                                   
            const initState = {
                alerts: ''
            }
            const [state, formAction]  = useFormState(actionLogin, initState); 

            const notify = () => {
                toast.error(state.alerts, {
                    position: toast.POSITION.TOP_CENTER
                  });
            }

            useEffect(()=>{
                if(state.alerts){notify();}

            },[state])

  return (
    <>
    <div       
    style={{    
        backgroundImage: `url(${BGimages.src})`,       
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}> 
      
     
    <div className="flex flex-col h-screen justify-center items-center">

        <ToastContainer />     

        <div className="max-w-sm mx-auto p-4 w-full">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div uk-scrollspy="target: > * > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">                
                <div className="flex justify-center mb-12" uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
                    <Image src={Logo} alt="" className="w-auto h-16 p-2" />
                </div>
                
                <form action={formAction} className="space-y-3"  uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">                    
                    <input
                        className="!w-full"                        
                        name="email" 
                        type="email"                          
                        placeholder="Email" 
                        required /> 

                    <input
                        className="!w-full"                          
                        name="password" 
                        type="password"                         
                        placeholder="Password" 
                        required /> 

                    <a href="#" className="hidden">
                        <div className="text-sm text-right text-gray-400 py-4"> Forget password </div>
                    </a>

                    <button className="font-medium w-full rounded-lg bg-slate-700 py-2 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150" type="submit"> 
                        <span>Sign in</span> 
                    </button>
                   
                    <div className="flex gap-3 justify-center text-sm pt-5 text-slate-500">                        
                        <Link href="#"><span>Forgot password ?</span></Link>
                    </div>         
                </form> 
               
            </div>
            </div>
            </div>
                <div className="mt-6 space-x-2 text-sm text-center text-slate-400 dark:text-white/70">
                    <span> No account? </span>
                    <span>—</span>
                    <Link href="./register" className="text-gray-600 hover:text-gray-500">Join now</Link>
             </div> 
        </div>
    </div>

    </div>
  </>
  )
}

