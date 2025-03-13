import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <nav class="navbar">
    <h3 class="navbar-logo">KyaLoo Store</h3>
    <div class="navbar-links">
        <a href="#">Home</a>    
    </div>
    <button class="navbar-button">Explore</button>
</nav>
  );
};

export default Header;