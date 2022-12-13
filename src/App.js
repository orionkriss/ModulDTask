import logo from "./logo.svg";
import "./App.css";
import "./components/orionComponents";
import MainContentOrion from "./components/orionComponents";
import BeanInfo from "./components/ContentComp1";
import StateButton from "./components/StateButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check below, scroll down!</p>
        <a
          className="App-link"
          href="https://twitter.com/funnyordie/status/1164640228826480640"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't click me!!!
        </a>
      </header>
      <body>
        <MainContentOrion />
        <BeanInfo />
        <StateButton />
      </body>
    </div>
  );
}

export default App;
