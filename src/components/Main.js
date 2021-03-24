import React from "react";
import "../styles/Main.scss";
import { Link } from "react-router-dom";
import imgLeft from "../images/orange.png";
import imgRight from "../images/blue.png";

function Main() {
  return (
    <main>
      <img src={imgLeft} alt="orange Drink" className="orangeDrink" />

      <div className="mainWrapper">
        <h1 className="mainHeader">Net Bar Application welcomes!</h1>
        <h3>
          Do you want to check the drink recipes for ingredients you already
          have at home?
        </h3>
        <h3>At first - select category:</h3>
        <div className="mainBtns">
          <Link className="alcBtn mainBtn" to="/net_bar/byAlcohol">
            Alcohol
          </Link>
          <Link className="ingrBtn mainBtn" to="/net_bar/byIngredient">
            Different ingredient
          </Link>
        </div>
        <h3>...and remember, a little party never killed nobody! </h3>
        <h3>But be careful :)</h3>
      </div>

      <img src={imgRight} alt="blue Drink" className="blueDrink" />
    </main>
  );
}

export default Main;
