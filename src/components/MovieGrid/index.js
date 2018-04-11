import React from "react";
import "./styles.css";

import Movie from "../Movie";
import NoResultsWindow from "../NoResultsWindow";

const MovieGrid = ({ sortByTitle, sortByYear, data }) => {
  if(data === undefined) {
    return null;
  }
  const hasItems = data.length > 0;

  if(!hasItems) {
    return( <NoResultsWindow /> )
  }

  return (
    <div className="MovieGrid">
      <div className="MovieGrid__content">
          <span className="MovieGrid__result">RESULT</span>
          <div className="MovieGrid__sort">
            <span>SORT BY</span>
            <button className="button button__title" onClick={sortByTitle}>Title</button>
            <button className="button button__date" onClick={sortByYear}>Release year</button>
          </div>

            <ul className="MovieGrid__movies">
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
          </ul>
      </div>
    </div>
  )
}
export default MovieGrid;
