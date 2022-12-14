import React from "react";
import "../ZoomCard/ZoomCard.scss";

const ZoomCard = ({
  name,
  image_url,
  description,
  abv,
  ph,
  zoomRemove,
  ibu,
  tagline,
}) => {
  return (
    <div className="zoomcard">
      <img src={image_url} alt="beer image" className="zoomcard__image" />
      <h2 className="zoomcard__h2">{name}</h2>
      <p className="zoomcard__tagline" onClick={zoomRemove}>
        "{tagline}"
      </p>
      <p className="zoomcard__info"> {description}</p>

      <p>abv: {abv}</p>
      <p>ph: {ph}</p>
      <p>ibu: {ibu}</p>
    </div>
  );
};

export default ZoomCard;
