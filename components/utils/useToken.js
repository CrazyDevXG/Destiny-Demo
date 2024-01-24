'use server'
import { jwtVerify,importJWK } from 'jose'
import { cookies } from 'next/headers'

        export async function useToken(context){
            const secretJWK = {
                kty: 'oct',
                k: process.env.NEXTAUTH_SECRET 
            }
            const secretKey = await importJWK(secretJWK, 'HS256');
            const userToken = cookies().get('userToken').value;
            const { payload } = await jwtVerify(userToken, secretKey);
                
              return { 
                      props: { getUser: payload.user},
                    }
              
            }
