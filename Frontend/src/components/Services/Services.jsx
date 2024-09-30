import React, { useEffect } from 'react'
import { FaUserTie,FaCartShopping ,FaHeadset } from 'react-icons/fa6'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import './services.css'

const services = [
    {
        icon: <FaUserTie />,
        title:"Master Chefs",
        content:"Expert chefs creating exquisite dishes with passion and culinary mastery."
    },
    {
        icon: <GiForkKnifeSpoon/>,
        title:"Quality Food",
        content:"Exquisite Quality Food Crafted with Perfection and Fresh Ingredients"
    },
    {
        icon: <FaCartShopping />,
        title:"Online Order",
        content:"Convenient Online Ordering for Delicious Meals Anytime, Anywhere!"
    },
    {
        icon: <FaHeadset />,
        title:"24/7 Service",
        content:"Exceptional 24/7 Service, Always Here for Your Dining Needs!"
    }
]
const Services = () => {
   
  return (
    <div id="services" className='scroll-mt-16 service-container m-10 mt-0 flex flex-wrap gap-10  justify-around '>
        {services.map(each => (
            <div key={services.indexOf(each)} data-aos="fade-up" data-aos-delay={services.indexOf(each)*100}> 
                <div  className='service-card rounded shadow-lg p-5 mt-10 flex flex-col gap-3 '>
                    <div className='text-4xl'>
                        {each.icon}
                    </div>
                    <h1 className='text-2xl font-semibold'>{each.title}</h1>
                    <p className=''>{each.content}</p>
                    
                </div>
        </div>
        ))}
    </div>
  )
}

export default Services