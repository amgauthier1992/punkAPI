import React from "react";
import "./BeerListItem.css";

export default function BeerListItem(props){
  //JSX templates
  let descriptionJSX = props.description;
  let abvJSX = `ABV ${props.abv}%`;
  let ibuJSX = `IBU  ${props.ibu}`;
  
  //null checks for API data
  if(props.description == null){
    descriptionJSX = "No available beer description";
  } 
  if(props.abv == null){
    abvJSX = "No ABV provided";
  }
  if(props.ibu == null){
    ibuJSX = "No IBU provided";
  }

  return (
    <div className="beer-list-item">
      <img className="beer-img" src={props.beerImg} alt={props.beerName}/>
      <h2>{props.beerName}</h2>
      <p className="item-p">Description: {descriptionJSX}</p>
      <div className="beer-metrics">
        <p className="item-p">{abvJSX}</p>
        <p className="item-p">{ibuJSX}</p>
      </div>
    </div>
  );
};

