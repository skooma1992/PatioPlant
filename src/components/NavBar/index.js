import React, { useState } from "react";
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
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Posts</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
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
