import React, { Component } from "react";
import "./styles.css";

export default class NoResultsWindow extends Component {

  render() {
    return (
      <div>
        <h1>WHOOPS! No movies found <span role="img" aria-label="bla bla">🙁</span></h1>
        <p>Please try again...</p>
      </div>
    )
  }
}
