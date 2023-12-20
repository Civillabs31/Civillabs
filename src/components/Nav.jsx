import React, { useState } from 'react';
import '../Styles/Nav.css';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Nav = () => {
    const [check, setCheck] = useState(false);

    return (
        <>
            <Toaster />
            <div className='head_div'>
                <NavLink className='logo_link' to='/'>
                    <div className='head_left'>
                        <img src={logo} className='head_logo' alt='CivilLabs' />
                        <p className='head_title'>Civil labs</p>
                    </div>
                </NavLink>
                <div className='head_right'>
                    <i className="fa-solid fa-phone phone_icon"></i>
                    <a href='#' className='call' onClick={() => { navigator.clipboard.writeText('9967410510'); toast.success('Copied to Clipboard') }}><p className='head_title1'>9967 410 510</p></a>
                    <div className='menu-bar' onClick={() => { setCheck(!check) }}>
                        {!check ? <i class="fa-solid fa-bars nav-menu"></i> : <i class="fa-solid fa-bars-staggered nav-menu" style={{ color: '#fec119' }}></i>}
                    </div>
                </div>
            </div>
            <div className='nav'>
                <ul className='nav_ul'>
                    <li><NavLink to='/' className='link'>Home</NavLink></li>
                    <li><NavLink to='/about' className='link'>About Us</NavLink></li>
                    <li><NavLink to='/services' className='link'>Services</NavLink></li>
                    <li><NavLink to='/gallery' className='link'>Gallery</NavLink></li>
                    <li><NavLink to='/rates' className='link'>Rates</NavLink></li>
                    <li><NavLink to='/contact' className='link'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className={!check ? 'nav_mobile' : 'nav_mobile nav_mobile_open'}>
                <ul className='ul_mobile'>
                    <li className='li_mobile'><NavLink to='/' onClick={() => { setCheck(false) }} className='link_mobile'>Home</NavLink></li>
                    <li className='li_mobile'><NavLink to='/about' onClick={() => { setCheck(false) }} className='link_mobile'>About Us</NavLink></li>
                    <li className='li_mobile'><NavLink to='/services' onClick={() => { setCheck(false) }} className='link_mobile'>Services</NavLink></li>
                    <li className='li_mobile'><NavLink to='/gallery' onClick={() => { setCheck(false) }} className='link_mobile'>Gallery</NavLink></li>
                    <li className='li_mobile'><NavLink to='/rates' onClick={() => { setCheck(false) }} className='link_mobile'>Rates</NavLink></li>
                    <li className='li_mobile'><NavLink to='/contact' onClick={() => { setCheck(false) }} className='link_mobile'>Contact Us</NavLink></li>
                    <li className='li_mobile'>
                        <i className="fa-solid fa-phone phone_icon_mobile"></i>
                        <a href='#' className='call' onClick={() => { navigator.clipboard.writeText('9967410510'); toast.success('Copied to Clipboard') }}><p className='number_mobile'>9967 410 510</p></a>
                    </li>
                </ul>
            </div>
        </>
        )
}

export default Nav;