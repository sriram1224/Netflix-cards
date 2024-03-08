import 

function () {

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
    }
function     
export default cards;