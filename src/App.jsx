import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";
import data from "./data/data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredData = data.filter((beer) => {
    const beerLowerCase = beer.name.toLocaleLowerCase();
    return beerLowerCase.includes(searchTerm);
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">IPAs & APIs</h1>
      </header>

      <div className="app__navbar">
        <Navbar handleInput={handleInput} />
      </div>

      <div className="app__main">
        <Main filteredData={filteredData} />
      </div>
    </div>
  );
};

export default App;
