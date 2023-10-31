import React from 'react'
import '../Styles/About.css'
import Construction from '../images/construction-blueprint-5200849.webp';
import Logo from '../images/No_Bg_Logo.png';
import Png1 from '../images/excellence.png';
import Png2 from '../images/determination.png';
import Png3 from '../images/resilience.png';
import Png4 from '../images/deal.png';
import Png5 from '../images/report.png';
import Png6 from '../images/people.png';
import Png7 from '../images/project-management.png';
import Png8 from '../images/continuous-improvement.png';
import Png9 from '../images/passion.png';
import Png0 from '../images/accountability.png';

function About() {
  return (
    <>
    <div className="container-us">
    <div className="poster">
      <img className="cimg1" src={Construction} alt="image" />
      <div className="colors">
        <h1 id="ab">ABOUT US</h1>
      </div>
      <img className="logoo2" src={Logo} alt="logo" />
      <div className="box1"></div>
      <div className="circles"></div>
    </div>
    <div className="heading">
      <h1>Mission</h1>
      <p>At civil labs, our mission is to deliver exceptional construction solutions that
        transform visions into reality. Guided by our core values of experience,
        technology, and expertise, we are dedicated to, Exceeding Client Expectations,
        Embracing Innovation, Fostering Expertise, Maintaining Quality</p>
      <div className="line1"></div>
    </div>
    <div className="heading2">
      <h1>Vision</h1>
      <p>To be the unrivaled leaders in the construction industry within our region, known
        for our unwavering commitment to innovation, excellence, and client satisfaction.
        We aspire to reshape skylines, enhance communities, and set new standards of quality
        and efficiency in every project we undertake.</p>
      <div className="line2"></div>
    </div>
    <div className="heading3">
      <h1>Core Values</h1>
      <h4>꧁༺श्रमेणैव परं सिद्धिं༻꧂</h4>

      <h5>(Sramenaiva paraṁ siddhim) - Attain the highest achievement through hard work.</h5>
    </div>
    <div className="about-us">
      <ul className="heaa1">
        <li className="card1" id='exce'>
          <img className="img2" src={Png1} alt="excellence" />
          <h5>Excellence</h5>
          <h6>Striving for the highest standards of performance
            and quality in everything we do.</h6>
        </li>
        <li className="card1" id="deter">
          <img className="img2" src={Png2} alt="determination" />
          <h5>Determination</h5>
          <h6>Demonstrating unwavering resolve and persistence
            in the face of challenges.</h6>
        </li>
      </ul>
    </div>
    <div className="about-us2">
      <ul className="heaa2">
        <li className="card2">
          <img className="img2" src={Png3} alt="resilience" />
          <h5>Resilience</h5>
          <h6>Adapting and bouncing back from setbacks,
            using them as opportunities for growth.</h6>
        </li>
        <li className="card2" id='commit'>
          <img className="img2" src={Png4} alt="deal" />
          <h5>Commitment</h5>
          <h6>Devoting ourselves fully to our goals and objectives,
            even when the path is difficult.</h6>
        </li>
        <li className="card2" id="rep">
          <img className="img2" src={Png5} alt="Integrity" />
          <h5>Integrity</h5>
          <h6>Upholding honesty, ethics, and moral principles
            throughout our journey to success.</h6>
        </li>
      </ul>
    </div>
    <div className="about-us3">
      <ul className="heaa3">
        <li className="card3">
          <img className="img2" src={Png6} alt="people" />
          <h5>Collaboration</h5>
          <h6> Demonstrating unwavering resolve
            and persistence in the face of challenges. </h6>
        </li>
        <li className="card3" id='innova'>
          <img className="img2" src={Png7} alt="innovation" />
          <h5>Innovation</h5>
          <h6> Embracing creative and forward-thinking
            approaches to overcome obstacles and reach new heights.</h6>
        </li>
        <li className="card3" id="con">
          <img className="img2" src={Png8} alt="Continuous" />
          <h5 id="cont">Continuous Improvement</h5>
          <h6>Constantly seeking opportunities to learn, evolve,
            and refine our skills and strategies.</h6>
        </li>
      </ul>
    </div>
    <div className="about-us4">
      <ul className="heaa4">
        <li className="card4">
          <img className="img2" src={Png9} alt="passion" />
          <h5>Passion</h5>
          <h6>Fueled by a deep and enduring enthusiasm for our work
            and the pursuit of excellence.</h6>
        </li>
        <li className="card4" id="acc">
          <img className="img2" src={Png0} alt="accountability" />
          <h5>Accountability</h5>
          <h6>Taking responsibility for our actions and decisions,
            and their impact on our path to success.</h6>
        </li>
      </ul>
    </div>
    <div className="last-line">
      <h6>These core values can guide our organizations in the pursuit of the
        highest achievements through hard work and dedication.</h6>
    </div>
  </div>

    </>
  )
}

export default About
