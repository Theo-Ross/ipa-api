import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvButton, setAbv] = useState(0);
  const [classicButton, setClassic] = useState(2022);
  const [filteredData, setFilteredData] = useState([]);
  const [phButton, setPhButton] = useState(0);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    if (event == "") {
      setSearchTerm("");
    } else {
      setSearchTerm(`beer_name=${cleanInput}&`);
    }
  };

  const handleOnChange = (event) => {
    if (event.target.innerText === "High ABV over 6.0%") {
      return setAbv(6);
    } else if (event.target.innerText === "Acidic ph over 4") {
      return setPhButton(4);
    } else if (event.target.innerText === "Classic Range") {
      return setClassic(2010);
    }
  };

  const getBeers = async (abvResult, classicResult) => {
    const url = `https://api.punkapi.com/v2/beers?${searchTerm}abv_gt=${abvResult}&brewed_before=11-${classicResult}`;
    const result = await fetch(url);
    const beerData = await result.json();
    if (phButton == 4) {
      const phData = beerData.filter((i) => {
        const phBeer = i.ph < 4 && i.ph !== null;
        return phBeer;
      });
      setFilteredData(phData);
    } else setFilteredData(beerData);
  };

  useEffect(() => {
    getBeers(abvButton, classicButton, searchTerm, phButton);
  }, [abvButton, classicButton, searchTerm, phButton]);

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">IPAs & APIs</h1>
      </header>

      <div className="app__navbar">
        <Navbar handleInput={handleInput} handleOnChange={handleOnChange} />
      </div>

      <div className="app__main">
        <Main filteredData={filteredData} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;
