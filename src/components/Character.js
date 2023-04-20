import React from "react";
import styled from "styled-components";
// Write your Character component here

const HeaderHTwo = styled.h2`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`

const Character = ({character}) => {
  return (
  character.map((item) => 
  <HeaderHTwo>{item.name} </HeaderHTwo>
  )
  )
}

export default Character;
