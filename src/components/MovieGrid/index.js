import React, { Component } from "react";
import "./styles.css";

import Movie from "../Movie";

export default class MovieGrid extends Component {
  render() {
    return (
      <div className="MovieGrid">
        <p className="MovieGrid__title">Movie Grid is here</p>
        <Movie />
      </div>
    )
  }
}
