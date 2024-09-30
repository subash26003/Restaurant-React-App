import React, {useState} from 'react'
import { MdFreeBreakfast } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import './menu.css'
import MenuList from '../MenuList/MenuList';
import foodImage1 from './../../assets/food1.jpg'
import foodImage2 from './../../assets/food2.jpg'
import foodImage3 from './../../assets/food3.jpg'
import foodImage4 from './../../assets/food4.jpg'
import foodImage5 from './../../assets/food5.jpg'
import foodImage6 from './../../assets/food6.jpg'

const Menus = [
  {
    icon: <MdFreeBreakfast/>,
    title1: "Popular",
    title2:"BreakFast"
  },
  {
    icon: <MdLunchDining/>,
    title1: "Popular",
    title2:"Lunch"
  },
  {
    icon: <MdDinnerDining/>,
    title1: "Popular",
    title2:"Dinner"
  },
]
const menus = {
'breakfast':[
  {
    image :foodImage1,
    name:"Dosa",
    price:"100rs",
    desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage2,
      name:"Dosa",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage3,
      name:"Dosa",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage4,
      name:"Dosa",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage5,
      name:"Dosa",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage6,
      name:"Dosa",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
],
'lunch':[
  {
    image :foodImage1,
    name:"Biriyani",
    price:"100rs",
    desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage2,
      name:"Biriyani",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage3,
      name:"Biriyani",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage4,
      name:"Biriyani",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage5,
      name:"Biriyani",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage6,
      name:"Biriyani",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
],
'dinner':[
  {
    image :foodImage1,
    name:"Burger",
    price:"100rs",
    desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage2,
      name:"Burger",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage3,
      name:"Burger",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage4,
      name:"Burger",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage5,
      name:"Burger",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
  {
      image :foodImage6,
      name:"Burger",
      price:"100rs",
      desp:"Exquisite flavors, crafted to perfection!" 
  },
]
}


const Menu = () => {
  const [activeMenu , setActiveMenu] = useState('BreakFast')

  const handleActiveMenu = (menu) =>{
    setActiveMenu(menu)
  }
  
  return (
    <div id='menu' className='scroll-mt-16 menu-container flex flex-col justify-start pb-10'>
      <div className='title-card m-auto'>
          <div className='w-16 ml-1 p-0.5 bg-gray-500 inline-block '></div>
          <h1 className='inline text-2xl '>Food Menu</h1>
          <div className='w-16 ml-1 p-0.5 bg-gray-500 inline-block '></div>
      </div>
      <p className='font-[Nunito] text-center text-4xl font-bold mt-2 mb-10'>Most Popular Items</p>
      <div className='menu-card flex justify-center '>
        {Menus.map(each =>(
          <div key={Menus.indexOf(each)} 
            onClick={() => handleActiveMenu(each.title2)}
            className={`${activeMenu === each.title2 ? "active-menu" : ""} each-menu-card flex items-center justify-center gap-3 pr-3 pl-3 md:pl-5 md:pr-5`}>
            <div className='icon text-2xl md:text-5xl'>
              {each.icon}
            </div>
            <span>
              <p className='text-gray-500'>{each.title1}</p>
              <p className='font-bold'>{each.title2}</p>
            </span>
        </div>
        ))}
      </div>
      <div data-aos="zoom-in" className='delay-0' >
        <MenuList  menulist={menus[activeMenu.toLocaleLowerCase()]}/>
      </div>
      
    </div>
      
  )
}

export default Menu