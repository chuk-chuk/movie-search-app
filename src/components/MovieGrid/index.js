import React from "react";
import "./styles.css";

import Movie from "../Movie";

const MovieGrid = ({ sortByTitle, sortByYear, data }) => {

    return (
      <div className="MovieGrid">
        <div>
            <span className="MovieGrid__result">Result</span>
            <div className="MovieGrid__sort">
              <span>SORT BY</span>
              <button className="button button__title" onClick={sortByTitle}>Title</button>
              <button className="button button__date" onClick={sortByYear}>Release year</button>
            </div>
        </div>

        <div className="MovieGrid__movies">
        {data.map(mov => (
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
export default MovieGrid;
