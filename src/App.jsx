import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvButton, setAbv] = useState(0);
  const [classicButton, setClassic] = useState(2023);
  const [filteredData, setFilteredData] = useState([]);
  const [phButton, setPhButton] = useState(0);
  const [abvButtonActive, setAbvButtonActive] = useState(false);
  const [classicButtonActive, setClassicButtonActive] = useState(false);
  const [phButtonActive, setPhButtonActive] = useState(false);
  const [userNumber, setNumberOfUsers] = useState(40);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    if (event == "") {
      setSearchTerm("");
    } else {
      setSearchTerm(`beer_name=${cleanInput}&`);
    }
  };

  const handleInputChange = (event) => {
    setNumberOfUsers(event.target.value);
    console.log(userNumber);
  };

  const handleOnChange = (event) => {
    if (event.target.innerText === "High ABV over 6.0%" && abvButton === 0) {
      setAbvButtonActive(true);
      return setAbv(6);
    } else if (
      event.target.innerText === "High ABV over 6.0%" &&
      abvButton === 6
    ) {
      setAbvButtonActive(false);
      return setAbv(0);
    } else if (
      event.target.innerText === "Acidic ph over 4" &&
      phButton === 0
    ) {
      setPhButtonActive(true);
      return setPhButton(4);
    } else if (
      event.target.innerText === "Acidic ph over 4" &&
      phButton === 4
    ) {
      setPhButtonActive(false);
      return setPhButton(0);
    } else if (
      event.target.innerText === "Classic Range" &&
      classicButton === 2023
    ) {
      setClassicButtonActive(true);
      return setClassic(2010);
    } else if (
      event.target.innerText === "Classic Range" &&
      classicButton === 2010
    ) {
      setClassicButtonActive(false);
      return setClassic(2023);
    }
  };

  const getBeers = async (abvResult, classicResult) => {
    const url = `https://api.punkapi.com/v2/beers?${searchTerm}abv_gt=${abvResult}&brewed_before=11-${classicResult}&per_page=${userNumber}`;
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
    getBeers(abvButton, classicButton, searchTerm, userNumber, phButton);
  }, [abvButton, classicButton, searchTerm, userNumber, phButton]);

  return (
    <div>
      <header className="app__greeting">
        <h1 className="app__greeting--heading">IPAs & APIs</h1>
      </header>
      <div className="app">
        <div className="app__navbar">
          <Navbar
            handleInput={handleInput}
            handleOnChange={handleOnChange}
            abvButtonActive={abvButtonActive}
            phButtonActive={phButtonActive}
            classicButtonActive={classicButtonActive}
            handleInputChange={handleInputChange}
          />
        </div>

        <div className="app__main">
          <Main filteredData={filteredData} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default App;
