import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsList from "../components/products/ProductsList";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ProductDetails from "../components/products/ProductDetails";
// import AdminDashboard from '../components/admin/AdminProductsManage';
import AddProductForm from "../components/admin/AddProductForm";

import AdminProductsList from "../components/admin/AdminProductsList";
// import AdminProductsManage from "../components/admin/AdminProductsManage";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminRouter from "./ProtectRouter/AdminRouter";
import UpdateProduct from "../components/admin/UpdateProduct";

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
        {
          path: "/signin",
          element: <SignIn />,
        },

        {
          path: "/signup",
          element: <SignUp />,
        },
        // {
        //   path: "admin-product-manage",
        //   element: <AdminProductsManage />,
        // },
        // {
        //   path: "/edit-product",
        //   element: <UpdateProduct />,
        // },
        // {
        //   path: "/add-product",
        //   element: <AddProductForm />,
        // },
        // {
        //   path: "/admin-productslist",
        //   element: <AdminProductsList />,
        // },
      ],
    },
    {
      path: "admin/dashboard",
      element: <AdminRouter />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <AdminDashboard />,
          children: [
            {
              path: "add-product",
              element: <AddProductForm />,
            },
            {
              path: "admin-productslist",
              element: <AdminProductsList />,
            },
            {
              path: "editproduct/:id",
              element:<UpdateProduct />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

//     path: "admin/dashboard",
//     element: <AdminRouter />,
//     children: [
//       {
//         Router: true,
//         element: <AdminDashboard />,
//       },
//       {
//         path: "admin/dashboard",
//         element: <AdminDashboard />,
//       },
//       {
//         path: "/admin-productslist",
//         element: <AdminProductsList />,
//       },
//       {
//         path: "/add-product",
//         element: <AddProductForm />,
//       },
//       {
//         path: "/admin-product-manage",
//         element: <AdminProductsManage />,
//       },
//     ],
//   },
// ],
