import React, { useEffect,useState } from 'react';
import Hero from '../Components/Hero/Hero';
import api from '../api/config';
import Template from '../Components/Template/Template';


const Homepage = () => {

  return (
    <div>
      <div>
        <Hero />
      </div>
     <Template/>
    </div>
  )
};

export default Homepage;
