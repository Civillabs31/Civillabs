import React from 'react'
import {NavLink} from 'react-router-dom';
import rightarrow from '../images/right_arrow.png'
import '../Styles/Special_Service.css';

function Special_Service() {
  return (
    <>
    <div className="Special_Service">
        <div className="rectangles"><h1>SPECIAL SERVICES</h1></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4">End to End Solutions for All Industrial Buildings</div>
        <div className="lists1">
          <ul className="ull1">
            <li className='scli'>Pipe Coatings</li>
            <li>New Buildings Repair</li>
            <li>Repair of Existing Structures</li>
          </ul>
        </div>
        <div className="rect5">Industrial Buildings</div>
        <div className="lists2">
          <ul className='ull2'>
            <li>Anti-Carbonation Coatings</li>
            <li>Rust Removers and Passivators </li>
            <li>Galvanic Corrosion Protection Systems</li>
            <li>Repair Polymers and Bonding Agends</li>
            <li>Corrosion Protection Systems </li>
            <li>Crack Fillers </li>
            <li>Glass Fibre Wrap Strengthening Systems</li>
            <li>Microconcretes</li>
          </ul>
        </div>
        <div className="rect6">New Buildings</div>
        <div className="lists3">
          <ul className='ull3'>
            <li>Bonding Agents for Tiles/Plaster</li>
            <li>Waterproofing for Podiums</li>
            <li>Waterproofing for External Walls</li>
            <li>Waterproofing for Roofs and Terraces</li>
            <li>Waterproofing Admixtures for Plaster</li>
            <li>External Paints and Texture Finishes</li>
            <li>Waterproofing for Water Retaining</li>
            <li>Structures Waterproofing for Car Parks</li>
          </ul>
        </div>
        <div className="rect7">Repair of Existing Structures</div>
        <div className="lists4">
          <ul className='ull4'>
            <li>Anti-Carbonation Coatings</li>
            <li>Rust Removers and Passivators </li>
            <li>Galvanic Corrosion Protection Systems</li>
            <li>Repair Polymers and Bonding Agends</li>
            <li>Corrosion Protection Systems </li>
            <li>Crack Fillers</li>
            <li>Glass Fibre Wrap Strengthening Systems</li>
            <li>Microconcretes</li>
          </ul>
        </div>
        <div className="rect8">Pipe Coatings</div>
        <div className="lists5">
          <ul className='ull5'>
            <li>Corrosion Protection System for Concrete</li>
            <li>Rust Removers and Passivators  </li>
            <li>Corrosion Protection Coatings (External)</li>
            <li>Hygienic Food Grade Coatings (Internal)</li>
          </ul>
        </div>

        <div className="quotationbox">
        <h2><u style={{color:'black'}}>
          <NavLink to="/contact">
            Get Free Quotation Now 
            <img src={rightarrow} style={{width:"2.5rem",'position':'relative' ,'left':"1vw"}} alt="right_arrow" />
          </NavLink>
          </u></h2>
        </div>
    </div>
       
          
        

    </>
  )
}

export default Special_Service
