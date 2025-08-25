import React from 'react'
import Hero from '../Max/Hero';
import About from '../Max/About';
import Service from '../Max/Service';
import Skills from '../Max/Skils';
import Contact from '../Max/Contact';
import Resume from '../Max/Resume';
import Portfolio from '../Max/Portfolio';
import Faqpage from '../Max/Faqpage';

const Home = () => {
  return (
    <div>
       <Hero/>
       <About />
       <Service/>
       <Resume/>
       <Faqpage/>
       <Portfolio/>
       <Skills />
       <Contact/>
    </div>
  )
}

export default Home