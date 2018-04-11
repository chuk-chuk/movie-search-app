import React from "react";
import FaSearch from 'react-icons/lib/fa/search';
import "./styles.css";

const Header = ({onButtonSubmit, onSearchChange}) => {
    return (
      <div className="Header">
        <div className="Header__logo__main">
          <img src={require('../../assets/logo-main.png')} alt="main"/>
        </div>
        <div className="Header__logo">
          <img src={require('../../assets/logo-single.png')} alt="single"/>
        </div>
        <header>
          <h1 className="Header__title"><FaSearch /> iTunes movie search</h1>
        </header>
        <form className="Header__search" onSubmit={onButtonSubmit}>
          <input className="Header__input" type="text" onChange={onSearchChange} placeholder="Search for anything right here..." />
          <button type="submit" className="Header__button">Search</button>
       </form>
      </div>
    )
  }

export default Header;
