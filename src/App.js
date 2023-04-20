import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import Character from './components/Character';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
`

const HeaderHOne = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const App = () => {
const [character, setCharacter] = useState([])
useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
  .then(res => {
    setCharacter(res.data);
  })
}, [])


  return (
    <AppDiv>
      <HeaderHOne>Characters</HeaderHOne>
      <Character character={character}/>
        
    </AppDiv>
  );
}

export default App;
