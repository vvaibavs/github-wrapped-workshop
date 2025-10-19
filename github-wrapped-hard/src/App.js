import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [text, setText] = useState("")

    const change = (event) => {
        setText(event.target.value)
    }
  return (
    <div className="App">
        <h1>Type Something</h1>
      <input onChange={change}></input>

      <div>{text}</div>
    </div>
  );
}

export default App;
