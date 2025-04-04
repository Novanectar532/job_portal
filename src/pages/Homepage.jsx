import React from 'react'
import HeroSection from '../component/Home/HeroSection';
import JobCategories from '../component/Home/JobCategories';
import Joblisting from '../component/Home/JobListings';
import PostJob from '../component/Home/PostJob';
import DownloadAppSection from '../component/Home/DownloadAppSection'
import TestimonialSection from '../component/Home/TestimonialSection'




const Homepage = () => {
  return (
   <>
   <HeroSection/>
   <JobCategories/>

    <Joblisting/>
    <PostJob/>
    <TestimonialSection/>
    <DownloadAppSection/>

   </>
  )
}

export default Homepage



