import React from 'react';
import '../Styles/services.css';
import {NavLink} from 'react-router-dom';
import rightarrow from '../images/right-arrow2.png'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function services() {
  const centralList = ["Mumbai CST", "Masjid Bunder", "Sandhurst Road", "Byculla", "Chinchpokli", "Currey Road", "Parel", "Dadar", "Matunga", "Sion", "Kurla", "Vidyavihar", "Ghatkopar", "Vikhroli", "Kanjurmarg", "Bhandup", "Nahur", "Mulund", "Thane", "Kalwa", "Mumbra", "Diwa", "Dombivli", "Thakurli", "Kalyan"];
  const harbourList = ["Dockyard Road", "Reay Road", "Cotton Green", "Sewri", "Wadala Road", "King's Circle", "Guru Tegh Bahadur Nagar", "Chunabhatti", "Tilak Nagar", "Chembur", "Govandi", "Mankhurd", "Vashi", "Sanpada", "Juinagar", "Nerul", "Seawoods", "Belapur", "Kharghar", "Mansarovar", "Khandeshwar", "Panvel", "Turbhe", "Kopar Khairane", "Ghansoli", "Airoli"];
  const majorAreas = ["Worli", "Versova", "Swami Vivekananda Road", "Seven Bungalows Andheri", "Saki Naka", "Powai", "Peddar Road", "Nariman Point", "MIDC Andheri", "East Malabar Hill", "Lokhandwala", "Complex Link Road", "LBS Marg", "Four Bungalows Andheri", "Fort", "Cuffe Parade", "CST Road", "Colaba"];
  const westernList = ["Churchgate", "Marine Lines", "Charni Road", "Grant Road", "Mumbai Central", "Mahalaxmi", "Lower Parel", "Elphinstone Road", "Matunga Road", "Mahim", "Bandra", "Khar Road", "Santacruz", "Vile Parle", "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar", "Mira Road", "Bhayandar", "Naigaon", "Vasai Road", "Nala Sopara", "Virar"];

  let redirect =()=>{
    window.location.href="/rates"
  }
  return (
    <>
      <div className="services">
        <div className="rectangle"><h1>OUR SERVICES</h1></div>
        <div className="rec2"></div>
        <div className="rec3"></div>
        <div className="rec4">Annual Service Contract</div>
        <div className="list1">
          <ul className="ul1">
            <li className='scli'>HOUSING SOCIETY</li>
            <li>COMMERCIAL COMPLEXES</li>
            <li>COMMERCIAL OFFICES</li>
            <li>IT PARK</li>
            <li>MALLS</li>
            <li>HOSPITALS</li>
            <li>INSTITUTIONS</li>
            <li>INDUSTRIES</li>
            <li>COLLEGES</li>
            <li>SCHOOLS</li>
            <li>BANQUET HALLS</li>
            <li>RESTAURANTS</li>
            <li>HOTELS</li>
            <li>THEATERS</li>
            <li>LABORATORY</li>
          </ul>
        </div>
        <div className="rec5">Civil Work</div>
        <div className="list2">
          <ul className='ul2'>
            <li>Structural repair and renovation</li>
            <li>RCC work</li>
            <li>Masonry wall and plastering Tiles</li>
            <li>Tiles, Marbles & pavor blocks fixing</li>
          </ul>
        </div>
        <div className="rec6">Coatings and Applications</div>
        <div className="list3">
          <ul className='ul3'>
            <li>Terrace Flooring and Water Proofing</li>
            <li>Painting of Buildings</li>
            <li>Speciality Coatings /Chemical Coatings</li>
          </ul>
        </div>
        <div className="rec7">Plumbing</div>
        <div className="list4">
          <ul className='ul4'>
            <li>PVC Plumbing</li>
            <li>MS Plumbing</li>
            <li>SS Plumbing</li>
            <li>Copper Plumbing</li>
            <li>Fire pump Plumbing</li>
          </ul>
        </div>
        <div className="rec8">More Services</div>
        <div className="list5">
          <ul className='ul5'>
            <li>Solar panel</li>
            <li>Rainwater Harvesting</li>
            <li>Fire Alarm</li>
            <li>Building Cladding</li>
            <li>Electrical repair</li>
          </ul>
        </div>
        <div className="quotationbox2">
        <h2><u style={{color:'white'}}>
          <NavLink to="/Special_Service">
          Checkout Special Sevices
            <img src={rightarrow} style={{width:"2.5rem",'position':'relative' ,'left':"1vw"}} alt="right_arrow" />
          </NavLink>
          </u></h2>
        </div>
        <button className="rateBtn" onClick={redirect}>Click here to Know the Rates ➜</button>
        <div className="singleLine"></div>
        <div className='available'><h1>We are Available at</h1></div>
        <div className='accordian_container'>
        <div className='accordian_left'>
            <Accordion allowZeroExpanded className='accordian_row'>
              <AccordionItem className='accordian_row_col'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    central line <i class="fa-solid fa-chevron-down accordion_icon"></i>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordian_list1 accordian_list'>
                    <ul className='accordian_list_ul'>{centralList.slice(0, 10).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{centralList.slice(10, 20).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{centralList.slice(20,).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                  <div className='accordian_list2 accordian_list'>
                    <ul className='accordian_list_ul'>{centralList.slice(0, 13).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{centralList.slice(13).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className='accordian_row_col'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    harbour line <i class="fa-solid fa-chevron-down accordion_icon"></i>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordian_list accordian_list1'>
                    <ul className='accordian_list_ul'>{harbourList.slice(0, 10).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{harbourList.slice(10, 20).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{harbourList.slice(20,).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                  <div className='accordian_list accordian_list2'>
                    <ul className='accordian_list_ul'>{harbourList.slice(0, 13).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{harbourList.slice(13).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='accordian_right'>
            <Accordion allowZeroExpanded className='accordian_row'>
              <AccordionItem className='accordian_row_col'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    western line <i class="fa-solid fa-chevron-down accordion_icon"></i>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordian_list accordian_list1'>
                    <ul className='accordian_list_ul'>{westernList.slice(0, 10).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{westernList.slice(10,20).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{westernList.slice(20,).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                  <div className='accordian_list accordian_list2'>
                    <ul className='accordian_list_ul'>{westernList.slice(0, 14).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{westernList.slice(14).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className='accordian_row_col'>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    major areas <i class="fa-solid fa-chevron-down accordion_icon"></i>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='accordian_list accordian_list1'>
                    <ul className='accordian_list_ul'>{majorAreas.slice(0, 9).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{majorAreas.slice(9,20).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{majorAreas.slice(20,).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                  <div className='accordian_list accordian_list2'>
                    <ul className='accordian_list_ul'>{majorAreas.slice(0, 9).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                    <ul className='accordian_list_ul'>{majorAreas.slice(9).map((item) => { return <li className='accordian_list_li'>{item}</li> })}</ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        

      </div>

    </>
  )
}

export default services
