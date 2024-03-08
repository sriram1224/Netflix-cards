// NetflixCard.js
import React from 'react';

function NetflixCard({ imageSrc, title, description, shareIcon, favoriteIcon, commentIcon }) {
  return (
      <div className='netflix-card'>
          <div className='content'>
              <div className='profile'>
                  <h2 className="netflix-card-title">{title}</h2>
                  <p className="netflix-card-description">{description}</p>
              </div>
              <div className='image'>
                   <img src={imageSrc} alt={title} className="netflix-card-image" />
                  
              </div>
          </div>

      </div>
  );
}

export default NetflixCard;
