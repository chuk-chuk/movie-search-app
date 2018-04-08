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
    .then(results => {
      return results.json();
    }).then(data => {
      let movies = data.results.map((mov) => {
        return(
          <div key={mov.results}>
             <img src={mov.artworkUrl100} alt={mov.trackName}/>
             <h2>{mov.trackName}</h2>
             <span>{mov.primaryGenreName}</span>
             <span>{mov.releaseDate}</span>
             <p>{mov.longDescription}</p>
          </div>
        )
      })
      this.setState({movies});
      console.log("STATE", this.state.movies);
    })
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
        <Movie />
      </div>
    )
  }
}
