import React from "react";
import "./App.css";
import SearchForm from "./SearchForm/SearchForm";
import BeerList from "../components/BeerList/BeerList";

class App extends React.Component {

  state = {
    beers: [],
    error: null
  };

  //fetch all beers on initial load
  componentDidMount = () => {
    fetch(`https://api.punkapi.com/v2/beers/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => {
        if(!res.ok){
          throw new Error("Something went wrong. Please try again later.");
        }
        return res.json();
      })
      .then(beers => {
        this.setState({ beers });
      })
      .catch(err => {
        this.setState({ error: err.message });
      })
  };

  //filter results specified by user action
  updateBeers = (beerResults) => {
    this.setState({ beers: beerResults });
  };

  sortBeers = (sortType, beers) => {
    let sortedBeers = [];
    switch (sortType){
      case "byName": 
        sortedBeers = beers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "byAbv":
        sortedBeers = beers.sort((a,b) => a.abv - b.abv);
        break;
      case "byIbu":
        sortedBeers = beers.sort((a,b) => a.ibu - b.ibu);
        break;
    };
    this.setState({ beers: sortedBeers })
  };

  render(){
    return (
      <div className="App">
        <SearchForm updateBeers={this.updateBeers} sortBeers={this.sortBeers}/>
        <BeerList beerList={this.state.beers}/>
      </div>
    );
  };
};

export default App;
