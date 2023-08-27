import Favorites from "./Favorites";
import { Menu } from "./Menu";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

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
      text: "Turkish Pizza",
      name: "Lahmacun",
      image: "/lahmacun.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Fried Heaven",
      name: "Chicken",
      image: "/chicken.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Rainbow Bow",
      name: "Veggies",
      image: "/veggies.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Pho real Pho",
      name: "Pho",
      image: "/pho.jpeg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "A la carte",
      name: "Tacos",
      image: "/tacos.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Baba who?",
      name: "Babaganoush",
      image: "/ganoush.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Spicy Delight",
      name: "Szechuan Chicken",
      image: "/szechuan.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Eww so tasty",
      name: "Stinky Tofu",
      image: "/tofu.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Southern Style",
      name: "BBQ Pork",
      image: "/bbq.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Jamaican Spice",
      name: "Jerk Chicken",
      image: "/jerk.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Grandma's Recipe",
      name: "Flaky Biscuits",
      image: "/biscuit.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "German Pie ",
      name: "Apple Strudel",
      image: "/strudel.jpg",
      id: self.crypto.randomUUID(),
      liked: false,
    },
    {
      text: "Tiger's Milk",
      name: "Ceviche",
      image: "/ceviche.jpg",
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
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
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
      <Favorites
        favorite={favorite}
        handleUnlike={handleUnlike}
        searchQuery={searchQuery}
      />
      <Menu array={array} handleLike={handleLike} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
