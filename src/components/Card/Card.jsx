import "./Card.scss";
import data from "../../data/data";

const Card = ({ name, image_url, description }) => {
  return (
    <div className="card">
      <img src={image_url} alt="beer image" className="card__image" />
      <h2 className="card__h2">This is the name of the beer : {name}</h2>
      <p className="card__info">
        This is the information for the beer : {description}
      </p>
    </div>
  );
};

export default Card;
