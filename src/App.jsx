import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">IPAs & APIs</h1>
      </header>

      <div className="app__navbar">
        <Navbar handleInput={handleInput} searchTerm={searchTerm} />
      </div>

      <div className="app__main">
        <Main />
      </div>
    </div>
  );
};

export default App;
