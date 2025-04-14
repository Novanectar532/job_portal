
import React, { useState, useEffect, useContext } from "react";
import { FaUser, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import logo from './photos/logo.png'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log('u',user);
  const [users, setUserInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCandidateOpen, setIsCandidateOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    console.log(userInfo);
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserInfo(null);
    localStorage.removeItem('userType');
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
              <ul className="absolute left-0 mt-2 w-96 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Candidate dashboard
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 
                </li>
              </ul>
            )}
          </li> 

          {/* Dropdown for Employee */}
          {/* <li
            className="relative hover:text-blue-500 cursor-pointer"
            onMouseEnter={() => setIsEmployeeOpen(true)}
            onMouseLeave={() => setIsEmployeeOpen(false)}
          >
            For Employee ▾
            {isEmployeeOpen && (
              <ul className="absolute left-0 mt-2 w-96 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Employee Dashboard
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                 
                </li>
              </ul>
            )}
          </li> */}

          {/* Dropdown for Pages */}
          {/* <li
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
          </li> */}
        </ul>

        {/* Login & Signup */}
        <div className="hidden md:flex">
        {users ? (
          <div className="flex items-center gap-4">
            <span>{user.email}</span>
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/signup" className="text-green-500">Signup</Link>
          </div>
        )}
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
          <div>
        {users ? (
          <div className="flex items-center gap-4">
            <span>{user.email}</span>
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/signup" className="text-green-500">Signup</Link>
          </div>
        )}
      </div>
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Find Jobs</li>
            {/* <li className="hover:text-blue-500 cursor-pointer">For Candidate</li>
            <li className="hover:text-blue-500 cursor-pointer">For Employee</li>
            <li className="hover:text-blue-500 cursor-pointer">Pages</li> */}
           
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;





