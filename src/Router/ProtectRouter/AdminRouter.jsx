import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRouter = () => {
   const isAdmin = JSON.parse(localStorage.getItem("admin") || "false");
   const isSignedIn = JSON.parse(localStorage.getItem("login") || "false");

   return isSignedIn && isAdmin ? <Outlet /> : <Navigate to="/signin" />;
}
  

export default AdminRouter
