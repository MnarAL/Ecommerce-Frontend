import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
         <h1>E-commerce App</h1>
        
        <nav>
           <Link to="/"> Home </Link>
           <Link to="/productList">ProductsList </Link>
         
        </nav>
       
      </header>
    </div>
  );
};

export default NavBar;
