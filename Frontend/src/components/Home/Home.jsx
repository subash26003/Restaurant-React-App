import React, { useEffect } from 'react'
import './home.css'
import RotateImage from './../../assets/food.png'

const Home = () => {
  useEffect(() =>{
    const cards = document.querySelectorAll(".tilde-card")
    cards.forEach((e) => applyTiltEffect(e))
  },[])
  return (
    <div id="#" className='Home-outer-container md:padding-20'>
        <div className='hotel-intro-card  text-center lg:text-left p-5 mt-10 lg:mt-0' data-aos="fade-right">
            <h1 className='text-white text-4xl md:text-5xl font-bold'>Enjoy your <br/> Delicious Meal</h1>
            <p className='text-gray-300  md:text lg:text-lg mt-5   welcome-content'>Savor the flavor with our fresh, handcrafted dishes! Join us for a delightful dining experience where every bite is a treat. Come hungry, leave happy!</p>
            <a href="#booking"><button data-aos="fade-up" className='booking-btn text-xl rounded mt-10 m-auto font-bold'>Book Table</button></a>
        </div>
        <div className='home-image-card'  data-aos="fade-left" >
            <img className='home-food-img ' src={RotateImage} alt="food-image" width={200} height={200} />
        </div>
        </div>
  )
}

export default Home