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
        profileImage="https://pbs.twimg.com/media/Fa6K61ZakAUxCEf?format=jpg&name=900x900"
        imageSrc="https://sm.ign.com/t/ign_in/image/b/best-actio/best-action-movies-on-netflix-right-now-september-2022_nccm.960.jpg"
        title="RRR"
        Author="2022,S.S.Rajamouli"
        time="182 minutes"
        Gener="Action,War,Fantasy"
        description="A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage="https://upload.wikimedia.org/wikipedia/en/d/dc/Poster_for_Fistful_of_Vengeance.png"
        imageSrc="https://sm.ign.com/t/ign_in/blogroll/b/best-actio/best-action-movies-on-netflix-right-now-june-2022_grun.960.jpg"
        title="Fistful of Vengeance"
        Author="2022,S.S.Rajamouli"
        time="182 minutes"
        Gener="Action,War,Fantasy"
        description="A revenge mission becomes a fight to save the world from an ancient threat when superpowered assassin Kai tracks a killer to Bangkok."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage="https://i.pinimg.com/564x/b4/a0/6d/b4a06d9bccca7fe0d74abf68bba55da9.jpg"
        imageSrc="https://assets1.ignimgs.com/2020/05/08/tog-01766-2019-05-28-as-rc-1588899208982.jpg"
        title="Old Guard"
        Author="2022,S.S.Rajamouli"
        time="182 minutes"
        Gener="Action,War,Fantasy"
        description="Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal"
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        profileImage="https://m.media-amazon.com/images/I/71jekk-7L+L._AC_UF1000,1000_QL80_.jpg"
        imageSrc="https://rukminim2.flixcart.com/image/850/1000/kph8h3k0/poster/z/z/m/large-netflix-s-extraction-movie-poster-non12x18no1x0192-original-imag3pb38bcpwj6s.jpeg?q=90&crop=false"
        title="Exctraction 2"
        Author="2022,S.S.Rajamouli"
        time="182 minutes"
        Gener="Action,War,Fantasy"
        description="A hardened gun-for-hire's latest mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son"
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
    </div>
  );
}

export default App;
