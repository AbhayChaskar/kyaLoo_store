import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <nav className="navbar">
    <h3 className="navbar-logo">KyaLoo Store</h3>
    <div className="navbar-links">
        <a href="#">Home</a>    
    </div>
    <button className="navbar-button">Explore</button>
</nav>
  );
};

export default Header;