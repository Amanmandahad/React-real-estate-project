import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import style from './Contact.module.css';
import { ImLocation2 } from "react-icons/im";
import { GiCableStayedBridge } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";

const Contact = () => {
  // Animation controls
  const controls = useAnimation();

  // Function to handle animation on scroll
  const handleScrollAnimation = () => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  };

  return (
    <>
      <div className={style.divider}></div>
      <div id='Location' className={style.contact}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-6">
              <motion.div
                className={style.map}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                whileInView={handleScrollAnimation}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.064021181144!2d72.82140540353703!3d18.979547112046262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8e21c5ba91%3A0x93e0b020a99482cd!2sRaheja%20Modern%20Vivarea!5e0!3m2!1sen!2sin!4v1723237679895!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                whileInView={handleScrollAnimation}
                viewport={{ once: true }}
                className={style.heading}
              >
                Location <ImLocation2 />
              </motion.h1>
              <motion.div
                className={style.text}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                whileInView={handleScrollAnimation}
                viewport={{ once: true }}
              >
                <div className={style.textItem}>
                  <h5><GiCableStayedBridge className={style.icon} /> Bandra Worli Sealink</h5>
                  <h5><FaUmbrellaBeach className={style.icon} /> Marine Drive</h5>
                  <h5><MdOutlineLocalAirport className={style.icon} /> Domestic Airport</h5>
                  <h5><MdOutlineLocalAirport className={style.icon} /> International Airport</h5>
                </div>
                <div className={style.textItem}>
                  <h5>6.9km</h5>
                  <h5>7.5km</h5>
                  <h5>17km</h5>
                  <h5>20km</h5>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
