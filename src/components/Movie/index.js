import React, { Component } from "react";
import "./styles.css"

export default class Movie extends Component {
  render() {
    return (
      <figure className="Movie">
       <div className="Movie__ava">
        <img className="Movie__image" src={require('../../assets/movie-img.jpg')} alt="name" />
       </div>
       <figcaption>
         <h2>Star Track</h2>
         <span>Sci-Fi & Fantasy</span>
         <span>2009-05-08T07:00:00Z</span>
         <p className="Movie__desc">The greatest adventure of all time begins with Star Trek, the incredible story The greatest adventure of all time begins with Star Trek, the incredible story</p>
       </figcaption>
      </figure>
    )
  }
}
