import React from 'react'
import style from './Contact.module.css'
const Contact = () => {
  return (
   <>
    <div className={style.divider}>
        
        </div>
    <div id='contact' className={style.contact}>
       <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-5 col-md-6">
           <div className={style.map} >
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.064021181144!2d72.82140540353703!3d18.979547112046262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8e21c5ba91%3A0x93e0b020a99482cd!2sRaheja%20Modern%20Vivarea!5e0!3m2!1sen!2sin!4v1723237679895!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
            </div>
            <div className="col-lg-5 col-md-6">
            <div className={style.form}>
             <h1>Contact us</h1>
             <div>
             <input type="text" name='name' placeholder='Enter your Name' />
             <input type="text" name='lastname' placeholder='Enter your Last Name' />
             </div>
             <div>
             <input type="email" name='email' placeholder='Enter your Email address' />
             <input type="number" name='number' placeholder='Enter your Number' />
             </div>
             <textarea name="textarea" placeholder='Enter your Message'></textarea>
             <button>Submit</button>
            </div>
            </div>
        </div>
       </div>
      
    </div>
    </>
  )
}

export default Contact
