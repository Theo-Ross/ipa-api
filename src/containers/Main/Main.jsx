import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
  const { filteredData } = props;
  return (
    <div className="main">
      <CardList filteredData={filteredData} />
    </div>
  );
};

export default Main;
