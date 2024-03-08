import cards from './cards.css'
import React from 'react';

function NetflixCard({ imageSrc, title, description, shareIcon, favoriteIcon, commentIcon,profileImage }) {
  return (
      <div className='netflix-card'>
          <div className='content'>
              <div className='profile'>
                  <div class="text">
                  
                      <img src={profileImage} alt={title}></img>
                      <div class="description">
                  <h2 className="netflix-card-title">{title}</h2></div>
                  <p className="netflix-card-description">{description}</p>
                  </div><div className='icons'>
                       <span className="netflix-card-icon"><i class="fa-solid fa-share"></i></span>
          <span className="netflix-card-icon"><i class="fa-solid fa-heart"></i></span>
          <span className="netflix-card-icon"><i class="fa-solid fa-message"></i></span>
                  </div>
              </div>
              <div className='image'>
                   <img src={imageSrc} alt={title} className="netflix-card-image" />
                  
              </div>
          </div>

      </div>
  );
}

export default NetflixCard;
