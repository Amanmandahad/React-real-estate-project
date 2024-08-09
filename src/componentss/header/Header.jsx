import React from 'react'
import style from './Header.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { MdArrowUpward } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
const Header = () => {

const Scrollup = () =>{
  window.scrollTo({ top: 0, behavior:'smooth' })
}

const contactform = () => {

}
  return (
    <>
    <div className={style.container}>
    <div>
      <img src={logo} alt="" />
    </div>
    <div>
      <ul>
        <li><Link to='about' >About</Link></li>
        <li><Link to='features' >Features</Link></li>
        <li><Link to='overview' >Overview</Link></li>
        <li><Link to='contact' >Contact</Link></li>
        <li><Link to='location' >Location</Link></li>
        <li><Link to='Connectivity' >Connectivity</Link></li>
      </ul>
    </div>
    <div style={{display:'flex', alignItems:'center'}}>
        <button onClick={contactform}> <i className="bi bi-telephone-fill"></i>Enquire Now</button>
      </div>
    </div>
<div className={style.styles}>

<MdArrowUpward className={style.icon} onClick={Scrollup}/>
<IoLogoWhatsapp className={style.icon} style={{backgroundColor:"green"}} />
</div>
    </>
  )
}

export default Header
