import React,{useEffect} from 'react'
import '../../Styles/Rcards.css'

export default function Cards1(props) {

  useEffect(()=>{

    const observer1 = new IntersectionObserver((entries)=>{
      entries.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add('animatepops');
        }
      });
    });

    const observer2 = new IntersectionObserver((entries)=>{
      entries.forEach((element) => {
        setInterval(() => {
          if (element.isIntersecting) {
            element.target.classList.add('afteranimatepanel1');
          }
        }, 0);
      });
    });

    let filler =  document.querySelectorAll('.cardspanel');
    let index=0;

    filler.forEach((fill) => 
    {
      if (index<4) {
        observer1.observe(fill)
      }else{
        fill.classList.add('beforeanimatepanel1');
        observer2.observe(fill)
      }
      index++;
    });

  },[])

  return (
    <div className='cardspanel'>
      <img src={props.image} alt="engineering_logo" />
      <div id='cardt'>{props.title}</div>
      <h2>
        {props.price}<br />
        PER SQ FT
      </h2>
    </div>
  )
}