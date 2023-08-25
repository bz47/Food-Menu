import Favorites from "./Favorites";
import { Menu } from "./Menu";
import { Cards } from "./Cards";

import { useState } from "react";

import "./App.css";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [array, setArray] = useState([
    {
      text: "Check 123",
      name: "Lahmacun",
      image: "./src/lahmacun.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 456",
      name: "Chicken",
      image: "./src/chicken.webp",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 789",
      name: "Veggies",
      image: "./src/vegan.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Pho",
      image: "./src/pho.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
  ]);

  const handleLike = (card) => {
    console.log(card);
  };

  return (
    <div id="app">
      <h1>Recipes To Try</h1>
      <form className="m-2" action="">
        <div className="row">
          <div className="col-3 ">
            <label className="form-label pt-2" id="searchBar">
              Find A Recipe
            </label>
          </div>
          <div className="col-md-7 col-5">
            <input
              type="text"
              className="form-control"
              id="searchBar"
              placeholder="Search"
            />
          </div>
          <div className="col-sm-1 col-2">
            <button type="submit" className="btn btn-primary" id="searchBtn">
              Search
            </button>
          </div>
        </div>
      </form>
      <Favorites favorite={favorite} />
      <Menu array={array} handleLike={handleLike} />
    </div>
  );
}

export default App;
