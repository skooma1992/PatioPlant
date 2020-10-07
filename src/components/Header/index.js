import React from "react";
import "./style.css";
import Link from "react";

/**
 * @author
 * @function Header
 **/

const Header = props => {
  return (
    <header className='header'>
      <nav className='headerMenu'>
        <p>Home</p>
        <p>Contact us</p>
        <p>About us</p>
      </nav>
      <div>Social Media links</div>
    </header>
  );
};

export default Header;
