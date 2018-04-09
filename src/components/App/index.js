import React, { Component } from 'react';
import './styles.css';

import Header from "../Header";
import MovieGrid from "../MovieGrid";
import NoResultsWindow from "../NoResultsWindow";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
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

  getData(query) {
    const url = `http://localhost:5000/movies/?searchTerm=${query}`
    console.log("URL", url);
    fetch(url)
    .then(response => {
      console.log("response", response);
      if(response.ok) {
        response.json().then(data => {
          if(data.resultCount > 0){
            this.setState({ movies: data.results })
          } else {
            console.log("NO MOVIES FOUND");
            this.setState({ movies: []})
          }
        })
      } else {
        console.log("Test");
      }
    })
  }

  componentDidMount(){
    this.getData("fast+furious");
  }

  render() {
    const isResult = (this.state.movies).length > 0;

    return (
      <div className="App">
        <Header
          query={this.state.query}
          onSearchChange={this.handleChange.bind(this)}
          onButtonSubmit={this.onSubmit.bind(this)}
        />
        {isResult ? (
               <MovieGrid data={this.state.movies}/>
             ) : (
               <NoResultsWindow />
             )}
      </div>
    );
  }
}
