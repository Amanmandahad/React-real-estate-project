import React, { useState } from 'react';
import style from './Header.module.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { MdArrowUpward } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  const [menuopen, setOpen] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setOpen(!menuopen);
  };

  return (
    <>
      <header className={style.container}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className={`${style.navList} ${menuopen ? style.menuOpen : ''}`}>
            <li><Link to='Home' smooth={true}>Home</Link></li>
            <li><Link to='features' smooth={true}>Features</Link></li>
            <li><Link to='price' smooth={true}>Price</Link></li>
            <li><Link to='overview' smooth={true}>Overview</Link></li>
            <li><Link to='Location' smooth={true}>Location</Link></li>
          </ul>
        </nav>
      
          <button className={style.btn}><i className="bi bi-telephone-fill"></i> Enquire Now</button>
          <button className={style.menuToggle} onClick={toggleMenu}>
          <i className={`bi bi-list ${menuopen? 'bi-x' : 'bi-menu'}`}></i>
          </button>
       
      </header>
      <div className={style.styles}>
        <MdArrowUpward className={style.icon} onClick={scrollUp} />
        <IoLogoWhatsapp className={style.icon} style={{ backgroundColor: "green" }} />
      </div>
    </>
  );
};

export default Header;
