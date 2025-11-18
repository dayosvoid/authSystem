import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import image from "../assets/auth/amico.png"

const ResetPasswordMail = () => {
  return (
    <div>
        <div className='h-full relative'>
    
            {/* gray bg color */}
            <div className='bg-gray-500/10  hidden md:flex md:min-h-screen left-[50%] right-0 top-0 buttom-0 absolute'></div>
            
            <div className='container w-11/12 mx-auto flex flex-row h-screen justify-center items-center gap-5'>
    
                {/* left side bg-img */}
                <div className='z-2 flex justify-center  hidden md:flex w-[49%]'>
                    <img src={image} alt="" className='md:size-[300px]' />
                </div>
    
    
                <div className='md:w-[49%] flex justify-center'>
                    <div className='flex flex-col gap-6 md:w-[300px]'>
                        
                        <span className='flex flex-col'>
                            <h2 className='text-2xl font-bold text-gray-800'>Recovery Email Sent!</h2>
                            <p className='text-[12px] text-gray-600 py-1 tracking-wide'>Please check your email for next steps to reset your password.</p>
                        </span>
        

                        <span>
                            {/* Button */}
                            <button className='bg-[hsla(256,90%,68%,1)] hover:bg-[hsla(256,54%,56%,1.00)] hover:cursor-pointer text-nowrap text-white text-sm font-xl py-2 px-4 rounded-sm shadow-sm/20'>
                                CONTACT SUPPORT
                            </button>
                        </span>


                        {/* back button */}
                        <button className='text-white bg-gray-900 mt-15 py-2 rounded-sm hover:bg-gray-700 hover:cursor-pointer'>
                            BACK TO LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPasswordMail
