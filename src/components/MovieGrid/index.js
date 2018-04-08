import React, { Component } from "react";
import "./styles.css";

import Movie from "../Movie";

export default class MovieGrid extends Component {
  render() {
    return (
      <div className="MovieGrid">
        <div>
            <span className="MovieGrid__result">Result</span>
            <div className="MovieGrid__sort">
              <span className="">Sort by</span>
              <button>Title</button>
              <button>Release year</button>
            </div>
        </div>
        <Movie />
      </div>
    )
  }
}
