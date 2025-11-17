import React from 'react'
import logo from "../assets/signUp/inklune.png"

const SignIn = () => {
  return (
    <div className='container w-11/12 mx-auto '>
        <div className=' flex flex-col gap-4 justify-center items-center h-screen'>
            {/* Inklune logo */}
            <span>
                <img src={logo} alt="" className='py-3'/>
            </span>
            {/* welcome */}
            <div className='flex flex-col gap-2'>
                <h2 className='text-4xl font-bold text-center'>Welcome Back</h2> 
                <p className='text-base text-gray-600 py-1 tracking-wide text-center '>Sign in to Continue your writing journey</p>
            </div>

            <div className='outline outline-1 outline-slate-300 rounded-sm px-5 py-5 shadow-lg/30 min-w-[290px] sm:min-w-[350px] md:min-w-[450px]'>
                <form action="" className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm text-gray-600 py-1'>Email Address</label>
                        <input type="text" name="" id="" placeholder='johndoe@gmail.com' className='outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4'/>
                    </div>

                    <div className='flex flex-col '>
                        {/* forget password */}
                        <span className='flex justify-between'>
                            <label htmlFor="" className='text-sm text-gray-600 py-1'>Password</label>
                            <a href="" className='text-[hsla(256,90%,68%,1)] text-sm'>Forget Password?</a>
                        </span>
                        <input type="text" name="" id="" placeholder='*********' className='outline outline-1 outline-gray-400 rounded-sm text-sm py-2 pl-2 pr-4'/>
                    </div>

                    <button className='bg-[hsla(256,90%,68%,1)] text-white text-sm font-xl py-2.5 rounded-sm w-full '>
                        Sign In
                    </button>
                </form>

                <p className='text-center text-xs py-2'>Don't have an account yet? <span className='text-[hsla(256,90%,68%,1)]'>Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn
