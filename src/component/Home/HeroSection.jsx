import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import vodafone from '../photos/vodafone.png'
import intel from '../photos/intel-3.png'
import tesla from '../photos/tesla-9.png'
import amd from '../photos/amd-logo-1.png'
import talkit from '../photos/talkit.png'
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaSkype,FaYoutube ,FaFigma  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const HeroSection = () => {
  return (
    <>
    <div className=" bg-[#F9FCFF] flex flex-col items-center justify-center text-center px-4 mt-15 relative">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-semibold text-black z-1">
        Join us & <span className="text-[#4640DE]">Explore</span>{" "} <br/>
        <span className="text-[#4640DE]">Thousands</span> of Jobs
      </h1>
      <p className="text-gray-500 mt-4 max-w-2xl">
        Find Jobs, Employment & Career Opportunities. Some of the companies <br/>
        we’ve helped recruit excellent applicants over the years.
      </p>

      {/* Search Bar */}
      <div className="bg-white mt-6 p-6 rounded-lg shadow-lg flex flex-wrap gap-4 justify-between items-center max-w-5xl w-full border border-gray-200 z-5 ">
        {/* Keyword Input */}
        <div className="flex items-center w-full md:w-auto border-r md:border-r-gray-200 px-3">
          <FaSearch className="text-[#4640DE]" />
          <input
            type="text"
            placeholder="Search for keywords"
            className="outline-none p-2 w-full md:w-auto"
          />
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center w-full md:w-auto border-r md:border-r-gray-200 px-3">
          <FaMapMarkerAlt className="text-[#4640DE]" />
          {/* <select className="outline-none p-2 w-full md:w-auto bg-transparent">
            <option>Select Location</option>
            <option>New York</option>
            <option>San Francisco</option>
            <option>Los Angeles</option>
          </select> */}
          <input
            type="text"
            placeholder="Select Location"
            className="outline-none p-2 w-full md:w-auto"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex items-center w-full md:w-auto px-3">
          <FaBriefcase className="text-[#4640DE]" />
          {/* <select className="outline-none p-2 w-full md:w-auto bg-transparent">
            <option>Select Category</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select> */}
          <input
            type="text"
            placeholder="Select Category "
            className="outline-none p-2 w-full md:w-auto"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#4640DE] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Partner Logos */}
      
    </div>
    <div className="flex justify-evenly flex-wrap items-center gap-6 md:mt-60 mt-10">
        
    <img src={vodafone} alt="vodafon" />
    <img src={intel} alt="intel" />
    <img src={tesla} alt="tesla" />
    <img src={amd} alt="amd" />
    <img src={talkit}alt="talkit" />
  </div>
  <div className="w-full h-350 border-3 border-red-200 border-dashed  rounded-full absolute top-[-110%] hidden lg:block"></div>
  <div className="w-[80%] h-280 border-3 border-gray-200 border-dashed rounded-full absolute top-[-92%] left-30 hidden lg:block"></div>
  <div className="w-[60%] h-250 border-3 border-gray-200 border-dashed rounded-full absolute top-[-100%] left-60 hidden lg:block"></div>
        
  <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-70 left-28 hidden lg:block ">
      <FaFacebookF size={20} color="#1877F2" className="mt-2 ml-2" />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-120 left-84 hidden lg:block">
      <FaLinkedinIn size={20} color="red" className="mt-2 ml-2" />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-137 left-240 hidden lg:block">
      <FaTwitter size={20} color="#1877F2" className="mt-2 ml-2"/>
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-50 left-352 hidden lg:block">
      <FaSkype size={20} color="#1877F2" className="mt-2 ml-2" />
    </div>

    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-40 left-46 hidden lg:block">
      <FcGoogle size={20} color="#1877F2" className="mt-2 ml-2"/>
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-65 left-285 hidden lg:block">
      <FaYoutube size={20} color="#1877F2" className="mt-2 ml-2" />
    </div>
    
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-35 left-98 hidden lg:block">
      <FcGoogle size={20} color="#1877F2" className="mt-2 ml-2" />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-23 left-253 hidden lg:block">
      <FaFigma size={20} color="#0ACF83" className="mt-2 ml-2" />
    </div>

    {/* for small Screen */}
    {/* <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 bg-opacity-50 rounded-full hover:opacity-0 transition duration-300 absolute top-70 left-28 sm:hidden animate-slide">
  <FaFacebookF size={20} color="#1877F2" />
</div>

    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-120 left-84 sm:hidden animate-slide ">
      <FaLinkedinIn size={20} color="red"  />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-137 left-40 sm:hidden animate-slide ">
      <FaTwitter size={20} color="#1877F2" />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-50 left-52 sm:hidden animate-slide ">
      <FaSkype size={20} color="#1877F2" c/>
    </div>

    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-40 left-41 sm:hidden animate-slide ">
      <FcGoogle size={20} color="#1877F2" />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-30 left-38 sm:hidden animate-slide ">
      <FaYoutube size={20} color="#1877F2"  />
    </div>
    
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-55 left-80 sm:hidden animate-slide ">
      <FcGoogle size={20} color="#1877F2"  />
    </div>
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute top-35 left-20 sm:hidden animate-slide ">
      <FaFigma size={20} color="#0ACF83"  />
    </div>  */}


  
  </>
  );
};

export default HeroSection;