'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function actionRegister(prevState, formData){

                const email = formData.get('email')
                const password = formData.get('password')
                const response = await fetch(`http://localhost:3000/api/user/auth/create`, {                   
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                  });
                  if (response.ok) {
                      const user = await response.json();  
                      if(user.status == 200){                                  
                      cookies().set('userToken', user.key, { maxAge: 60 * 60 * 24 }); 
                      redirect('/home')             
                      }
                      else if(user.status == 500){
                          return {alert: 'Login failed'}
                      }
                  } else {
                    console.log('response failed');
                    
                  }    

}