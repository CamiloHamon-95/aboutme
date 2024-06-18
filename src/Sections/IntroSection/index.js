import profilePhoto from '../../images/main_profile.png';

import React from 'react';

import './IntroSection.css';


function IntroSection () {
    return (
      <section className='ct-intro' id='presentation'>
        <div className='ct-description'>
          <h1>Hi! I'm <span>Camilo</span>,</h1>
          <h2>I'm a backend developer.</h2>
          <p>
            I find immense joy in building robust and scalable 
            solutions with python's powerful frameworks.
          </p>
          <p>Every line of code i write fuels
            my passion for crafting the backbone of innovative applications.
          </p>
        </div>
        <div className='ct-photo'>
          <div className='photo-frame'>
            <img src={profilePhoto} alt="Logo" />
          </div>
        </div>
      </section>
    )
  };
  
  export { IntroSection };