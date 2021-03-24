import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/Drinks.scss";

function Drinks({ match }) {
  const [drinkArr, setDrinkArr] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          match.params.ingredient
      )
      .then(function (response) {
        setDrinkArr(response.data.drinks);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [match.params.ingredient]);

  const showDrinkDetails = (id) => {
    history.push("/net_bar/drinkDetail/" + id);
  };

  return (
    <div class="drinkPage">
      {drinkArr.map((drink) => {
        console.log(drink);
        return (
          <div class="drink" onClick={() => showDrinkDetails(drink.idDrink)}>
            <img
              src={drink.strDrinkThumb}
              alt="Example way of serving drink "
            />
            <h3>{drink.strDrink}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Drinks;
