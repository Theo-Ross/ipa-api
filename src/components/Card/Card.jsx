import "./Card.scss";
import data from "../../data/data";

const Card = ({ name, image_url, description, abv, ph }) => {
  const textShortener = description.substring(0, 100) + " ...";

  return (
    <div className="card">
      <img src={image_url} alt="beer image" className="card__image" />
      <h2 className="card__h2">{name}</h2>
      <p className="card__info"> {textShortener}</p>
      <p>abv: {abv}</p>
      <p>ph: {ph}</p>
    </div>
  );
};

export default Card;
