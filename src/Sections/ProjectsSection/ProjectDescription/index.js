import { TodoIcon } from '../../../TodoIcon';
import './ProjectDescription.css';
import React from 'react';

function ProjectDescription ({title, content}) {

  // const clickProject = (nameProject) => {
  //   const actions = {
  //       github: () => {
  //         window.open('https://github.com/CamiloHamon-95/running-data-analyst','_blank');
  //       },
  //       linkedin: () => {
  //         window.open('https://linkedin.com/in/camilohamon95/', '_blank');
  //       },
  //       youtube: () => {
  //           window.open('https://www.youtube.com/@CamiloHamon', '_blank');
  //       },
  //       cv: () => {
  //           window.open('https://drive.google.com/file/d/1PJoLgPK1nPgGZiecsXPufKBPLolpgXze/view?usp=sharing', '_blank');
  //       }
  //   };

  //   if (actions[nameProject]) {
  //       actions[nameProject]();
  //   }
  // };

  return (
    <div className='ct-project-description'>
      <h2>{title}</h2>
      <div className='project-text-and-link'>
        <p>{content}</p>
        <div className='ct-project-links'>
          <a href='https://www.google.com/'>
            <span>Visit the project</span>
          </a>
          <div className='svg-icon-project'
            onClick={() => window.open('https://github.com/CamiloHamon-95/running-data-analyst','_blank')}
          >
            <TodoIcon
              type='youtube'
            />
          </div>
          <div className='svg-icon-project'
            onClick={() => window.open('https://github.com/CamiloHamon-95/running-data-analyst','_blank')}
          >
            <TodoIcon
              type='github'
            />
          </div>
        </div>
      </div>
    </div>
  )
};
  
export { ProjectDescription };