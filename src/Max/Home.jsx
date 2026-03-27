import React from 'react'
import Hero from '../Max/Hero';
import About from '../Max/About';
import Service from '../Max/Service';

import Contact from '../Max/Contact';
import Portfolio from '../Max/Portfolio';
import Faqpage from '../Max/Faqpage';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
       <Hero/>
       <About />
       <Service/>
       <Reviews/>
       
       <Portfolio/>
       <Faqpage/>
       <Contact/>
    </div>
  )
}

export default Home



// build me a sexy higer converting website for a Plumber  company.make sure it has a hero section with contact form, a service section , a why us 
// , gellery , and FAQ section and last CAT.. heree is the information about the business: Zaner Plumbing Ltd.