
import { query } from "/components/server/connect/db";
import { SignJWT, importJWK } from "jose";
import bcrypt from 'bcrypt';

export async function POST(request) {
              
        try {
          const { email, password } = await request.json();
          const userLogin = await query({
              query: "SELECT * FROM ds_user WHERE user_email = ?",
              values: [email],           
          });

            let data = userLogin.arr[0];

            let user = {
                myID: data.user_id,         
                myEmail: data.user_email,
                myRole: "USER"
            }

          if (data.user_email != '') {
            const passwordMatches = await bcrypt.compare(password, data.user_passwd);    
                                     
              if (passwordMatches) { 
                                
                const secretJWK = {
                  kty: 'oct',
                  k: process.env.NEXTAUTH_SECRET
                }

                const secretKey = await importJWK(secretJWK, 'HS256')
                const token = await new SignJWT({user})
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt()                 
                .sign(secretKey);                
               
                return new Response(JSON.stringify({
                    key: token,
                    message: "Login Success",            
                    status: 200,
                  })                 
                );
                  
              } else {
                return new Response(JSON.stringify({
                    message: "Invalid email password",            
                    status: 401,
                  })
                );                 
              }  
        }       

      } catch (error) {
          return new Response(JSON.stringify({
              status: 500,
              message: error.message
          }));
      }    

}