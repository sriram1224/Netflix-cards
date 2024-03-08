// NetflixCard.js
import React from 'react';

function NetflixCard({ imageSrc, title, description, shareIcon, favoriteIcon, commentIcon }) {
  return (
      <div className='netflix-card'>
          <div className='content'>
              <div className='profile'>
                  <h2 className="netflix-card-title">{title}</h2>
                  <p className="netflix-card-description">{description}</p>
                  <div>
                       <span className="netflix-card-icon">{shareIcon}</span>
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
