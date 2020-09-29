import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = props => {
  const [search, setSearch] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
  };
  const openSearch = () => {
    setSearch(true);
  };
  const searchClass = search ? "searchInput active" : "searchInput";
  return (
    <div className='navbar'>
      <ul className='navbarMenu'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about-us'>About Us</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>
        <li>
          <NavLink to='contact-us'>Contact Us</NavLink>
        </li>
      </ul>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input type='text' className={searchClass} placeholder='Search' />
          <img
            onClick={openSearch}
            className='image'
            src={require("../../assets/icons/search.png")}
            alt='Search'
          />
        </form>
      </div>
    </div>
  );
};
export default NavBar;
