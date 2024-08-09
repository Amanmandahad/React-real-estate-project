import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from './Overview.module.css';
import overimg from '../assets/Overviewimg.jpeg';

const Overview = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={style.view} id='overview'>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <motion.div
            ref={ref1}
            className="col-lg-6 col-md-6"
            style={{ marginTop: '30px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
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
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={overimg}
              alt=""
              className='img-fluid'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
