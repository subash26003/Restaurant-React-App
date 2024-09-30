
import './App.css'
import 'aos/dist/aos.css';
import Aos from 'aos'
import { Route,Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { useEffect } from 'react'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'



function App() {
  useEffect(() =>{
    Aos.init({duration:500,delay:0, once: false ,offset:50})
},[])

  return (
    <div>
      <Routes>
          <Route path="/"  >
            <Route index element={<Login/>} />
          </Route>
          <Route path="/signup" element = {<SignUp />} />
          <Route path='/page' element={<Layout />} >
          </Route>
      </Routes>
    </div>
  )
}

export default App
