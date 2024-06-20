import { ProjectDescription } from '../ProjectDescription';
import image01 from '../../../images/project01.png';
import './ProjectBox.css';
import React from 'react';

const myImage = (nameImage) => {

  const dicImages = {
    'image01': image01,
    'image02': image01
  }

  return dicImages[nameImage];
};

function ProjectBox ({nameImage, title, content, box}) {
    return (
      <div className={`project-box${box ? '-reverse' : ''}`}>
        <div className='project-description'>
          <ProjectDescription
            title={title}
            content={content}
          />
        </div>
        <div className='project-image'>
          <img src={myImage(nameImage)} alt={nameImage} />
        </div>
      </div>
    )
  };
  
  export { ProjectBox };