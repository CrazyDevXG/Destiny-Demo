import { NextResponse } from 'next/server'
import { jwtVerify,importJWK } from 'jose';

 
export async function middleware(request) {
    try{
      const secretJWK = {
        kty: 'oct',
        k: process.env.NEXTAUTH_SECRET 
      }
      const secretKey = await importJWK(secretJWK, 'HS256');
      const userToken = request.cookies.get('userToken').value;
      const {payload} = await jwtVerify(userToken, secretKey);
     
      if(!payload.user){
        throw new Error ('user incorrect')
      }      

      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-data-user', JSON.stringify(payload.user))  
      
      const response = NextResponse.next({
        request: {          
          headers: requestHeaders,
        },
      })
      
      return response;

      
    }catch (error){
      return NextResponse.redirect(new URL('/sign-out', request.url));
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/people', '/chat/:path*', '/profile/:path*', '/friendship', '/popular', '/setting', '/shop'],
}