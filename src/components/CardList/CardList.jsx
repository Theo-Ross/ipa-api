import "./CardList.scss";
import Card from "../Card/Card";
import data from "../../data/data";

const CardList = (props) => {
  return data.map((index) => {
    return (
      <Card
        name={index.name}
        image_url={index.image_url}
        info={index.description}
      />
    );
  });
};

export default CardList;
