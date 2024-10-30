import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>E-commerce App</h1>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/productList">ProductsList </Link>
        
      </nav>
    </header>
  );
};

export default Header;
