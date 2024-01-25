
'use client'
import React, { useState } from 'react'



export default function New_CryptPassword() {  

            const [userID, setUserID] = useState("");
            const [password, setPassword] = useState("");
            const [alert, setAlert] = useState(null);                 

             const handleSubmit = async (e, path) => {
              e.preventDefault();
              const response = await fetch(`/api/update/user/${path}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userID, password })
              });
              if (response.ok) {
                const sending = await response.json();
                console.log(sending);
                setAlert("success");
              } else {
                console.log(`${path} failed`);
              }
            };               
            


            

            return (
            <>

            <form className="space-y-3"  uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">  
                    <input onChange={(e)=> setUserID(e.target.value)}
                        className="block border border-grey-light rounded mx-6 my-4" 
                        value={userID}
                        name="user" 
                        type="text"                          
                        placeholder="User ID" 
                        required />

                    <input onChange={(e)=> setPassword(e.target.value)}
                        className="block border border-grey-light rounded mx-6 my-4" 
                        value={password}
                        name="password" 
                        type="text"                          
                        placeholder="New Password" 
                        required /> 

            <button onClick={e => handleSubmit(e, "passwd")} 
            type="submit" className="font-medium rounded-lg bg-slate-700 mx-6 py-2 px-8 text-white"> 
            <span>Hash Bcrypt</span> 
            </button>
 
            </form>


            <h2 className='m-6 w-60 h-auto bg-emerald-200 rounded-md text-center'>{alert}</h2>

            </>
            )
        }