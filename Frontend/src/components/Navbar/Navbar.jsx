import React, { useState, useEffect } from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { IoMdRestaurant } from "react-icons/io";
import { Link } from 'react-router-dom';
import './navbar.css'

const navLinks = [
    { title: 'Home', url: '#' },
    { title: 'Services', url: 'services' },
    { title: 'About', url: 'about' },
    { title: 'Menu', url: 'menu' },
    { title: 'Contact', url: 'contact' }
];

const iconList = [
    { icon: <FaUser /> },
    { icon: <FaHeart /> },
    { icon: <FaShoppingCart /> },
];

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);
    const [navBgColor , setNavBgColor] = useState('')
    const mobileNavClass = showModal ? 'mobile-nav' : ''
    
    useEffect(() => {
        const handleScroll =() =>{
            if(window.scrollY > 100){
                setNavBgColor('scrolled')
            }else{
                setNavBgColor('')
            }
        }
        
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll',handleScroll)
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        setNavBgColor('scrolled')
        setTimeout(() =>{
            toggleModal();
        },100)
        
    };

    return (
        <>
            {!isMobile ? (
                // Laptop Navbar Code Here
                <nav className={`nav-bar-container ${navBgColor}`}>
                    <div className="flex w-full justify-between mx-auto items-center py-4 px-24">
                        <div className="text-slate-100 font-bold text-5xl text-[Coral] "> <IoMdRestaurant/> </div>
                        <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
                            {navLinks.map((link, index) => (
                                <a  key={index} href={`#${link.url}`} ><li className="text-slate-100 text-xl font-semibold nav-links">{link.title}</li></a>
                            ))}
                        </ul>
                        <ul className="flex text-slate-100 gap-6 items-center cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index} className='nav-links text-xl' >{item.icon}</div>
                            ))}
                           <Link to='/'> <button className='logout-btn border-2 rounded-3xl font-bold'>Log out</button></Link>
                        </ul>
                        
                    </div>
                </nav>
            ) : ( 
                // Mobile Navbar Code Here
                <nav className={`nav-bar-container pt-3  ${navBgColor}`}>
                    <div className="mx-auto w-full flex justify-between items-center pl-5 pr-5">
                        <div className="text-slate-100 font-bold text-5xl text-[Coral]"><IoMdRestaurant/></div>
                        <div className="text-xl flex justify-end items-center gap-6 text-slate-100 cursor-pointer">
                            {iconList.map((item, index) => (
                                <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : null}>{item.icon}</div>
                            ))}
                            {!showModal ? <FaBars onClick={handleBarsIconClick} className="text-slate-100 cursor-pointer" /> : 
                            <FaTimes
                                className=" text-slate-100 cursor-pointer"
                                onClick={toggleModal}
                                style={{ fontSize: '16px' }}
                            /> }
                        </div>
                    </div>
                    {showModal && (
                        <div className={`${mobileNavClass}  flex justify-center items-center p-5`}>
                            <div className="w-full">
                                <div className="flex flex-col gap-8 items-start justify-center h-full pb-10 pt-10">
                                    {navLinks.map((link, index) => (
                                       <a key={index} href={`#${link.url}`}><span className="nav-links  text-slate-100 font-bold cursor-pointer">{link.title}</span></a>
                                    ))}
                                    <span className="nav-links  text-slate-100 font-bold cursor-pointer">Logout</span>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}

export default Navbar;