import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <Link
        className="logo"
        to="/net_bar/"
        onClick={() => {
          setMenu(false);
        }}
      >
        <span className="logoFirst">Net</span>Bar
        <span className="authorLogo"> by Wiktoria Bilska</span>
      </Link>
      <ul className={menu === true ? "menu active" : "menu"}>
        <li>
          <Link
            to="/net_bar/randomDrink"
            onClick={() => {
              setMenu(false);
            }}
          >
            Random drink
          </Link>
        </li>
        <li>
          <Link
            to="/net_bar/byAlcohol"
            onClick={() => {
              setMenu(false);
            }}
          >
            Search by alcohol
          </Link>
        </li>
        <li>
          <Link
            to="/net_bar/byIngredient"
            onClick={() => {
              setMenu(false);
            }}
          >
            Search by ingredients
          </Link>
        </li>
      </ul>

      <FontAwesomeIcon
        icon={menu === true ? faTimes : faBars}
        className="menuBar"
        onClick={() => {
          setMenu(!menu);
        }}
      />
    </nav>
  );
}

export default Navbar;
