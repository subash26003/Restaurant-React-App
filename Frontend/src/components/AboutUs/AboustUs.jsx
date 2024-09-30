import React from 'react'
import { PiForkKnifeBold } from "react-icons/pi";
import './aboutus.css'
import interiorImage1 from './../../assets/interior1.jpg'
import interiorImage2 from './../../assets/interior2.jpg'
import interiorImage3 from './../../assets/interior3.jpg'

const AboutUs = () => {
  return (
    <div id="about" className='scroll-mt-32 aboutus-container overflow-hidden md:m-16 flex flex-col lg:flex-row  md:gap-0 mt-10 p-10'>
        <div className='w-full lg:w-6/12 about-image-conatiner flex'>
            <div className='w-6/12 h-64 '>
                <img className='w-full h-full' data-aos="zoom-in" src={interiorImage1} />
            </div>
            <div className='w-6/12 h-64 flex items-end col-start-4 row-start-1'>
                <img className='w-52 h-40 relative bottom-0' data-aos="zoom-in"  src={interiorImage2} />
            </div>
            <div className='w-6/12 h-64 flex justify-end col-start-2 row-start-5'>
                <img className='w-52 h-40 relative bottom-0' data-aos="zoom-in" src={interiorImage2} />
            </div>
            <div className='w-6/12 h-64 col-start-4 row-start-5'>
                <img className='w-full h-full relative bottom-0' data-aos="zoom-in" src={interiorImage3} />
            </div>
        </div>
        <div className='aboutus-content-container p-2 md:p-10 flex flex-col'>
            <div className='title flex items-center' data-aos="fade-down" >
                <p className='inline text-3xl'>about us</p>
                <div className='w-16 ml-1 p-0.5 bg-gray-500 inline-block -translate-y-1 '></div>
            </div>
            <h1 className='font-extrabold text-4xl mt-2' data-aos="fade-left" >Welcome to Our <span><PiForkKnifeBold className='inline -translate-y-1'/></span> Restaurant</h1>
            <p className='mt-5 md:w-[50ch] text-gray-600 text-justify' data-aos="zoom-in">
                We culinary excellence meets a warm, inviting atmosphere, offering a diverse menu of delicious, locally sourced dishes that cater to every palate and preference.<br/> <br/>
                Our passionate team is committed to creating memorable dining experiences. With exceptional interiorImage1vice and a focus on delightful flavors, we strive to make every meal special, inviting you to savor the moments spent with us.
            </p>
            <div className='w-full mt-5 flex'>
                <div className='achievements-card h-20 flex items-center mr-5' data-aos="fade-left">
                    <span className='text-3xl md:text-5xl ml-2 mr-5'>15</span>
                    <p  className='md:text-xl'>Years of <br/> <span>Experience </span></p>
                </div>
                <div className='achievements-card w-4/12 h-20 flex items-center' data-aos="fade-left">
                    <span className='text-3xl md:text-5xl  ml-2 mr-5'>50</span>
                    <p className=' md:text-xl '>Popular <br/> <span>Master Chefs</span></p>
                </div>
            </div>
            <button className='read-more-button mt-7' data-aos="fade-up" >Read More</button>
        </div>
        
    </div>
  )
}

export default AboutUs