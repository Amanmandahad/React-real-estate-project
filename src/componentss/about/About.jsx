import React from 'react';
import { motion } from 'framer-motion';
import style from './About.module.css';
import feature1 from '../assets/Feature1img.png';
import feature2 from '../assets/Feature2.png';
import { GiMaterialsScience } from "react-icons/gi";
import feature3 from '../assets/realfeature3.jpg';

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 10, ease: "easeOut" } // Slow transition from right
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 10, ease: "easeOut" } // Slow transition with easing
};

const About = () => {
  return (
    <>
    <div className={style.carousel} id='about'>

    </div>













    {/* Features */}
    <div className={style.about} id='features'>
      <motion.div
        style={{ backgroundColor: '#D7B2AB' }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromRight}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between" >
            <div className="col-lg-5 col-md-6" style={{ marginTop: '40px' }}>
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
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6">
              <motion.img
                src={feature2}
                className='img-fluid'
                alt="Project Feature"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }} // Slow scale-up effect
              />
            </div>
            <div className="col-lg-5 col-md-6">
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
        <div className="container">
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
                      <th scope="col" style={{ fontSize: '20px' }}>Configuration</th>
                      <th scope="col" style={{ fontSize: '20px' }}>Area (Sq.ft)</th>
                      <th scope="col" style={{ fontSize: '20px' }}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: '18px' }}>3bhk</td>
                      <td style={{ fontSize: '18px' }}>1,740 Sq.ft</td>
                      <td style={{ fontSize: '18px' }}>
                        <button className="btn">Click for price</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: '18px' }}>3.5bhk</td>
                      <td style={{ fontSize: '18px' }}>2,364 Sq.ft</td>
                      <td>
                        <button className="btn">Click for price</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: '18px' }}>4bhk</td>
                      <td style={{ fontSize: '18px' }}>2,259 / 3,090 / 3,108 Sq.ft</td>
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
    </div>
    </>
  );
}

export default About;
