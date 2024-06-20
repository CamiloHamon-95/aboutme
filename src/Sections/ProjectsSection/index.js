
import { ProjectBox } from './ProjectBox';
import './ProjectsSection.css';
import React from 'react';

function ProjectsSection () {

  const texto=`
  I'm Camilo, a Web Developer with 2 years of experience, 
  passionate about technology and continuous learning. 
  I find immense joy in building robust and scalable 
  solutions with python's powerful frameworks. 
  Every line of code i write fuels my passion for 
  crafting the backbone of innovative applications.
  `;

  return (
    <section  id='projects'>
      <div className="general-title">
        <h1>
          Projects
          <span>
              Showcase
          </span>
        </h1>
      </div>
      <div className='ct-project'>
        <ProjectBox
          nameImage='image01'
          title='Ecommerce Project'
          content={texto}
          box={false}
        />
        <ProjectBox
          nameImage='image01'
          title='Todo APP with Calendar Integration'
          content={texto}
          box={true}
        />
        <ProjectBox
          nameImage='image01'
          title='Trasnport IT'
          content={texto}
          box={false}
        />
        <ProjectBox
          nameImage='image01'
          title='Telemarketing web app video'
          content={texto}
          box={true}
        />
        <ProjectBox
          nameImage='image01'
          title='Tools from Data Analytics'
          content={texto}
          box={false}
        />
      </div>
    </section>
  )
};
  
export { ProjectsSection };