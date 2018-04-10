import React, { Component } from 'react';
import _ from 'lodash';
import './styles.css';

import Header from "../Header";
import MovieGrid from "../MovieGrid";
import Loader from "../Loader";
import {fetchMovies} from "../../api/fetchMovies";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: undefined,
      query: ""
    };
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  onSubmit(e) {
     e.preventDefault();
     this.getData(this.state.query);
     e.target.reset();
  }

  sortBy(fieldName){
    console.log("Sorting...");
    this.setState({
      movies: _.sortBy(this.state.movies, fieldName)
    });
  }

  getData(query) {
    fetchMovies(query)
    .then(data => {
      if(data.resultCount > 0){
        this.setState({ movies: data.results })
      } else {
        console.log("No movies found");
        this.setState({ movies: []})
      }
    })
  }

  componentDidMount(){
    this.getData("fast+furious");
  }

  render() {
    const isResult = this.state.movies === undefined;

    return (
      <div className="App">
        <Header
          query={this.state.query}
          onSearchChange={this.handleChange.bind(this)}
          onButtonSubmit={this.onSubmit.bind(this)}
        />
        {!isResult ? (
           <MovieGrid
            data={this.state.movies}
            sortByTitle={() => this.sortBy('trackName')}
            sortByYear={() => this.sortBy('releaseDate')} />
           ) : ( <Loader /> )}
      </div>
    );
  }
}
