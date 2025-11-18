import React from 'react'
import image from "../assets/auth/pana.png"
import { FaArrowRight } from "react-icons/fa";

const ChangePassword = () => {
  return (
    <div>
        <div className='h-full relative'>
    
            {/* gray bg color */}
            <div className='bg-gray-500/10  hidden md:flex md:min-h-screen left-[50%] right-0 top-0 buttom-0 absolute'></div>
            
            <div className='container w-11/12 mx-auto flex flex-row h-screen justify-center items-center gap-5'>
    
                {/* left side bg-img */}
                <div className='z-2 flex justify-center  hidden md:flex w-[49%]'>
                    <img src={image} alt="" className='md:w-[370px]' />
                </div>
    
    
                <div className='md:w-[49%] flex justify-center'>
                    <div className='flex flex-col gap-6 md:w-[300px]'>
                        
                        <span className='flex flex-col'>
                            <h2 className='text-2xl font-bold text-gray-800'>Reset your password</h2>
                            <p className='text-[12px] text-gray-600 py-1 tracking-wide'>Type in your new password</p>
                        </span>

                        {/* Form */}
                        <form action="" className='flex flex-col gap-2'>
                            <span className='flex flex-col'>
                                <label htmlFor="" className='text-sm text-gray-600 py-1'>Password</label>
                                <input type="text" placeholder='********' className='outline outline-1 outline-gray-400 rounded-lg text-sm py-2 pl-3 pr-4'/>
                            </span>

                            <span className='flex flex-col'>
                                <label htmlFor="" className='text-sm text-gray-600 py-1'>Comfirm Password</label>
                                <input type="text" placeholder='********' className='outline outline-1 outline-gray-400 rounded-lg text-sm py-2 pl-3 pr-4'/>
                            </span>
                        
                            {/* Button */}
                            <button className='bg-[hsla(256,90%,68%,1)] hover:bg-[hsla(256,54%,56%,1.00)] hover:cursor-pointer  text-white text-sm font-xl py-2 px-4 rounded-sm flex justify-between items-center w-[100px]'>
                                Next 
                                <span><FaArrowRight /></span>
                            </button>
                        </form>

                        {/* back button */}
                        <button className='text-white bg-gray-900 py-2 rounded-sm hover:bg-gray-700 hover:cursor-pointer'>
                            BACK TO LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword
