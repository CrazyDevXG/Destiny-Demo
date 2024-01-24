'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function actionLogin(prevState, formData){

            const email = formData.get('email')
            const password = formData.get('password')

      
            const response = await fetch(`http://localhost:3000/api/auth/login`, {                   
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, password }),
                  cache: 'no-store',
                });

                if (response.ok) {
                    const res = await response.json();  
                    if(res.status == 200){  
                                                      
                      cookies().set('userToken', res.key, { maxAge: 60 * 60 * 24 }); 
                      redirect('/people')                              
                    }
                    else if(res.status == 401){
                      return {alerts: 'Invalid email password'}
                    }
                    else if(res.status == 500){
                        return {alerts: res.message}
                    }
                } else {
                  console.log('response failed');
                  
                }    
}