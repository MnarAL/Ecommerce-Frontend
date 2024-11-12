import React from 'react'

import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  return (
    <div>
      <header>
        <h1>E-commerce App</h1>

        <nav>
          

          <Link to="/">Home</Link>
          <Link to="/admin/dashboard/add-product">Add Product</Link>
          <Link to="/admin/dashboard/admin-productslist">Products List</Link>
          <Link to="/admin/dashboard/editproduct/:id">   edit </Link>
        </nav>
      </header>
    </div>
  );
}

export default NavbarAdmin
