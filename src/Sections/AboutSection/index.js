import React from 'react';

import './AboutSection.css';


function AboutSection () {
    return (
      <section  id='about'>
        <div className="general-title">
          <h1>
            About me
            <span>
                Know me
            </span>
          </h1>
        </div>
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
      </section>
    )
  };
  
  export { AboutSection };