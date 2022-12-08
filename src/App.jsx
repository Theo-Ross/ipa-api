import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";
import data from "./data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [abvButton, setAbv] = useState(0);
  const [phButton, setPh] = useState(100);
  const [classicButton, setClassic] = useState(2022);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleOnChange = (event) => {
    if (event.target.innerText === "High ABV over 6.0%") {
      return setAbv(6);
    } else if (event.target.innerText === "Acidic ph over 4") {
      return setPh(4);
    } else if (event.target.innerText === "Classic Range") {
      return setClassic(2010);
    }
  };

  let filteredData = data.filter((beer) => {
    const beerLowerCase = beer.name.toLocaleLowerCase();
    const slicedDate
    return (
      beerLowerCase.includes(searchTerm) &&
      Number(beer.abv) > abvButton &&
      Number(beer.ph) < phButton
      
    );
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">IPAs & APIs</h1>
      </header>

      <div className="app__navbar">
        <Navbar handleInput={handleInput} handleOnChange={handleOnChange} />
      </div>

      <div className="app__main">
        <Main filteredData={filteredData} />
      </div>
    </div>
  );
};

export default App;
