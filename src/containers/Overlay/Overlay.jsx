import React from "react";
import "./Overlay.scss";
import ZoomCard from "../../components/ZoomCard/ZoomCard";

const Overlay = ({ zoomFilter }) => {
  //   return zoomFilter.map((i) => {
  return (
    <div>
      <ZoomCard
        name={zoomFilter.name}
        image_url={zoomFilter.image_url}
        description={zoomFilter.description}
        abv={zoomFilter.abv}
        ph={zoomFilter.ph}
      />
    </div>
  );
};

export default Overlay;
