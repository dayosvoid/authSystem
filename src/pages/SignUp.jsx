import React from 'react'
import img from "../assets/signUp/cuate.png"
import logo from "../assets/signUp/inklune.png"
import google  from '../assets/SignUp/google.png'


const SignUp = () => {

  return (
    <div className='flex h-full md:min-h-screen w-full '>
        <div className='container w-11/12  mx-auto min-h-screen flex gap-10 justify-center items-center h-full py-2 w-full'>


            {/* Background decoration */}
            <div className='z-2 hidden md:flex justify-center w-full'>
                <img src={img} alt="" className='max-w-[80%]' />
            </div>


            {/* form section */}
            <div className='flex flex-col justify-center items-center py-10 space-y-2 h-full w-full md:px-5'>
                <div className='flex flex-col items-center'>
                    <span>
                        <img src={logo} alt="" className='w-[120px]'/>
                    </span>
                    <h2 className='text-[28px] font-semibold'>Create your account</h2>
                    <p className='text-center text-sm text-gray-500 '>join INKLUNE and start sharing your stories with the <br /> world</p>
                </div>


                <form className='flex flex-col gap-4 outline outline-1 outline-slate-300 rounded-sm p-5 w-full shadow-lg/40'>
                    {/* Fullname */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm text-gray-600 py-1'>Fullname </label>
                        <input type="text" placeholder='john doe' className=' outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4'/>
                    </div>

                    {/* Email */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm text-gray-600 py-1'>Email </label>
                        <input type="text" placeholder='johndoe@gmail.com' className='outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4' />
                    </div>
                    
                    {/* Password */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm text-gray-600 py-1'>Password</label>
                        <input type="text" placeholder='********' className='outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4'/>
                    </div>

                    {/* Comfirm password */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm text-gray-600 py-1'>Comfirm password </label>
                        <input type="text" placeholder='********'  className='outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4'/>
                    </div>

                    <button className='bg-[hsla(256,90%,68%,1)] text-white text-sm font-xl py-2.5 rounded-sm'>
                        Sign up
                    </button>

                    {/* google auth */}
                    <button className=' py-1.5 border-2 border-gray-500 text-gray-500 font-semibold w-full rounded-md '>
                        <span className='flex gap-3 w-full justify-center items-center text-sm py-1'>
                            <img src={google} alt="" className='size-4' />
                            <p>Continue with Google</p>
                        </span>
                    </button>

                    <p className='text-center pt-2 text-sm'>Already have an account?  <a href="" className='text-[hsla(256,90%,68%,1)]'>SignIn</a></p>
                </form>

                <p className='text-xs py-3'>By sign signUp you <span  className='text-[hsla(256,90%,68%,1)]' >Terms of Service</span> and <span  className='text-[hsla(256,90%,68%,1)]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>

  )
}

export default SignUp
