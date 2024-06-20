
import { ProjectBox } from './ProjectBox';
import './ProjectsSection.css';
import React from 'react';

function ProjectsSection () {
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
            content='Lorem Ipsu'
            box={false}
          />
          <ProjectBox
            nameImage='image01'
            title='Todo APP with Calendar Integration'
            content='Lorem Ipsu'
            box={true}
          />
          <ProjectBox
            nameImage='image01'
            title='Trasnport IT'
            content='Lorem Ipsu'
            box={false}
          />
          <ProjectBox
            nameImage='image01'
            title='Telemarketing web app video'
            content='Lorem Ipsu'
            box={true}
          />
          <ProjectBox
            nameImage='image01'
            title='Tools from Data Analytics'
            content='Lorem Ipsu'
            box={false}
          />
        </div>
      </section>
    )
  };
  
  export { ProjectsSection };