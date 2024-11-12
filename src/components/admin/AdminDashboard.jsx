import React from 'react'
import NavBar from '../../layouts/NavBar'
import NavbarAdmin from './NavbarAdmin'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
      <NavbarAdmin />
      <p>Admin Dashboard</p>
      <Outlet />

      <p>hh</p>
    </div>
  );
}

export default AdminDashboard
