import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) => {
  const { filteredData } = props;
  return filteredData.map((index) => {
    return (
      <div className="cardlist">
        <Card
          name={index.name}
          image_url={index.image_url}
          description={index.description}
          abv={index.abv}
          ph={index.ph}
        />
      </div>
    );
  });
};

export default CardList;
