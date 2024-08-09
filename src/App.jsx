import React from 'react'
import './App.css'
import Header from './componentss/header/Header';
import Home from './componentss/home/Home';
import About from './componentss/about/About';
import Overview from './componentss/overview/Overview';
import Contact from './componentss/contact/Contact';
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Overview/>
      <Contact/>

    </div>
  )
}

export default App
