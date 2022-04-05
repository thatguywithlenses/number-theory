import React, {useState} from 'react';
import './App.css';

function App() {
  const [min, setMin]=useState(0);
  const [max, setMax]=useState(10);
  const [rand, setRand]=useState(
    Math.floor(Math.random()*(max-min+1)+min)
  );
  const generateRandom = () =>{
    const randomNum=Math.floor(Math.random()*(max-min+1)+min);
    setRand(randomNum);
  }
  return (
    <div className="App">
        <div className="container">
            <div className='random'>
                <p>random number: <span>{rand}</span></p>
            </div>
            <div className='max-min'>
              <div>
                <p>min:</p>
                <input type="number" value={min} onChange={(e)=>setMin(+e.target.value)}/>
              </div>
              <div>
                <p>max:</p>
                <input type="number" value={max} onChange={(e)=>setMax(+e.target.value)}/>
              </div>
            </div>
              <button onClick={generateRandom}>generate random number</button>
        </div>
    </div>
  );
}

export default App;