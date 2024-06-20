import { TodoIcon } from '../../../TodoIcon';
import './ProjectDescription.css';
import React from 'react';

function ProjectDescription ({title, content}) {
    return (
      <div className='ct-project-description'>
        <h2>{title}</h2>
        <div className='project-text-and-link'>
          <p>{content}</p>
          <div>
            <a href='https://www.google.com/'>
              <span>Texto de link</span>
              <TodoIcon
                type='youtube'
              />
              <TodoIcon
                type='github'
              />
            </a>
          </div>
        </div>
      </div>
    )
  };
  
  export { ProjectDescription };