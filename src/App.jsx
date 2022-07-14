import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  const [count, setCount] = useState(0);
  const add = () =>{
    setCount(count+1);
  }
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={add}>
        Incrementa
      </button>
    </div>
  );
}

export default App;
