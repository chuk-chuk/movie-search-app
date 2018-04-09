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
              <span>SORT BY</span>
              <button className="button button__title">Title</button>
              <button className="button button__date">Release year</button>
            </div>
        </div>

        <div className="MovieGrid__movies">
        {this.props.data.map(mov => (
          <Movie
            key={mov.trackId}
            image={mov.artworkUrl100}
            title={mov.trackName}
            genre={mov.primaryGenreName}
            release={mov.releaseDate}
            desc={mov.longDescription}
          />
        ))}
        </div>

      </div>
    )
  }
}
