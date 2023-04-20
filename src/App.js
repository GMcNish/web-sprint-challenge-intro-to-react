import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import Character from './components/Character';



const App = () => {
const [character, setCharacter] = useState([])
useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
  .then(res => {
    setCharacter(res.data);
  })
}, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <Character character={character}/>
      </div>
  );
}

export default App;
