import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
  const { filteredData, searchTerm, zoomCardClick } = props;
  return (
    <div className="main">
      <CardList
        filteredData={filteredData}
        searchTerm={searchTerm}
        zoomCardClick={zoomCardClick}
      />
    </div>
  );
};

export default Main;
