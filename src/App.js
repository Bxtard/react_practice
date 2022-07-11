import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>
          Mi primera aplicación
        </h1>
        <p>
        Esta es mi primera aplicación en React, está padrísimo!
        </p>
        </div>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
