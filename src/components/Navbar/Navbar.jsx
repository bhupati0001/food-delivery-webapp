import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Contact us');

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="tomato logo" />
        <div className="navlinks-container">
            <a href="#" onClick={()=>setActiveLink('Home')}  className={activeLink === 'Home' ? 'navlink active' : 'navlink'} >Home</a>
            <a href="#" onClick={()=>setActiveLink('Menu')}  className={activeLink === 'Menu' ? 'navlink active' : 'navlink'} >Menu</a>
            <a href="#" onClick={()=>setActiveLink('Mobile-app')} className={activeLink === 'Mobile-app' ? 'navlink active' : 'navlink'} >Mobile-app</a>
            <a href="#" onClick={()=>setActiveLink('Contact us')} className={activeLink === 'Contact us' ? 'navlink active' : 'navlink'} >Contact us</a>
        </div>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search logo" />
            <div className="navbar-cart">
                <a href="#"><img src={assets.basket_icon} alt="cart img" /></a>
                <span className="dot"></span>
            </div>
            <button className='navbar-btn'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar