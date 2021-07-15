import React from "react";
import ReactDOM from "react-dom";
import BeerListItem from "./BeerListItem";

describe("BeerListItem Component", () => {
  const beers = [{
    "id": 207,
    "name": "International Arms Race (w/ Flying Dog)",
    "tagline": "Zero IBU Herbal IPA.",
    "first_brewed": "08/2012",
    "description": "The International Arms Race was a new type of battle collaboration between hardcore American craft brewery Flying Dog and BrewDog. Both breweries attempted to brew an IPA with absolutely no hops.",
    "image_url": "https://images.punkapi.com/v2/207.png",
    "abv": 7.5,
    "ibu": 0,
    "target_fg": 1013,
    "target_og": 1069,
    "ebc": 50,
    "srm": 25,
    "ph": 4.4,
    "attenuation_level": 81.1,
    "volume": {
      "value": 20,
      "unit": "litres"
    },
    "boil_volume": {
      "value": 25,
      "unit": "litres"
    },
    "method": {
      "mash_temp": [{
      "temp": {
        "value": 69,
        "unit": "celsius"
      },
      "duration": null
      }],
      "fermentation": {
        "temp": {
        "value": 19,
        "unit": "celsius"
        }
      },
      "twist": "Juniper Berries: 25g at start, Bay Leaves: 2.75g at start, Rosemary: 7.5g at start, Rosemary: 5g at end, Elderflower: 15g at end, Juniper Berries: 25g at end"
    },
    "ingredients": {
      "malt": [{
        "name": "Maris Otter Extra Pale",
        "amount": {
          "value": 6,
          "unit": "kilograms"
        }
      },
      {
        "name": "Caramalt",
        "amount": {
          "value": 0.75,
          "unit": "kilograms"
        }
      },
      {
        "name": "Crystal 150",
        "amount": {
          "value": 0.25,
          "unit": "kilograms"
        }
      }],
      "hops": [{
        "name": "Bay Leaves",
        "amount": {
          "value": 5,
          "unit": "grams"
        },
        "add": "dry hop",
        "attribute": "aroma"
      }],
      "yeast": "Wyeast 1056 - American Ale™"
    },
    "food_pairing": [
      "Rosemary and thyme grilled chicken",
      "Light vegetable and herb soup with toasted rye bread",
      "Earl Grey ice cream with a lavender sauce"
    ],
    "brewers_tips": "Allow the bay leaves to steep in the boil for extra time to extract some bitterness. The bitterness is really important to bring balance to an otherwise sweet beer.",
    "contributed_by": "Sam Mason <samjbmason>"
  }];

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BeerListItem 
        key={0}
        beerName={beers[0].name}
        description={beers[0].description}
        abv={beers[0].abv}
        ibu={beers[0].ibu}
        beerImg={beers[0].image_url}
      />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

