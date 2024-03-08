// App.js
import React from 'react';
import NetflixCard from './Components/cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

function Cards() {
  return (
    <div>
      <NetflixCard
        profileImage=""
        imageSrc="https://sm.ign.com/t/ign_in/image/b/best-actio/best-action-movies-on-netflix-right-now-september-2022_nccm.960.jpg"
        title="Movie Title 1"
        description="Description of the movie 1."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage=""
        imageSrc="https://example.com/image2.jpg"
        title="Movie Title 2"
        description="Description of the movie 2."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage=""
        imageSrc="https://example.com/image3.jpg"
        title="Movie Title 3"
        description="Description of the movie 3."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage=""
        imageSrc="https://example.com/image4.jpg"
        title="Movie Title 4"
        description="Description of the movie 4."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
    </div>
  );
}

export default App;
