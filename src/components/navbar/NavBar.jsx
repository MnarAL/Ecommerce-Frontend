import React from 'react'
import Header from './Header'
import Footer from './Footer'

const NavBar = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main> {children} </main>
      <Footer />
    </div>
  );
};
// export default function NavBar() {
//   return (
    
//     <div>NavBar</div>
//   )
// }
export default NavBar;