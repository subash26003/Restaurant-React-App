import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Services from './Services/Services'
import AboutUs from './AboutUs/AboustUs'
import Menu from './Menu/Menu'
import TableBooking from './TableBooking/TableBooking'
import Review from './Reviews/Review'
import Footer from './Footer/Footer'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
  axios.defaults.withCredentials = true
  const Navigate = useNavigate()
  const location = useLocation()
  const [auth , setAuth] = useState(false)
  console.log(location.state)
  useEffect(() =>{
    if(location.state){
      setAuth(location.state.auth)
    }
  })

  return (
    <>
    
        { auth ? 
          <>
            <Navbar/>
            <Home />
            <Services />
            <AboutUs />
            <Menu />
            <TableBooking />
            <Review />
            <Footer />
        
          </>
        :  
          <h1>You Are Not Authorized</h1>
        } 
    </>
  )
}

export default Layout