import { FaGoogle, FaApple } from "react-icons/fa";
import img1 from '../photos/logo.png'
import { useNavigate } from "react-router-dom";
import {ToastContainer } from 'react-toastify';
import { useState } from "react";
import React from "react";
const Signup = () => {
  const navigate = useNavigate();

  const[loginInfo, setLoginInfo] =useState({
    name:'',
    email:'',
    password:''
  })


  const handleChange =(e) => {
   
  }
  return (
    <div className=" text-black flex justify-center  ">
      {/* Left Side - Image Section */}
      <div className=" flex items-center justify-center h-screen">
        <img
          src={img1}
          alt="Person working on laptop"
          className="w-140 h-screen object-cover"
        />
      </div>

      {/* Right Side - Form Section */}
      
      <div className=" flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-lg  w-[600px] h-screen">
          <div className="flex justify-center mb-6 gap-2">
            <button className="px-4 py-2 rounded bg-gray-50 shadow text-blue-900 hover:bg-blue-900 hover:text-white">
              Candidate
            </button>
            <button className="px-4 py-2 rounded bg-gray-50 shadow text-blue-900 hover:bg-blue-900 hover:text-white">
              Employee
            </button>
          </div>

          <h2 className="text-xl font-semibold text-center mb-4">
            Get More Opportunities
          </h2>

          <div className="flex gap-4 mb-4">
            <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE]  bg-gray-50 shadow p-2 rounded-lg ">
              <FaGoogle /> Sign Up with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-1/2 text-[#4640DE] bg-gray-50 shadow p-2 rounded-lg ">
              <FaApple /> Sign Up with Apple
            </button>
          </div>

          <div className="text-center my-4">Or sign up with email</div>

          <form className="space-y-4">
            <input
            onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded  shadow  "
            />
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded shadow  "
            />
            <input
            onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded shadow "
            />
            <input
            onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded shadow "
            />
            <button className="w-full bg-[#4640DE] p-3 rounded text-white hover:bg-indigo-600">
              Sign Up
            </button>
          

          <p className="text-center mt-4">
            Already have an account?{" "}
            <a onClick={() => navigate('/login')}  className="text-[#4640DE] hover:underline cursor-pointer">
              Log In
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
      </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
