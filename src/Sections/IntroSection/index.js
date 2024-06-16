import React from 'react';

import './IntroSection.css';


function IntroSection () {
    return (
      <div className='ct-intro'>
        <div className='ct-description'>
          <h1>Hi! I'm <span>Camilo</span>,</h1>
          <h1>I'm a backend developer.</h1>
          <h1 className='animated-text'>Working to be <span></span></h1>
        </div>
        <div className='ct-pizza'>
          <h1>Here goes the pizza.</h1>
        </div>
        
      </div>
    )
  };
  
  export { IntroSection };