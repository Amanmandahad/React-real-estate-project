import React from 'react'
import style from './Footer.module.css'
import logo from '../assets/logo.png'
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
   <>
    <div className={style.footer}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <img src={logo} alt=""  className='img-fluid'/>
          </div>
          <div className="col-md-4">
          <h2> Disclaimer:-</h2>
          <p> The content is for information purpose only and does not constitute an offer to avail of any services or price. Images used in this website might differ from the actual elevation of the tower/amenities and are used for representation purpose only. This is not an official website and is created for advertisement purpose by an authorized and registered marketing partner with MahaRERA ID Number: A51900032822.</p>
          </div>
          <div className="col-md-4">
            <h2>Address:-</h2>
            <p>25A, Sane Guruji Marg, RTO Colony, Mumbai Central, Mumbai, Maharashtra 400011

Raheja Modern Vivarea Project is Registered With MahaRERA.

North Tower MahaRERA registration No. P51900034289

South Tower MahaRERA registration No. P51900034288</p>
       
       <h4> <FaPhoneAlt/> 9821380019 </h4>
              </div>
        </div>
      </div>
      </div>
      <div className={style.footers}>
        <h3>© All Rights Reserved by owner</h3>
      </div>
   </>
  )
}

export default Footer

