import "./App.css";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">IPAs & APIs</h1>
      </header>

      <div className="app__navbar">
        <Navbar />
      </div>

      <div className="app__main">
        <Main />
      </div>
    </div>
  );
};

export default App;
