import Favorites from "./Favorites";
import { Menu } from "./Menu";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [favorite, setFavorite] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(favorite));
  }, [favorite]);

  const [array, setArray] = useState([
    {
      text: "Check 123",
      name: "Lahmacun",
      image: "src/lahmacun.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 456",
      name: "Chicken",
      image: "src/chicken.webp",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 789",
      name: "Veggies",
      image: "src/vegan.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Pho",
      image: "src/pho.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Tacos",
      image: "src/tacos.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Babaganoush",
      image: "src/ganoush.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Szechuan Chicken",
      image: "src/szechuan.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Stinky Tofu",
      image: "src/tofu.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "BBQ Pork",
      image: "src/bbq.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Jerk Chicken",
      image: "./src/jerk.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Flaky Biscuits",
      image: "/src/biscuit.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Apple Strudel",
      image: "src/strudel.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Check 012",
      name: "Ceviche",
      image: "src/ceviche.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
  ]);

  const handleLike = (card) => {
    if (favorite.includes(card)) {
      return;
    } else setFavorite((prev) => [...prev, card]);
  };

  const handleUnlike = (id) => {
    setFavorite(favorite.filter((item) => item.id !== id));
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
              //onChange={filterRecipes}
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
      <Favorites favorite={favorite} handleUnlike={handleUnlike} />
      <Menu array={array} handleLike={handleLike} />
    </div>
  );
}

export default App;
