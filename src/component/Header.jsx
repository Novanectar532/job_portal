
import React, { useState } from "react";
import { FaUser, FaLock, FaBars, FaTimes } from "react-icons/fa";

import logo from './photos/logo.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCandidateOpen, setIsCandidateOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div onClick={()=>navigate('/')} className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10" />
          <p className="text-2xl font-bold text-blue-600">NNHire</p> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li onClick={()=>navigate('/')} className="hover:text-blue-500 cursor-pointer">Home</li>
          <li onClick={()=>navigate('/job')} className="hover:text-blue-500 cursor-pointer">Find Jobs</li>

          {/* Dropdown for Candidate */}
          <li
            className="relative hover:text-blue-500 cursor-pointer"
            onMouseEnter={() => setIsCandidateOpen(true)}
            onMouseLeave={() => setIsCandidateOpen(false)}
          >
            For Candidate ▾
            {isCandidateOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Saved Jobs
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Applied Jobs
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for Employee */}
          <li
            className="relative hover:text-blue-500 cursor-pointer"
            onMouseEnter={() => setIsEmployeeOpen(true)}
            onMouseLeave={() => setIsEmployeeOpen(false)}
          >
            For Employee ▾
            {isEmployeeOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Post a Job
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Manage Listings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Employer Dashboard
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for Pages */}
          <li
            className="relative hover:text-blue-500 cursor-pointer"
            onMouseEnter={() => setIsPageOpen(true)}
            onMouseLeave={() => setIsPageOpen(false)}
          >
            Pages ▾
            {isPageOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Home
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  About
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Login & Signup */}
        <div className="hidden md:flex space-x-3">
          <Link to='/login' className="flex items-center text-[#4640DE] px-4 py-2 rounded-xl border border-[#C6C4F5]">
            <FaLock className="mr-2" /> Login
          </Link>
          <Link to='/signup' className="bg-[#4640DE] text-white px-4 py-2 rounded-md shadow-md">
            Sign Up
          </Link>
          {/* <button onClick={() => navigate ('/login')}>
            Go to login
          </button>
          <button onClick={() => navigate('/signup')}>
            Go to signup
          </button> */}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Find Jobs</li>
            <li className="hover:text-blue-500 cursor-pointer">For Candidate</li>
            <li className="hover:text-blue-500 cursor-pointer">For Employee</li>
            <li className="hover:text-blue-500 cursor-pointer">Pages</li>
            <li>
              <button className="flex items-center text-[#4640DE] px-4 py-2 rounded-xl border border-[#C6C4F5]">
                <FaLock className="mr-2" /> Login
              </button>
            </li>
            <li>
              <button className="bg-[#4640DE] text-white px-4 py-2 rounded-md shadow-md">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;





