import React from "react";
import Moment from 'moment';
import "./styles.css"

const Movie = ({ image, title, genre, release, desc }) => {
  Moment.locale('en');
  console.log(release);
    return (
      <figure className="Movie">
       <div className="Movie__ava">
        <img className="Movie__image" src={image} alt={title} />
       </div>
       <figcaption>
         <h2>{title}</h2>
         <span>{genre}</span>
         <span>{Moment(release).format('DD MMMM YYYY')}</span>
         <p className="Movie__desc">{desc}</p>
       </figcaption>
      </figure>
    )

}
export default Movie;
