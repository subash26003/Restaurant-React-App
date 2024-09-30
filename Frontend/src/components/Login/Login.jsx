import React , { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../Js Files/PageData';
import Modal from '../Modal/Modal'
import axios from 'axios';
import './login.css'

const Login =() =>{
    
    const Navigate = useNavigate();

    axios.defaults.withCredentials = true
    const [userData , setUserData] = useState({
        email:'',
        password: ''
    })

    const [modal , setModal] = useState(false)
    const [message , setMessage] = useState('')
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [verified , setVerified] = useState(false)

    const [isInvalidEmail,setInvalidEmail] = useState(false)
    const [isSmallPassword,setIsSmallPassword] = useState(false)

    const VerifyEmail = (email) =>{
        const emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/ ;
        return emailRegex.test(email)
    }

    const VerifyPassword = (password) =>{
        return password.length >= 8
    }

    const handleLoginBtn = () =>{
        const isValidEmail = VerifyEmail(email);
        const isValidPassword = VerifyPassword(password)
        if(!isValidEmail){
            setInvalidEmail(true)
        }else{
            setInvalidEmail(false)
        }
        if(!isValidPassword){
            setIsSmallPassword(true)
        }else{
            setIsSmallPassword(false)
        }
        if(isValidEmail && isValidPassword){
            setEmail('')
            setPassword('')
            setVerified(true)
            setUserData({
                ...userData,
                email : email,
                password : password
            })
          
            axios.post(`${BASE_URL}/login`,{email,password})
            .then(res => {
                if(res.status === 200){
                    Navigate('/page', {state:{auth:true}})
                }else{
                    // Navigate('/page', {state:{auth:false}})
                    // console.log(data)
                    setModal(true)
                }
            })
            .catch(err => {
                // Navigate('/page', {state:{auth:false}})
                setMessage(err.response.data)
                setModal(true)
                setTimeout(() =>{
                    setModal(false)
                },2000)
            }) 
            
        }
    }

    useEffect(() =>{
        document.getElementById('email').addEventListener('blur' , function(){
            const isInValidEmail = !(VerifyEmail(email)) || email === ''
            setInvalidEmail(isInValidEmail)
        })
        document.getElementById('password').addEventListener('blur' , function(){
            const isInValidPassword = !(VerifyPassword(password)) || password === ''
            setIsSmallPassword(isInValidPassword)
        })
        
    },[email,password])

    return(
        <div className='h-screen flex '>
        <div className="login-card m-auto p-10 pb-16 flex flex-col items-center">
            <h1 className='text-3xl md:text-4xl text-blue-800 tracking-wide text-center font-extrabold'>Login</h1>
            <form onSubmit={(e) => e.preventDefault()} className='login-form-element w-10/12' noValidate>
                <div className='input-card'>
                    <label htmlFor='email' className='input-label text-xs sm:text-sm' >Email</label>
                    <input 
                        type='text' 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input-element font-bold' required 
                    />
                    {isInvalidEmail && <p className='text-xs text-red-700'>*Invalid email</p>}
                </div>
                <div className='input-card'>
                    <label htmlFor='password' className='input-label  text-xs md:text-sm'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        value={password}
                        className='input-element font-bold' 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    {isSmallPassword && <p className='text-xs text-red-700'>*password is too small</p>}
                </div>
                <p className='forget-pass text-xs md:text-base mb-3 text-center'>Forget password? <a href="#">click here</a></p>
                <button 
                    onClick={() => handleLoginBtn()}
                    className='login-btn text-xl font-bold'>Login</button>
            </form>
            <p className='mt-5 flex flex-col sm:block text-xs md:text-base'>Dont't have an account?&nbsp; 
                <Link to='/signup'> <button className='SignUp-btn'>Sign Up</button> </Link>
            </p>
        </div>
        {modal && <Modal message={message} />}
        </div>
    )
}


export default Login