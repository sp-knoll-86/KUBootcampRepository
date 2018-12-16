import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbarStyle: {
    background: "green",
    justifyContent: "flex-end"
  }

};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
