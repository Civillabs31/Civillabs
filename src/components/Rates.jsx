import React from 'react'
import {NavLink} from 'react-router-dom';
import rightarrow from '../images/right_arrow.png'
import Cardinfo from "../components/Rates/Cardinfo";
import Cards1 from './Rates/Cards1'
import engineering from '../images/engineering.png'
import waterproof from '../images/waterproof.png'
import paintbrush from '../images/paintbrush.png'
import '../Styles/Rates.css'
import '../Styles/Contact.css'

export default function Rates() {

  return (
    <div className='ratespage'>
      <div className="contactpanel" style={{background:'rgb(254, 193, 25)'}}>
        <div className="panelholder">RATES</div>
        <div className="layers"></div>
      </div>

      <div className="cardsgrid">
        
        <div className="row1">
          <h2 id='crates'>Rates: Civil</h2>
          <div className="cards">
            <Cards1 title={Cardinfo[0][0].title} price={Cardinfo[0][0].price} image={engineering}/>
            <Cards1 title={'BREAKING OF OLD PLASTER AND REMOVING DEBRIS'} price={'RS. 9/-'} image={engineering}/>
            <Cards1 title={'POLYMER CEMENT MORTAR REPAIR'} price={'RS. 130/-'} image={engineering}/>
          </div>
          <div className='cards'>
            <Cards1 title={'DOUBLE COAT FINE PLASTER'} price={'RS. 90/-'} image={engineering}/>
          </div>
        </div>

        <div className="row1">
          <h2 id='crates'>Rates: Painting</h2>
          <div className="cards">
            <Cards1 title={'CLEANING AND CRACK FILLING WITH SPECIAL CRACK FILL'} price={'RS. 20/-'} image={paintbrush}/>
            <Cards1 title={'EXTERNAL WATERPROOF CHEMICAL COATING :- (ASIAN PAINTS DAMPROOF)'} price={'RS. 16/-'} image={paintbrush}/>
            <Cards1 title={'ERECTION OF BAMBOO SCAFOLDING'} price={'RS. 4/-'} image={paintbrush}/>
          </div>
        </div>

        <div className="row1">
          <h2 id='crates'>Rates: Terrace Water Proofing & External Painting</h2>
          <div className="cards">
            <Cards1 title={'MEMBRANE WATERPROOF (7 YRS SERVICE GUARANTEE)'} price={'RS. 75/-'} image={waterproof}/>
            <Cards1 title={'CHEMICAL COATING (2 YEARS SERVICE GUARANTEE)'} price={'RS. 35/-'} image={waterproof}/>
            <Cards1 title={'ASIAN PAINTS APEX'} price={'RS. 16/-'} image={waterproof}/>
          </div>
          <div className="cards">
            <Cards1 title={'ASIAN PAINTS APEX ULTIMA'} price={'RS. 18/-'} image={waterproof}/>
            <Cards1 title={'ASIAN PAINTS ULTIMA PROTEK'} price={'RS. 2/-'} image={waterproof}/>
          </div>
          <h5>*Rates applicable as on 2021</h5>
        </div>

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
  )
}
