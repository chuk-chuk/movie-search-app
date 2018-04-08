import React, { Component } from "react";
import "./styles.css";
import SearchBar from "../SearchBar";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <h1 className="Header__title">iTunes Movie Search</h1>
        </header>
        <SearchBar />
      </div>
    )
  }
}
