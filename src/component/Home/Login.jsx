import React from 'react'
import img2 from '../photos/sign9.png'
import { FaGoogle, FaApple } from "react-icons/fa";
import logo from "../photos/novalogo.png"
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center h-screen relative'>
        {/* left side div */}
        <div>
            <div className='absolute top-5 left-[16%] text-white font-bold text-2xl  flex'>
                <img src={logo} alt="" className='w-10' />
                NN<span className=' text-sky-500'>Hire </span>
            </div>
            <img src={img2}
            className='w-140 h-screen object-cover'
            />

        </div>

        {/* right side div */}
       
        <div className='flex items-center justify-center'>
            <div className='bg-white p-10 rounded shadow w-[500px] h-screen'>
                <div className='flex justify-center mb-6 gap-3'>
                    <button className='px-4 py-2 rounded bg-gray-50 shadow  text-blue-900 hover:bg-blue-900 hover:text-white'>
                        Candidate
                    </button>
                    <button className='px-4 py-2 rounded bg-gray-50 shadow  text-blue-900 hover:bg-blue-900 hover:text-white'>
                        Employee
                    </button>
                </div>
                <h2 className='text-xl font-semibold text-center mb-4'>Welcome To NextHire</h2>
                <div className="flex gap-4 mb-4">
                            <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE]  bg-gray-50 shadow p-2 rounded-lg ">
                              <FaGoogle /> Sign Up with Google
                            </button>
                            <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE] bg-gray-50 shadow p-2 rounded-lg ">
                              <FaApple /> Sign Up with Apple
                            </button>
                          </div>
                          <div className='text-center my-4 text-gray-400'>
                          Or login up with email </div>
                          <from>
                            <label className='py-4' htmlFor="Email">Email</label>
                            <input
                            type='Email Address'
                            placeholder=' Enter Email Address'
                            className='w-full p-3 rounded  shadow my-7'
                            />
                            <label className=''htmlFor="password">Password</label>
                            <input
                            type='password'
                            placeholder=' Enter your Password'
                            className='w-full p-3 rounded   shadow'
                            />
                            <p className='text-right text-[#4640DE]'>?Forget Password</p>
                            <button className="w-full bg-[#4640DE] p-3 rounded text-white hover:bg-indigo-600 mt-5">
              login
            </button>
                          </from>
                          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a onClick={() => navigate('/signup')}  className="text-[#4640DE] hover:underline cursor-pointer">
              Sign UP
            </a>
          </p>

          <p className="text-sm text-center mt-2 text-gray-500">
            By clicking 'Sign Up', you agree to the{" "}
            <a href="#" className="text-[#4640DE] hover:underline">
          Terms of Services
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#4640DE] hover:underline">
              Privacy Policy
            </a>.
          </p>
                          

            </div>

        </div>
    </div>
  )
}

export default Login