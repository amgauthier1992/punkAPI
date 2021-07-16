import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {

  state = {
    beerName: "",  
    beerAbv: 0,
    beerIbu: 0,
    sortType: "none",
    error: null
  };

  handleBeerNameChange = (beerName) => {
    this.setState({ beerName: beerName });
  };

  handleAbvChange = (abv) => {
    this.setState({ beerAbv: parseFloat(abv) });
  };

  handleIbuChange = (ibu) => {
    this.setState({ beerIbu: parseFloat(ibu) });
  };

  handleSortMethod = (sortMethod) => {
    this.setState({ sortType: sortMethod });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let url = "https://api.punkapi.com/v2/beers";
    let params = {};

    //if undefined, assign to empty str, otherwise replace all spaces with underscores 
    let beerName = this.state.beerName == undefined ? "" : this.state.beerName.replace(/ /g, "_");

    if(beerName.trim().length > 0){
      params.beer_name = beerName;
    }

    if(this.state.beerAbv > 0){
      params.abv_lt = this.state.beerAbv;
    }

    if(this.state.beerIbu > 0){
      params.ibu_lt = this.state.beerIbu;
    }
    
    let query = "?" + Object.keys(params)
      .map(key => `${key}=${encodeURIComponent(params[key])}`)
      .join("&");
    
    //if we dont have an empty query string, append params to our url
    if(query !== "?"){
      url += query;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      }
    })
      .then(res => {
        if(!res.ok){
          throw new Error("Unable to obtain beer information.");
        }
        return res.json();
      })
      .then(beers => {
        //if a sorting filter is applied, we need to sort the beers
        if(this.state.sortType !== "none"){
          this.props.sortBeers(this.state.sortType, beers);
        } else {
          //otherwise, don"t sort, just update our beers array with the unsorted results
          this.props.updateBeers(beers);
        }
      })
      .catch(err => {
        this.setState({ error: err.message });
      })
  };

  render(){
    const { beerName, beerAbv, beerIbu, error } = this.state;
    let errorJSX = <></>
    if(error){
      errorJSX = <div id="form-error">Error: {this.state.error}</div>
    }
    return (
      <form id="beer-search-form" onSubmit={(e) => this.handleSubmit(e)}>
        <h1 id="form-header">Brewdog Beer Catalog</h1>
        <label htmlFor="beer-name">Beer name:</label>
        <input 
          id="beer-name" 
          className="beer-search-input"
          name="beer-name"
          type="text"
          value={beerName} 
          onChange={(e) => this.handleBeerNameChange(e.target.value)} 
          placeholder="" 
        />
        <label htmlFor="beer-abv">ABV:</label>
        <input 
          id="beer-abv" 
          className="beer-search-input"
          name="beer-abv"
          type="number"
          value={beerAbv} 
          step="0.1"
          min="0"
          max="100"
          onChange={(e) => this.handleAbvChange(e.target.value)} 
          placeholder="x.x" 
        />
        <label htmlFor="beer-ibu">IBU:</label>
        <input 
          id="beer-ibu" 
          className="beer-search-input"
          name="beer-ibu"
          type="number"
          value={beerIbu} 
          step="0.1"
          min="0"
          max="3000"
          onChange={(e) => this.handleIbuChange(e.target.value)} 
          placeholder="xxx.x" 
        />
        <label id="sortTypes" htmlFor="beer-sortTypes">Sort By:</label>
        <select id="sort-select" name="sortTypes" onChange={(e) => this.handleSortMethod(e.target.value)}>
          <option value="none">None</option>
          <option value="byName">Name</option>
          <option value="byAbv">ABV</option>
          <option value="byIbu">IBU</option>
        </select>
        <button className="beer-search-btn" type="submit" aria-label="Search">Search</button>
        {errorJSX}
      </form>
    );
  };
};

export default SearchForm;
