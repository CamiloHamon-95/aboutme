import React from 'react';

import './IntroSection.css';


function IntroSection () {
    return (
      <div className='ct-intro'>
        <div className='ct-description'>
          <h1>Hi! I'm <span>Camilo</span>,</h1>
          <h1>I'm a backend developer.</h1>
          <p>
            I find immense joy in building robust and scalable 
            solutions with python's powerful frameworks.
          </p>
          <p>Every line of code i write fuels
            my passion for crafting the backbone of innovative applications.
          </p>
        </div>
        <div className='ct-pizza'>
          <h1>Here goes the pizza.</h1>
        </div>
        
      </div>
    )
  };
  
  export { IntroSection };