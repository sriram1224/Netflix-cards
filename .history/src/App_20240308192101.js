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
        imageSrc="https://example.com/image1.jpg"
        title="Movie Title 1"
        description="Description of the movie 1."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      {/* Add more NetflixCard components here */}
    </div>
  );
}

export default App;
