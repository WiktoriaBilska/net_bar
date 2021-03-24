import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ByAlcohol from "./components/ByAlcohol";
import ByIngredient from "./components/ByIngredient";
import Drinks from "./components/Drinks";
import DrinkDetail from "./components/DrinkDetail";
import RandomDrink from "./components/RandomDrink";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/net_bar/" exact component={Main} />
        <Route path="/net_bar/byAlcohol" exact component={ByAlcohol} />
        <Route path="/net_bar/byIngredient" component={ByIngredient} />
        <Route path="/net_bar/drinks/:ingredient" component={Drinks} />
        <Route path="/net_bar/drinkDetail/:drinkID" component={DrinkDetail} />
        <Route path="/net_bar/randomDrink" component={RandomDrink} />
      </Switch>
    </Router>
  );
}

export default App;
