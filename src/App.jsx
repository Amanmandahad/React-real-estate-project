import React from 'react'
import './App.css'
import Header from './componentss/header/Header';
import Home from './componentss/home/Home';
import About from './componentss/about/About';
import Overview from './componentss/overview/Overview';
import Contact from './componentss/contact/Contact';
import Connectivity from './componentss/Conenctivity/Connectivity';
import Footer from './componentss/footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Overview/>
      <Contact/>
     <Connectivity/>
     <Footer/>
    </div>
  )
}

export default App
