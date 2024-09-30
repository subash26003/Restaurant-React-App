import React from 'react'
import './footer.css'
import { FaLocationDot,FaTwitter,FaFacebook ,FaInstagram } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight,MdAddIcCall,MdMail } from "react-icons/md";
import { SiSwiggy } from "react-icons/si";

const quickLinks = [
  {
    url:'home',
    icon:<MdOutlineKeyboardArrowRight />,
    name: 'Home'
  },
  {
    url:'about',
    icon:<MdOutlineKeyboardArrowRight />,
    name: 'About us'
  },
  {
    url:'services',
    icon:<MdOutlineKeyboardArrowRight />,
    name: 'Our Services'
  },
  {
    url:'',
    icon:<MdOutlineKeyboardArrowRight />,
    name: 'Privacy Policy'
  },
]

const ContactDetails =[
  {
    icon:<FaLocationDot />,
    name: '111 Street Coimbatore, India'
  },
  {
    icon:<MdAddIcCall />,
    name: '+91 9876543210'
  },
  {
    icon:<MdMail />,
    name: 'abc123@gmail.com'
  },
]

const SocialDetails =[
  {
    icon:<SiSwiggy />,
    name: 'Swiggy'
  },
  {
    icon:<FaInstagram  />,
    name: 'Instagram'
  },
  {
    icon:<FaTwitter  />,
    name: 'Twitter'
  },
  {
    icon:<FaFacebook />,
    name: 'Facebook'
  },
]

const Footer = () => {
  
  return (
    <div id='contact' className='footer-container mt-20 pt-10 w-full'>
      <div className='quick-info-card  w-full flex flex-row flex-wrap justify-center  mt-10'>
        <div className='quick-links-card mt-10'>
            <div className='title mb-2 flex items-center' data-aos="fade-down" >
                <p className='inline text-2xl'>Restuarant</p>
                <div className='w-14 ml-1 bg-gray-500 inline-block translate-y-1 '></div>
            </div>
            {quickLinks.map((each ,index) => (
              <a  key={index} href={`#${each.url}`}>
                <span data-aos="fade-right" data-aos-duration='1000' className='quick-link mt-2  flex  text-white '>
                  <span className='arrow-icon font-black text-xl'>
                    <MdOutlineKeyboardArrowRight />
                  </span>
                  <p className='-translate-y-1 hover:tracking-widest'>{each.name}</p>
                </span>
              </a>
            ))}
        </div>

        <div className='quick-links-card mt-10'>
            <div className='title mb-2 flex items-center' data-aos="fade-left" >
                <p className='inline text-2xl'>Contact</p>
                <div className='w-14 ml-1 bg-gray-500 inline-block translate-y-1 '></div>
            </div>
            {ContactDetails.map((each ,index) => (
                <span key={index} data-aos="fade-right" data-aos-duration='1000' className='quick-link mt-2 flex  text-white '>
                  <span className='arrow-icon font-black text-xl'>
                    {each.icon}
                  </span>
                  <p className='ml-2 -translate-y-1'>{each.name}</p>
                </span>
              
            ))}
        </div>

        <div className='quick-links-card mt-10'>
            <div className='title mb-2 flex items-center' data-aos="fade-left" >
                <p className='inline text-2xl'>Openings</p>
                <div className='w-14 ml-1 bg-gray-500 inline-block translate-y-1 '></div>
            </div>
            <span data-aos="fade-right" data-aos-duration='1000' className='quick-link mt-2 flex flex-col gap-3 text-white '>
              <span>
                <p  className='text-xl'>Monday - Saturday</p>
                <p  className='text-'>9AM - 10PM</p>
              </span>
              <span>
                <p  className='text-xl'>Sunday</p>
                <p  className='text-'>9AM - 10PM</p>
              </span>
            </span>
        </div>

        <div className='quick-links-card mt-10'>
            <div className='title mb-2 flex items-center' data-aos="fade-left" >
                <p className='inline text-2xl'>Contact</p>
                <div className='w-14 ml-1 bg-gray-500 inline-block translate-y-1 '></div>
            </div>
            {SocialDetails.map((each ,index) => (
                <span key={index} data-aos="fade-right" data-aos-duration='1000' className='quick-link mt-2 flex  text-white '>
                  <span className='arrow-icon font-black text-xl'>
                    {each.icon}
                  </span>
                  <p className='ml-2 -translate-y-1'>{each.name}</p>
                </span>
              
            ))}
        </div>
      </div>
      <hr className='m-10' />
      <div className='flex justify-center'>
        <div className='flex flex-col gap-5'>
          <p className='text-white'>&copy; <span className='underline underline-offset-2'>Restaurant webpage</span>, All rights Reserved,Designed by <span className='underline underline-offset-2 font-bold'>SUBASH</span></p>
          <div className='text-white m-auto'>
            <p className='text-xl'> <a href='#home' className='text-white text-base'>Home</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href='#home' className='text-white text-base'>Help</a>&nbsp;&nbsp; | &nbsp;&nbsp; <a href='#home' className='text-white text-base'>FQAs</a></p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer