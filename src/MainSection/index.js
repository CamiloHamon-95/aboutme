import React from 'react';
import './MainSection.css';

function MainSection ({theme}) {
  return (
    <main className={`main theme-${theme}`}>
        <section id='presentation'>
          <h1>Hi! I'm <span>Camilo</span>,</h1>
          <h1>I'm a backend developer.</h1>
        </section>
        <section  id='skills'>
          <h1>Skills</h1>
        </section>
        <section  id='projects'>
          <h1>Projects</h1>
        </section>
        <section  id='about-me'>
          <h1>About</h1>
        </section>
        <section  id='contact'>
          <h1>Contact</h1>
        </section>
    </main>
  )
};

export { MainSection };
