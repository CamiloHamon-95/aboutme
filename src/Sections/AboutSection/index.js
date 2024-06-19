import { ImageComponent } from '../../ImageComponent';
import { AboutBox } from './AboutBox';
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
        <div className='about-ct'>
          <ImageComponent 
            nameImage = 'image-about'
          />
          <div className='about-text'>
            <AboutBox
              title='Summary'
              text="I'm Camilo, a Web Developer with 2 years of experience,
              passionate about technology and continuous learning. I find immense joy in building robust and scalable solutions with python's 
              powerful frameworks. Every line of code i write fuels my passion 
              for crafting the backbone of innovative applications."
            />

            <AboutBox
              title='Goals'
              text="Although I haven't yet obtained a professional degree, 
              I am dedicated to achieving this goal and certifying my English proficiency in the near future. 
              These are my two most immediate professional objectives, and I am working hard to achieve them."
            />

            <AboutBox
              title='Values'
              text="I love teaching and sharing my knowledge, We all have our own learning pace, 
              and I know that empathy and listening are crucial for success in providing effective training or teaching new skills to others."
            />
            
            <AboutBox
              title='Hobbies'
              text="I find immense pleasure in the act of play any kind of sport, 
              especially chess, which has taught me to think strategically and make informed decisions under pressure."
            />

            <AboutBox
              title='Aspirations'
              text="My greatest desire is to contribute significantly to the company that hires me, 
              bringing my skills and dedication to achieve collective goals. At the same time,
              I want this company to be part of my personal project of professional growth and self-improvement."
            />
          </div>
        </div>
      </section>
    )
  };
  
  export { AboutSection };