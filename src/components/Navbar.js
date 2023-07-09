import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "./css/navbar.css";

function Home() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/pizza" activeClassName="active">
            Pizza
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sides" activeClassName="active">
            Sides
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/drinks" activeClassName="active">
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/desserts" activeClassName="active">
            Desserts
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/deals" activeClassName="active">
            Deals
          </NavLink>
        </li>
        <li className="logSign">
          <NavLink exact to="/login" activeClassName="active">
            Log In
          </NavLink>
        </li>
        <li className="logSign">
          <NavLink exact to="/Sign Up" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Home;
