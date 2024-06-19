import profilePhoto from '../images/main_profile.png';
import React from 'react';
import './ImageComponent.css';

const myImage = (nameImage) => {

  const dicImages = {
    'image-home': profilePhoto,
    'image-about': profilePhoto
  }

  return dicImages[nameImage];
};


function ImageComponent ({nameImage}) {
  return (
    <div className='ct-photo'>
      <div className='photo-frame'>
        <img src={myImage(nameImage)} alt={nameImage} />
      </div>
    </div>
  )
};

export { ImageComponent };
