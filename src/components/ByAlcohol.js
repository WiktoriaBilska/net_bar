import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../styles/SearchBy.scss";
import imgAlc from "../images/drinks_left.png";
import imgAlc2 from "../images/drinks_right.png";

function ByAlcohol() {
  const [alcs, setAlcs] = useState([]);
  const [choosenAlc, setChoosenAlc] = useState("");
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
              if (response.data.ingredients[0].strAlcohol === "Yes") {
                setAlcs((oldArray) => [
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
    setChoosenAlc(e.target.value);
  };

  const handleShowDrinks = () => {
    if (choosenAlc.length > 0) {
      history.push("/net_bar/drinks/" + choosenAlc);
    }
  };

  return (
    <div className="searchWrapper">
      <img src={imgAlc} alt="drinks images" className="alcImg" />
      <div className="searchBy">
        <h2>Select the product from the list:</h2>
        <div className="selectWrapper">
          <select
            onChange={handleSelect}
            value={choosenAlc}
            className="searchSelect"
          >
            <option value="">Choose one...</option>
            {alcs.length > 0 ? (
              alcs.map((alc) => (
                <option value={alc.strIngredient}>{alc.strIngredient}</option>
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
      <img src={imgAlc2} alt="drinks images" className="alcImg2" />
    </div>
  );
}

export default ByAlcohol;
