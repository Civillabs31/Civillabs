import React from 'react';
import '../Styles/Home.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/wallet.png';
import img2 from '../images/chat.png';
import img3 from '../images/paper.png';
import img4 from '../images/6.webp';
import img5 from '../images/whatsapp-logo.png';
import img6 from '../images/plumb.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='home_div'>
                <div className='home_div_display'>
                    <p className='home_title1'>Your Trusted Partner in the Region</p>
                    <div className='home_div_bottom'>
                        <div className='home_title_div'><p className='home_title2'>We Offer</p></div>
                        <div className='home_image_container'>
                            <Slider {...settings}>
                                <div className='image_div1'></div>
                                <div className='image_div2'></div>
                                <div className='image_div3'></div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='circle'></div>
                <div className='home_container1'>
                    <h2 className='whychooseus'>Why Choose Us?</h2>
                    <p className='whychooseus_text'>Your  Top Choice for Home Improvement and society renovation work and Annual maintenance contract in the region - <span>Leading contracting company in the City</span>
                        <br></br>
                        <br></br>
                        We are one of the best contracting company in the region with experience technology and expertise.</p>
                </div>
                <div className='home_container2'>
                    <div className='features'>Our Key Features</div>
                    <div className='features_list'>
                        <div className='feature_container'>
                            <img src={img1} className='feature_img' alt='image' />
                            <p className='feature_text'>Get Free Rates <br></br><NavLink to='/rates' onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }} className='feature_link'>Click Here</NavLink></p>
                        </div>
                        <div className='feature_container feature_container1'>
                            <img src={img2} className='feature_img' alt='image' />
                            <p className='feature_text feature_text1'>No Consultation Charges</p>
                        </div>
                        <div className='feature_container'>
                            <img src={img3} className='feature_img' alt='image' />
                            <p className='feature_text'>Free Quotations <br></br><NavLink to='/contact' onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }} className='feature_link'>Click Here</NavLink></p>
                        </div>
                    </div>
                </div>
                <div className='home_container3'>
                    <p className='offer_services'>We Offer Services To</p>
                    <div className='home_services'>
                        <ul className='home_services_ul'>
                            <li className="home_services_li">HOUSING SOCIETY</li>
                            <li className="home_services_li">COMMERCIAL COMPLEXES</li>
                            <li className="home_services_li">COMMERCIAL OFFICES</li>
                            <li className="home_services_li">IT PARK</li>
                            <li className="home_services_li">MALLS</li>
                            <li className="home_services_li">HOSPITALS</li>
                            <li className="home_services_li">INSTITUTIONS</li>
                            <li className="home_services_li">INDUSTRIES</li>
                        </ul>
                        <ul className='home_services_ul home_services_ul1'>
                            <li className="home_services_li">COLLEGES</li>
                            <li className="home_services_li">SCHOOLS</li>
                            <li className="home_services_li">BANQUET HALLS</li>
                            <li className="home_services_li">RESTAURANTS</li>
                            <li className="home_services_li">HOTELS</li>
                            <li className="home_services_li">THEATERS</li>
                            <li className="home_services_li">LABORATORY</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-temp">
                    <img className="img-temp" src={img4} alt="images" />
                    <div className="opacity-col"></div>
                    <div className="schedule">
                        <h1>To Schedule our service</h1>
                        <h4>Get in Contact With Us</h4>
                        <div className="whatsapp-chat">
                            <img className="whatsapp-img" src={img5} alt="whatsapp-logo" />
                            <a href='https://wa.me/919967410510' target='_blank' className="whatBtn">Chat with Us</a>
                            <h4>Contact Us →</h4>
                        </div>
                    </div>
                    <div className="about-services">
                        <h1>Services</h1>
                        <img className="plumg-img" src={img6} alt="images" />
                        <h6>Our Services are Available all throughout the city.
                            Our Services:-
                            Annual Service Contract
                            Civil Work
                            Plumbing
                            Solar panel
                        </h6>
                        <button className="KnowBtn" type="button">Know More →</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;