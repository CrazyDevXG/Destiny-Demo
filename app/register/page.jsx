'use client'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Link from 'next/link'

export default function Register() {
    const [startDate, setStartDate] = useState(""); 


  return (
    <>
    <div className="flex flex-col h-screen justify-center items-center">
        <div className="max-w-sm mx-auto p-4 w-full">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <DatePicker 
                        showIcon
                        placeholderText=" Select Birthday"
                        selected={startDate}
                        className="block border border-grey-light p-3 rounded mb-4" 
                        dateFormat="yyyy/MM/dd"    
                        onChange= {(date) => setStartDate(date)} 
                        showMonthDropdown showYearDropdown
                        dropdownMode="select"                         
                        />

                    <input 
                        type="tel"
                        maxLength="10"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phone"
                        placeholder="Number Phone" />

                    <select className="block border border-grey-light w-full p-3 rounded mb-4" name="looking">
                        <option value="">Looking For</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>

                    <hr className='py-2'/>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="font-medium w-full rounded-lg bg-slate-700 py-1.5 px-4 text-white h-[38px] active:scale-[0.97] transition-all duration-150"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        
                    </div>
                </div>

                <div className="space-x-2 text-sm text-center text-slate-400 dark:text-white/70 mt-6">
                    Already have an account <span>—</span>
                    <Link className="text-gray-600 hover:text-gray-500" href="./sign-in">
                        Login
                    </Link>.
                </div>
            </div>
        </div>
        </div>
    </div>

  </>
  )
}

