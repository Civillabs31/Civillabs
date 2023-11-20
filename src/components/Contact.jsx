import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Contact.css'
import map from '../images/map.png'
import mailb from '../images/mailb.png'
import phone from '../images/phone.png'
import envelope from '../images/envelope.png'
import close from '../images/close.png'
import '../Styles/Contact-Popup.css'

function Contact() {
    const[values,setvalues]=useState({
        name:'',
        email:'',
        phone:'',
        message:'',
        modal:false
    })
    let checkbox=document.getElementById("correct");

    const Designmodal=()=>{
        return (
          <>
          <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <h3>Thank You</h3>
                <p>
                  Your Message has been sent Successfully. We will <br />
                  reach out to you shortly. <br /><br />
                  <img src={envelope} alt="mail" width={'31px'} />
                </p>
                <img src={close} className="close-modal" onClick={()=> setvalues({...values,['modal']:!values.modal})} alt='envelope' />
              </div>
            </div>
          </>
        )
    }

    let ChangeListener=(event)=>{
        let name = event.target.name;
        let value = event.target.value;

        setvalues({...values,[name]:value});
    }

    let toaster = (message) =>{
        toast.error(message, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    }

    let Submit=async()=>{
        try {
            if (checkbox.checked) {
                if (values.phone.length==10) {
                    let time=new Date();
    
                    let response = await fetch('https://sheetdb.io/api/v1/g37poy4qnqr48',({
                        method:'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                            data: [
                                {
                                    Name:values.name,
                                    Email:values.email,
                                    Phone:values.phone,
                                    Message:values.message,
                                    Date:`${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`
                                }
                            ]
                        })
                    }))   

                    if (response.status==201 || response.status==200) {
                        setvalues({
                            name:'',
                            email:'',
                            phone:'',
                            message:'',
                            modal:true
                        });
                    }
                }
                else{
                    toaster("Phone Number should consists of only 10 digits")
                }
            }
            else{
                toaster('Please approve the checkbox')
            }
        } catch (error) {
            toaster('Please enter the selected fields')
        }
    }

    if(values.modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <div className='contactpage'>
        <div className="contactpanel">
            <div className="panelholder">CONTACT US</div>
                <div className="layers">
                    <div className="layer1"></div>
                    <div className="layer2"></div>
                    <div className="layer3"></div>
                    <div className="layer4"></div>
                    <div className="layer5"></div>
                    <div className="layer6"></div>
                    <div className="layer7"></div>
                    <div className="layer8"></div>
                </div>
            </div>
            <div className="contactinfodetails">
                <div className="moredetails">
                    <div className="contactinfo">
                        <div className="ic1">
                            <img src={map} alt="map" className='contacticons'/>Address</div>
                        <div className="address1" id='ad0'>
                            <p>Civilabs<br/>
                            <b>Mumbai office</b><br/>
                            72/Shree Ram Nagar , western Express Road,<br/> 
                            vile parle -East, Mumbai -400099.<br/><br/>

                            <b>Thane office</b><br/>
                            B2-304, Ekata safalya, LBS Marg , Castle Mill,<br/>
                            Thane -West ,Pin -400602<br/>
                            </p>
                        </div>
                    </div>
                    <div className="contactinfo">
                        <div className="ic1">
                            <img src={phone} alt="map" className='contacticons'/>
                            Mobile</div>
                        <div className="address1" id='ad1'>
                            <p>9967410510</p>
                        </div>
                    </div>
                    <div className="contactinfo">
                        <div className="ic1">
                            <img src={mailb} alt="map" className='contacticons'/>
                            E - Mail</div>
                        <div className="address1" id='ad2'>info@civillabs.com</div>
                    </div>
                </div>
            </div>

            <div className="contactform">
                <div className="contacttb">
                    <h3>Get in Touch</h3>
                    <input type="text" id='inp1' name='name' placeholder='Name *' value={values.name} onChange={ChangeListener} required />
                    <input type="email" id='inp2' name='email' placeholder='Email ID *' value={values.email} onChange={ChangeListener} required />
                    <input type="number" id='inp3' name='phone' placeholder='Phone Number *' value={values.phone} onChange={ChangeListener} required />
                    <textarea  id="inp4" name='message' cols="30" rows="7" placeholder='Message' value={values.message} onChange={ChangeListener} required ></textarea>
                <div className="acceptance">
                    <p><input type="checkbox" name="correct" id="correct" value="approved" /> I hereby confirm that all details mentioned above are correct</p>
                    <button onClick={Submit}>Submit</button>
                </div>

                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="colored"
                />
                </div>
            </div>
            {values.modal && <Designmodal/>}
    </div>
  )
}

export default Contact
