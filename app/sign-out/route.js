'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {     
  
    cookies().delete('userToken')

    redirect('/sign-in')
  
  }