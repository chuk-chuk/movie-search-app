import React, { Component } from "react";
import "./styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__logo__main">
          <img src={require('../../assets/logo-main.png')} alt="main"/>
        </div>
        <div className="Header__logo">
          <img src={require('../../assets/logo-single.png')} alt="single"/>
        </div>
        <header>
          <h1 className="Header__title">iTunes movie search</h1>
        </header>
        <div className="Header__search">
          <input className="Header__input" ref="search" type="search" placeholder="Search for anything right here..." />
          <button className="Header__button" onClick={this.handleClick}>Search</button>
       </div>
      </div>
    )
  }
}
