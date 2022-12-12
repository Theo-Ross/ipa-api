import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
  const { filteredData, searchTerm } = props;
  return (
    <div className="main">
      <CardList filteredData={filteredData} searchTerm={searchTerm} />
    </div>
  );
};

export default Main;
