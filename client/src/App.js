import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=>{
    fetch('/test').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, []);

  return (
    <div className="App">
      <h1>{initialData.BTC}</h1>
    </div>
  );
}

export default App;
