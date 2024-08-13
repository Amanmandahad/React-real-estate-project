// import React from 'react';
import { motion } from 'framer-motion';
import style from './About.module.css';
import feature1 from '../assets/Feature1img.png';
import feature2 from '../assets/Feature2.png';
import { GiMaterialsScience } from "react-icons/gi";
import feature3 from '../assets/realfeature3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import card1 from '../assests2/card1.jfif'
import card2 from '../assests2/card2.png'
import card3 from '../assests2/card3.jpeg'
import card4 from '../assests2/card4.jpg'
import card5 from '../assests2/card5.png'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 1,
  pauseOnHover: true,
  className: "center",
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" } // Slow transition from right
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeOut" } // Slow transition with easing
};

const About = () => {
  return (
    <>
    

    {/* Features */}
    <div className={style.about} id='features'>
      <motion.div
        style={{ backgroundColor: ' rgb(210, 190, 187)' }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromRight}
        viewport={{ once: true }}
        className={style.features1}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between" >
            <div className="col-lg-5 col-md-6" style={{ marginTop: '40px',marginBottom:'20px' }}>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={fadeInFromRight}
                viewport={{ once: true }}
              >
                <GiMaterialsScience /> Project Features
              </motion.h1>
              <motion.p variants={fadeInFromRight}>Two impeccably designed towers with a stunning façade that will define the city skyline.</motion.p>
              <motion.p variants={fadeInFromRight}>Seamless access to international style luxurious amenities spread across multiple levels – Ground Level, Podium Level and Terrace Level.</motion.p>
              <motion.p variants={fadeInFromRight}>IGBC Green Homes – Pre-certified Gold Rating.</motion.p>
              <motion.p variants={fadeInFromRight}>Large and spacious high-speed elevators.</motion.p>
            </div>
            <div className="col-lg-5 col-md-6" style={{ marginBottom: '30px' }}>
              <motion.img
                src={feature1}
                className='img-fluid'
                alt="Project Feature"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }} // Slow fade-in effect
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ backgroundColor: '#2A2114' }}
        initial="hidden"
        whileInView="visible"
        variants={slideInFromRight}
        viewport={{ once: true }}
        className={style.features2}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6" >
              <motion.img
                src={feature2}
                className='img-fluid'
                alt="Project Feature"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }} // Slow scale-up effect
              />
            </div>
            <div className="col-lg-5 col-md-6" style={{marginBottom:'30px'}}>
              <motion.h1
                style={{ color: 'white' }}
                initial="hidden"
                whileInView="visible"
                variants={fadeInFromRight}
                viewport={{ once: true }}
              >
                <GiMaterialsScience /> Apartment Features
              </motion.h1>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                Spacious 3 and 4 bed residences with combination friendly designs.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                Wide, spacious sundecks to enjoy the beautiful vistas.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                Double-glazed unitised glass that maintains optimum temperature and ensures minimum sound inside the homes.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                 Apartments adorned with the finest marble, false ceiling works and VRF air conditioning.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                Absolute privacy for residents, with separate entry for staff.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
               Palatial 3.8 metre (12.5 ft) floor-to-floor internal apartment height.
              </motion.p>
              <motion.p
                style={{ backgroundColor: '#D7B2AB', color: '#2A2114' }}
                variants={fadeInFromRight}
              >
                Apartments adorned with the finest marble, false ceiling works and VRF air conditioning.
 
              </motion.p>
              
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={style.price}
        id='price'
        initial="hidden"
        whileInView="visible"
        variants={slideInFromRight}
        viewport={{ once: true }}
      >
        <div className="container" id='price'>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6" style={{ marginTop: '30px' }}>
              <motion.h1
                style={{ marginBottom: '10px' }}
                variants={fadeInFromRight}
              >
                Configurations
              </motion.h1>
              <motion.div
                className="table-responsive"
                variants={slideInFromRight}
              >
                <table className="table table-striped table-bordered text-center">
                  <thead>
                    <tr>
                      <th scope="col" className={style.tablefont}>Configuration</th>
                      <th scope="col" className={style.tablefont}>Area (Sq.ft)</th>
                      <th scope="col" className={style.tablefont}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >3bhk</td>
                      <td className={style.tablefont}>1,740 Sq.ft</td>
                      <td >
                        <button className="btn">Click for price</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.tablefont}>3.5bhk</td>
                      <td className={style.tablefont}>2,364 Sq.ft</td>
                      <td>
                        <button className="btn">Click for price</button>
                      </td>
                    </tr>
                    <tr>
                      <td className={style.tablefont}>4bhk</td>
                      <td className={style.tablefont}>2,259 / 3,090 / 3,108 Sq.ft</td>
                      <td>
                        <button className="btn">Click for price</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
            <div className="col-lg-5 col-md-6" style={{ marginBottom: '30px', marginTop: '25px' }}>
              <motion.img
                src={feature3}
                className='img-fluid'
                alt="Project Feature"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }} // Slow scale-up effect
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* Carousel */}
      <div className={style.carosal}>
    <div className={`slider-container ${style.slider}`}>
        <Slider {...settings}>
            <div className={style.cards}>
                <img src={card1} alt="Feature 1" />
            </div>
            <div className={style.cards}>
                <img src={card2} alt="Feature 2" />
            </div>
            <div className={style.cards}>
                <img src={card3} alt="Feature 3" />
            </div>
            <div className={style.cards}>
                <img src={card4} alt="Feature 4" />
            </div>
            <div className={style.cards}>
                <img src={card5} alt="Feature 5" />
            </div>
        </Slider>
    </div>
</div>


    </div>
    </>
  );
}

export default About;
