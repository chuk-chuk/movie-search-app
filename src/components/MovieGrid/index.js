import React, { Component } from "react";
import "./styles.css";

import Movie from "../Movie";

export default class MovieGrid extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:5000/movies/?searchTerm=star+trek")
    .then(results => results.json())
    .then(data => this.setState({ movies: data.results }));
  }

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

        <div className="MovieGrid__movies">
        {this.state.movies.map(mov => (
          <Movie
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
