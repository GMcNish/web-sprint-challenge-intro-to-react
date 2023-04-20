import React from "react";
// Write your Character component here

const Character = ({character}) => {
  return (
  character.map((item) => <div>{item.name}</div>)
  )
}

export default Character;
