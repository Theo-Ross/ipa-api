import React from "react";
import "./Overlay.scss";
import ZoomCard from "../../components/ZoomCard/ZoomCard";

const Overlay = ({ zoomFilter, zoomRemove }) => {
  return zoomFilter.map((i) => {
    return (
      <div>
        <ZoomCard
          name={i.name}
          tagline={i.tagline}
          image_url={i.image_url}
          description={i.description}
          zoomRemove={zoomRemove}
          abv={i.abv}
          ph={i.ph}
          ibu={i.ibu}
        />
      </div>
    );
  });
};

export default Overlay;
