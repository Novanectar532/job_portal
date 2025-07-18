import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaInstagram,
} from "react-icons/fa";
import React from 'react'
import vodafone from "../photos/vodafone.png";
import intel from "../photos/intel-3.png";
import tesla from "../photos/tesla-9.png";
import amd from "../photos/amd-logo-1.png";
import talkit from "../photos/talkit.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaSkype,
  FaYoutube,
  FaFigma,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const HeroSection = () => {
  return (
    <>
      <div className=" bg-[#F9FCFF] flex flex-col m-auto items-center justify-center text-center  relative w-full h-screen ">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-black z-1">
          Join us & <span className="text-blue-400">Explore</span> <br />
          <span className="text-blue-400">Thousands</span> of Jobs
        </h1>
        <p className="text-gray-500 mt-8 max-w-2xl">
          Find Jobs, Employment & Career Opportunities. Some of the companies{" "}
          <br />
          we've helped recruit excellent applicants over the years.
        </p>

        <div className="bg-white mt-10 p-4 sm:p-6 rounded-lg flex flex-col sm:flex-row shadow-lg gap-4 justify-between items-center max-w-5xl w-full border border-gray-200 z-1" style={{boxShadow: "1px 1px 5px 0.5px  gray"}}>
          <div className="flex items-center w-full sm:w-auto sm:border-r sm:border-r-gray-100 px-2 sm:px-3 ">
            <FaSearch className="text-[#4640DE] mr-2" />
            <input
              type="text"
              placeholder="Search for keywords"
              className="outline-none border-b border-gray-400 px-2.5 border-solid  p-2 w-full"
            />
          </div>

          <div className="flex items-center w-full sm:w-auto sm:border-r sm:border-r-gray-200 px-2 sm:px-3 ">
            <FaMapMarkerAlt className="text-[#4640DE] mr-2" />
            <input
              type="text"
              placeholder="Select Location"
              className="outline-none p-2 w-full border-b border-gray-400  border-solid"
            />
          </div>

          <div className="flex items-center w-full sm:w-auto px-2 sm:px-3 ">
            <FaBriefcase className="text-[#4640DE] mr-2" />
            <input
              type="text"
              placeholder="Select Category"
              className="outline-none p-2 w-full border-b border-gray-400  border-solid "
            />
          </div>

          <button className="bg-[#4640DE] text-white font-medium py-2 px-4 rounded-md w-full sm:w-auto mt-2 sm:mt-0">
            Search
          </button>
        </div>

        {/* Partner Logos */}

    

        {/* For line and icon  */}

        {/* <div className="w-full h-350 border-3 border-gray-200 border-dashed  rounded-full absolute top-[-135%] right-5 hidden lg:block"></div>

        <div className="w-[80%] h-280 border-3 border-gray-200 border-dashed rounded-full absolute top-[-110%] left-30 hidden lg:block"></div>
        <div className="w-[60%] h-250 border-3 border-gray-200 border-dashed rounded-full absolute top-[-115%] left-65 hidden lg:block"></div>

        <div className="flex justify-center items-center lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-65 lg:left-30 md:top-10 md:left-10 top-10 left-0  sm:left-22  ">
          <FaFacebookF size={20} color="#1877F2" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-113 lg:left-95 md:top-25 md:left-25 top-22 left-5  ">
          <FaLinkedinIn size={20} color="red" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-110 lg:right-95 md:top-25 md:right-25 top-23 right-0 sm:right-5 ">
          <FaTwitter size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-50 lg:right-30  sm:top-10 sm:right-10 top-10 right-5    ">
          <FaSkype size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-25 lg:left-42 md:top-50 md:left-30 top-35 left-0 sm:left-15 sm:top-42">
          <FaInstagram size={20} color="#E1306C" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-10 lg:right-52 md:top-40 md:right-10 top-37 right-5 sm:right-15 sm:top-40">
          <FaYoutube size={20} color="#1877F2" className="m-2" />
        </div>

        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-30 lg:left-98 md:top-40  md:left-10 top-25 left-30 sm:left-40">
          <FcGoogle size={20} color="#1877F2" className="m-2" />
        </div>
        <div className="flex justify-center items-center  lg:bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300 absolute lg:top-20 lg:right-110 md:top-50 md:right-30 top-22 right-25 sm:right-40">
          <FaFigma size={20} color="#0ACF83" className="m-2" />
        </div> */}
      </div>


      
          <div className="relative overflow-hidden w-full">
          <div className="logo-slider flex justify-evenly  items-center gap-6  my-10">
            {" "}
            {/**logo-slider from index.css */}
            <img src={vodafone} alt="vodafon" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={vodafone} alt="vodafon" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={vodafone} alt="vodafon" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
            <img src={vodafone} alt="vodafon" />
            <img src={intel} alt="intel" />
            <img src={tesla} alt="tesla" />
            <img src={amd} alt="amd" />
            <img src={talkit} alt="talkit" />
          </div>
        </div>
    </>
  );
};

export default HeroSection;