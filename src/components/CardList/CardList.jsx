import "./CardList.scss";
import Card from "../Card/Card";
import data from "../../data/data";

const CardList = (props) => {
  return data.map((index) => {
    return (
      <div className="cardlist">
        <Card
          name={index.name}
          image_url={index.image_url}
          description={index.description}
        />
      </div>
    );
  });
};

export default CardList;
