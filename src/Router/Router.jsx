import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsList from "../components/products/ProductsList";
import ProductDetails from "../components/products/ProductDetails";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/productList",
          element: <ProductsList />,
        },
        { path: "/productDetails/:id", element: <ProductDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
