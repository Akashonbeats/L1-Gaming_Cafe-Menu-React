// import { useState } from "react";
import logo from "./assets/l1_logo.png";
import "./App.css";
import Category from "./components/category";
import ListElement from "./components/listElement";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";

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
            <ListElement Item="Fried Chilli Potato" Price="₹120" />
            <ListElement Item="Honey Chilli Potato" Price="₹145" />
            <ListElement Item="Chilli Paneer" Price="₹180" />
            <ListElement Item="Ginger Garlic Paneer" Price="₹200" />
            <ListElement Item="Sweet & Spicy Paneer" Price="₹120" />
          </ul>
        </div>
        <div className="category">
          <Category categoryName="Chinese Non-Veg Starters" />
          <ul>
            <ListElement Item="Chilli Chicken" Price="200" />
            <ListElement Item="Garlic Chicken" Price="220" />
            <ListElement Item="Hot Ginger Chicken" Price="230" />
            <ListElement Item="Chicken Manchurian" Price="185" />
            <ListElement Item="Lemon Chicken" Price="240" />
            <ListElement Item="Honey Chicken" Price="245" />
            <ListElement Item="Dark Soy Chicken" Price="230" />
          </ul>
        </div>
        <div className="category desktop-table">
          <categoryName categoryName="Fried Rice" />
          <table>
            <TableHead />
            <tbody>
              <TableRow
                Item="Classic Fried Rice"
                VegPr={150}
                EggPr={160}
                ChkPr={180}
              />
              <TableRow
                Item="Chennai Style Rice"
                VegPr={160}
                EggPr={170}
                ChkPr={190}
              />
              <TableRow
                Item="Schezwan Fried Rice"
                VegPr={170}
                EggPr={180}
                ChkPr={200}
              />
              <TableRow
                Item="Chilli Garlic Rice"
                VegPr={180}
                EggPr={190}
                ChkPr={210}
              />
              <TableRow
                Item="Chicken Zoro Rice"
                VegPr="NA"
                EggPr="NA"
                ChkPr={250}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
