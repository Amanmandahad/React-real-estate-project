import React from 'react';
import style from './Home.module.css';
import video1 from '../assets/rmv-26-07-2024 (1).mp4';

const Home = () => {
  return (
    <>
    <div className={style.home} id='Home'>
      <video src={video1} autoPlay loop  controls>
      
      </video>
    </div>

</>
  );
}

export default Home;
