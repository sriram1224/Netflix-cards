

function NetflixCard({ imageSrc, title, description, shareIcon, favoriteIcon, commentIcon }) {
  return (
    <div className="netflix-card">
      <img src={imageSrc} alt={title} className="netflix-card-image" />
      <div className="netflix-card-content">
        <h2 className="netflix-card-title">{title}</h2>
        <p className="netflix-card-description">{description}</p>
        <div className="netflix-card-icons">
          <span className="netflix-card-icon">{shareIcon}</span>
          <span className="netflix-card-icon">{favoriteIcon}</span>
          <span className="netflix-card-icon">{commentIcon}</span>
        </div>
      </div>
    </div>
  );
    }
function cards() {
    <div>
    <NetflixCard
        imageSrc="https://example.com/image1.jpg"
        title="Movie Title 1"
        description="Description of the movie 1."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        imageSrc="https://example.com/image2.jpg"
        title="Movie Title 2"
        description="Description of the movie 2."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        imageSrc="https://example.com/image3.jpg"
        title="Movie Title 3"
        description="Description of the movie 3."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
      <NetflixCard
        imageSrc="https://example.com/image4.jpg"
        title="Movie Title 4"
        description="Description of the movie 4."
        shareIcon={<i className="fa fa-share"></i>}
        favoriteIcon={<i className="fa fa-heart"></i>}
        commentIcon={<i className="fa fa-comment"></i>}
      />
    </div>
}     
export default cards;