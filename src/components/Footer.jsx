import React from 'react'
import '../Styles/Footer.css'
import logo from '../images/logo.png'
import instagram from '../images/instagram.png'
import whatsapp from '../images/whatsappw.png'
import { NavLink } from 'react-router-dom'
import facebook from '../images/facebook.png'
import mail from '../images/mail.png'
import toast, { Toaster } from 'react-hot-toast'

export default function Footer() {
  const mail_link = `https://mail.google.com/mail/u/0/#inbox?compose=new`;
  
  const mail_direct = () =>{
    navigator.clipboard.writeText('info@civillabs.com');
    toast.success('Copied to Clipboard');
    setTimeout(() => {
      window.open(mail_link);
    }, 300);
  }

  return (    
    <>
    <Toaster />
    <div className='footerbar'>
      <div className="backlinkpanel">
        <div className="twostructures">
          <div className="footerpanel">
            <h3>Services</h3>
            <div className="footeroptions">
              <NavLink to='/services' className='NavlinksD' ><p> Annual Service Contract </p></NavLink>
              <NavLink to='/services' className='NavlinksD' ><p> Civil Work </p></NavLink>
              <NavLink to='/services' className='NavlinksD' ><p> Coatings and Applications </p></NavLink>
              <NavLink to='/services' className='NavlinksD' ><p> Plumbing </p></NavLink>
              <NavLink to='/services' className='NavlinksD' ><p> More Services </p></NavLink>
              <NavLink to='/Special_Service' className='NavlinksD' ><p> Special Services </p></NavLink>
            </div>
          </div>
          <div className="footerpanel">
            <h3>Sitemap</h3>
            <div className="footeroptions">
              <NavLink to='/' className='NavlinksD'><p>Home</p></NavLink>
              <NavLink to='/about' className='NavlinksD'><p>About Us</p></NavLink>
              <NavLink to='/contact' className='NavlinksD'><p>Contact Us</p></NavLink>
              <NavLink to='/services' className='NavlinksD'><p>Services</p></NavLink>
              <NavLink to='/rates' className='NavlinksD'><p>Rates</p></NavLink>
              <NavLink to='/gallery' className='NavlinksD'><p>Gallery</p></NavLink>
            </div>
          </div>
        </div>
        <div className="footercivil">
          <h3> <img src={logo} alt="Logo" /> Civil labs</h3>
          <h5 className='footermissionary'>
            Civil labs mission is to achieve <br /> excellence in Service, Quality, Reliability, <br /> Safety, Customer Satisfaction and Build <br /> long lasting customer relationship that <br /> will make us Contracting Company.
          </h5><br />
          <h5 className='footermail'><img onClick={mail_direct} className='footericon' id='mailiconmobile' src={mail} alt="mail" /> info@civillabs.com <img onClick={mail_direct} className='footericon' id='mailicon' src={mail} alt="mail" /> </h5>
          <h5 className='footermail' id='footerimageicon'><a href='https://wa.me/919967410510' target='_blank'><img className='footericon' src={whatsapp} alt="whatsapp" /></a> <a href="https://www.facebook.com/profile.php?id=61552816973450" target='_blank'> <img className='footericon' src={facebook} alt="facebook" /> </a> <a href="https://www.instagram.com/civillabs_web/" target='_blank'> <img className='footericon' src={instagram} alt="instagram" /> </a> </h5>
        </div>
      </div>
      <div className="copyrightbar">Copyright © 2023 Civil labs. All Rights Reserved.</div>
    </div></>
  )
}
