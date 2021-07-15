import React from "react";
import "./BeerList.css";
import BeerListItem from "../BeerListItem/BeerListItem";

class BeerList extends React.Component {
  render(){
    const beers = this.props.beerList;
    let nullResultsJSX = <></>

    //if we have no beer results, display a meaningful message to the user
    if(beers.length === 0){
      nullResultsJSX = <div id="null-results">Sorry, No results found with the specified criteria.</div>
    }

    return (
      <div className="beer-list-container">
        {beers.map((beer, i) => 
          <BeerListItem 
            key={i}
            beerName={beer.name}
            description={beer.description}
            abv={beer.abv}
            ibu={beer.ibu}
            beerImg={beer.image_url}
          />
        )}
        {nullResultsJSX}
      </div>
    );
  };
};

export default BeerList;