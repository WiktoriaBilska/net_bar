import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/DrinkDetail.scss";

function RandomDrink() {
  const [drinkInfo, setDrinkInfo] = useState([]);
  const [drinkIngMea, setDrinkIngMea] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(function (response) {
        setDrinkInfo(response.data.drinks[0]);
        let tempArr = [];

        for (let i = 1; i <= 15; i++) {
          tempArr.push([
            // eslint-disable-next-line no-eval
            eval(`response.data.drinks[0].strIngredient` + i),
            // eslint-disable-next-line no-eval
            eval(`response.data.drinks[0].strMeasure` + i),
          ]);
        }
        setDrinkIngMea(tempArr);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="drinkDetails">
      <div className="drinkWrapper">
        <div className="leftSec">
          <img
            src={drinkInfo.strDrinkThumb}
            alt="Example way of serving drink "
            className="drinkImg"
          />
        </div>
        <div className="rightSec">
          <h2 className="drinkName">{drinkInfo.strDrink}</h2>
          <h3>CATEGORY:</h3>
          <h4>{drinkInfo.strCategory}</h4>
          <h3> ALCOHOLIC OR NON-ALCOHOLIC: </h3>
          <h4>{drinkInfo.strAlcoholic}</h4>
          <h3>GLASS:</h3>
          <h4> {drinkInfo.strGlass}</h4>
          <h3> INSTRUCTIONS: </h3>
          <h4>{drinkInfo.strInstructions}</h4>
          <br />

          {drinkIngMea.map((item) => {
            if (item[0] !== null) {
              return (
                <p>
                  {item[0]} <span className="orangy">{item[1]}</span>
                </p>
              );
            } else {
              return false;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default RandomDrink;
