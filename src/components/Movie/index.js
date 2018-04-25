import React from "react";
import Moment from 'moment';
import "./styles.css"

const Movie = ({ image, title, genre, release, desc }) => {
  Moment.locale('en');
    return (

      <li className="Movie">
        <div className="Movie__wrapper">
          <div className="Movie__ava">
            <img className="Movie__image" src={image} alt={title} />
          </div>
          <div className="Movie__content">
            <p className="Movie__title">{title}</p>
            <div className="Movie__headline">
              <span>{genre}</span>
              <span>{Moment(release).format('DD MMMM YYYY')}</span>
            </div>
            <p className="Movie__desc">{desc}</p>
          </div>
        </div>
      </li>
    )

}
export default Movie;
