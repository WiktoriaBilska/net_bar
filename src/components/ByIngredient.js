import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/SearchBy.scss";
import imgIng from "../images/lemon.svg";
import imgIng2 from "../images/watermelon.png";

function ByIngredient() {
  const [ing, setIng] = useState([]);
  const [choosenIng, setChoosenIng] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then(function (response) {
        const drinks = response.data.drinks;

        for (let i = 0; i < drinks.length; i++) {
          axios
            .get(
              "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +
                drinks[i].strIngredient1
            )
            .then(function (response) {
              if (response.data.ingredients[0].strAlcohol !== "Yes") {
                setIng((oldArray) => [
                  ...oldArray,
                  response.data.ingredients[0],
                ]);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSelect = (e) => {
    setChoosenIng(e.target.value);
  };

  const handleShowDrinks = () => {
    if (choosenIng.length > 0) {
      history.push("/net_bar/drinks/" + choosenIng);
    }
  };

  return (
    <div className="searchWrapper">
      <img src={imgIng} alt="lemon images" className="ingImg" />

      <div className="searchBy">
        <h2>Select the product from the list:</h2>
        <div className="selectWrapper">
          <select
            onChange={handleSelect}
            value={choosenIng}
            className="searchSelect"
          >
            <option value="">Choose one...</option>
            {ing.length > 0 ? (
              ing.map((item) => (
                <option value={item.strIngredient}>{item.strIngredient}</option>
              ))
            ) : (
              <option>Loading</option>
            )}
          </select>
        </div>
        <button onClick={handleShowDrinks} className="searchByBtn">
          Show drinks
        </button>
      </div>
      <img src={imgIng2} alt="watermelon images" className="ingImg2" />
    </div>
  );
}

export default ByIngredient;
