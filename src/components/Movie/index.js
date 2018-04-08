import React from "react";
import "./styles.css"

const Movie = ({ image, title, genre, release, desc }) => {

    return (
      <figure className="Movie">
       <div className="Movie__ava">
        <img className="Movie__image" src={image} alt={title} />
       </div>
       <figcaption>
         <h2>{title}</h2>
         <span>{genre}</span>
         <span>{release}</span>
         <p className="Movie__desc">{desc}</p>
       </figcaption>
      </figure>
    )

}
export default Movie;
