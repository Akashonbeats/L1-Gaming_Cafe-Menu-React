// import { useState } from "react";
import logo from "./assets/l1_logo.png";
import "./App.css";
import Category from "./components/category";
import ListElement from "./components/listElement";

const App = () => {
  return (
    <>
      <nav>
        <h1>L1 Gaming Cafe</h1>
        <h5>More than just a game</h5>
      </nav>
      <header>
        <img src={logo} alt="L1 Gaming Cafe Logo" />
        <div class="header-text">
          <h1>L1 Gaming Cafe</h1>
          <h2>Food Menu</h2>
          <a href="https://www.instagram.com/l1gamingcafe/" target="_blank">
            Visit us in Instagram
          </a>
        </div>
      </header>
      <div className="categories-wrapper">
        <div className="category">
          <Category categoryName="Chinese Veg Starters" />
          <ul>
            <ListElement  Item="Fried Chilli Potato" Price="₹120"/>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
