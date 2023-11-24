import React, { useState} from 'react';
import '../Styles/Gallery.css';
import imgwoodwork from '../images/2.webp'; //woodwork
import imgconstruct from '../images/4.webp'; //construction
import imgconstruction from '../images/5.webp'; //construction
import imgall from '../images/6.webp'; //all
import imghome from '../images/9.webp'; //house mantainance
import imghouse from '../images/house.webp'; //house mantainance
import imgkitchen from '../images/kitchen.webp'; //interior
import imgpaint from '../images/paint.webp'; //painting
import imginterior from '../images/interior.webp'; //interior

const GalleryPage = () => {
    const [isActive, setActive] = useState(false);
    const [id, setId] = useState(0);
    const [dropFlag, setdropFlag] = useState(false);
    const [type, setCategory] = useState('All');
    const handleClick = (id, category) => {
        setActive(!isActive);
        setId(id);
        setCategory(category);
        setdropFlag(!dropFlag);
    }

    const handleDropdown = () => {
        setdropFlag(!dropFlag);
    }

    const images = [
        {
            src: imghouse,
            width: 320,
            height: 212,
            category: 'House Maintenance',
            class: 'v-stretch',
        },
        {
            src: imgconstruct,
            width: 320,
            height: 174,
            category: 'Construction',
            class: 'big-stretch',
        },
        {
            src: imginterior,
            width: 320,
            height: 212,
            category: 'Interior',
            class: 'v-stretch',
        },
        {
            src: imgwoodwork,
            width: 320,
            height: 174,
            category: 'Woodwork',
            class: 'v-stretch',
        },
        {
            src: imgpaint,
            width: 320,
            height: 174,
            category: 'Painting',
            class: 'v-stretch',
        },
        {
            src: imgconstruction,
            width: 320,
            height: 174,
            category: 'Construction',
            class: 'big-stretch',
        },
        {
            src: imgkitchen,
            width: 320,
            height: 174,
            category: 'Interior',
            class: 'v-stretch',
        },
        {
            src: imghome,
            width: 320,
            height: 174,
            category: 'House Maintenance',
            class: 'big-stretch',
        },
        {
            src: imgall,
            width: 320,
            height: 174,
            category: '',
            class: 'v-stretch',
        },
    ]
    return (
        <>
            <div className='gallery_title'><p>Gallery</p></div>
            <div className='gallery_container'>
                <div className='gallery_area'>
                    <div className='gallery_menu'>
                        <ul className='gallery_ul'>
                            <li onClick={() => handleClick(0, 'All')} className='gallery_li activeClass dropdown_trigger'><p className='dropdown_text'>{type}</p> {!dropFlag ? <i class="fa-solid fa-chevron-down dropdown_icon" onClick={() => { handleDropdown() }}></i> : <i class="fa-solid fa-chevron-up dropdown_icon" onClick={() => { handleDropdown() }}></i>}</li>
                            <div className={dropFlag ? "dropdown_mobile" : "dropdown_mobile_closed"}>
                                <li onClick={() => handleClick(0, 'All')} className='gallery_li'>All</li>
                                <li onClick={() => handleClick(1, 'Construction')} className='gallery_li'>Construction</li>
                                <li onClick={() => handleClick(2, 'House Maintenance')} className='gallery_li'>House Maintenance</li>
                                <li onClick={() => handleClick(3, 'Interior')} className='gallery_li'>Interior </li>
                                <li onClick={() => handleClick(4, 'Woodwork')} className='gallery_li'>Woodwork</li>
                                <li onClick={() => handleClick(5, 'Painting')} className='gallery_li'>Painting</li>
                            </div>
                        </ul>
                        <ul className='gallery_ul1'>
                            <li onClick={() => handleClick(0, 'All')} className={id === 0 ? 'gallery_li activeClass' : 'gallery_li'}>All</li>
                            <li onClick={() => handleClick(1, 'Construction')} className={id === 1 ? 'gallery_li activeClass' : 'gallery_li'}>Construction</li>
                            <li onClick={() => handleClick(2, 'House Maintenance')} className={id === 2 ? 'gallery_li activeClass' : 'gallery_li'}>House Maintenance</li>
                            <li onClick={() => handleClick(3, 'Interior')} className={id === 3 ? 'gallery_li activeClass' : 'gallery_li'}>Interior </li>
                            <li onClick={() => handleClick(4, 'Woodwork')} className={id === 4 ? 'gallery_li activeClass' : 'gallery_li'}>Woodwork</li>
                            <li onClick={() => handleClick(5, 'Painting')} className={id === 5 ? 'gallery_li activeClass' : 'gallery_li'}>Painting</li>
                        </ul>
                    </div>
                    <div className='gallery_images'>
                        {type === 'All' ?
                            images.map(item => (
                                <div className={item.class}><img src={item.src} alt='' loading='lazy'/></div>
                            ))
                            :
                            images.filter(item => item.category.includes(type)).map(item => (
                                <div className={item.class}><img src={item.src} alt='' loading='lazy'/></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>)
}

export default GalleryPage;
