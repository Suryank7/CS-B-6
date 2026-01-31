import React from 'react'
import "./ICard.css";

function ICard({data}){
  return (
    <div className="container">
      <img src={data.pic} alt={data.name} width="120px" />
      <h2>Name: {data.name}</h2>
      <h2>Branch: {data.Branch}</h2>
      <h2>Roll: {data.Roll}</h2>
      <h2>Section: {data.Section}</h2>
    </div>
  );
}

export default ICard