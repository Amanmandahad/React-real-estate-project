import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Overview.module.css';
import overimg from '../assets/Overviewimg.jpeg';
import gym from '../assests2/gym1.png';
import swim from '../assests2/swimming.png';
import indooe from '../assests2/indoor.png';
import clubhouse from '../assests2/Clubhouse2.png';
import openair from '../assests2/openair.png';
import jogging from '../assests2/jogging.png';
import sports from '../assests2/sports.png';
import spa from '../assests2/spa.jpg';
import business from '../assests2/buisness.png';
import kids from '../assests2/kidsplay.png';
import hall from '../assests2/hall.png';

const Overview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className={style.view} id='overview'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <motion.div
              ref={ref1}
              className="col-lg-6 col-md-6"
              style={{ marginTop: '30px' }}
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <button>Overview</button>
              <h2>LUXURY HOME</h2>
              <p>
                K Raheja Corp. is a success story spanning four decades and stands today as one of India’s leading developers. From exquisite residences to adaptive workplaces like Mindspace, skillfully created hotels like Chalet and convention centres to outstanding retail destinations like Inorbit Mall, the K Raheja Corp. has made a significant impact on the evolution of modern-day living.
                <br />
                <br />
                K Raheja Corp. delivers aspirational spaces with distinct characteristics and attributes, making each of its offerings unique. The Company has also been ahead of the curve in the green development sector. Pioneering the industries’ responsibility towards contributing to a green society, it signed a memorandum of understanding with the CII-Green Building Council to construct green buildings, back in 2007. Apart from its eco-friendly constructions, K Raheja Corp. is committed to developing large, green expanses across the country. With its buildings certified in the categories of Gold and Platinum, it has been recognized with awards across prestigious forums.
              </p>
            </motion.div>
            <motion.div
              ref={ref2}
              className="col-lg-6 col-md-6"
              style={{ marginTop: '30px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src={overimg}
                alt="Overview"
                className='img-fluid'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Slider */}
      <div className={style.localities}>
        <div className="container">
          <div className="row justify-content-between align-items-center text-center">
            {[
              { img: gym, label: 'Gymnasium', delay: 0 },
              { img: swim, label: 'Swimming Pool', delay: 0.1 },
              { img: indooe, label: 'Indoor Games Area', delay: 0.2 },
              { img: clubhouse, label: 'Clubhouses', delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`col-lg-2 col-md-2 col-sm-2 ${style.skill}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: item.delay }}
              >
                <img src={item.img} className='img-fluid' alt={item.label} />
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <br />
        <br />

        <div className="container">
          <div className="row justify-content-between align-items-center text-center">
            {[
              { img: openair, label: 'Open-Air Amphitheatre', delay: 0 },
              { img: jogging, label: 'Jogging Paths', delay: 0.1 },
              { img: sports, label: 'Multiple Sports Courts', delay: 0.2 },
              { img: spa, label: 'Spa, Salon', delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`col-lg-2 col-md-2 col-sm-2 ${style.skill}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: item.delay }}
              >
                <img src={item.img} className='img-fluid' alt={item.label} />
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <br />
        <br />

        <div className="container">
          <div className="row justify-content-around align-items-center text-center">
            {[
              { img: business, label: 'Business Centre', delay: 0 },
              { img: kids, label: 'Kids Play Area', delay: 0.1 },
              { img: hall, label: 'Banquet Hall', delay: 0.2 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`col-lg-3 col-md-3 col-sm-3 ${style.skill}`}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: item.delay }}
              >
                <img src={item.img} className='img-fluid' alt={item.label} />
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
