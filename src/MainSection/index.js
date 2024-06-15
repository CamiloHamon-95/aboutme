import React from 'react';
import './MainSection.css';

function MainSection ({theme}) {
  return (
    <main className={`main theme-${theme}`}>
        <section id='presentation'>
          <p>Seccion de Presentacion</p>
        </section>
        <section  id='skills'>
          <p>Seccion de skills</p>
        </section>
        <section  id='projects'>
          <p>Seccion de projects</p>
        </section>
        <section  id='about-me'>
          <p>Seccion de about me</p>
        </section>
        <section  id='contact'>
          <p>Seccion de contact</p>
        </section>
    </main>
  )
};

export { MainSection };
