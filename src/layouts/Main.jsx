import React from 'react'

import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="app-container">
    
      <main> {<Outlet/>} </main>
     
    </div>
  );
};

export default Main;