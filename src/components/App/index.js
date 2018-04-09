import React, { Component } from 'react';
import './styles.css';

import Header from "../Header";
import MovieGrid from "../MovieGrid";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      query: "star+track"
    };
  }

  handleChange(e) {
    this.setState({ query: e.target.value })
  }

  onSubmit(e) {
     e.preventDefault();
     this.getData(this.state.query);
     this.setState({ query: ''})
  }

  getData(query) {
    const url = `http://localhost:5000/movies/?searchTerm=${query}`
    console.log("URL", url);
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ movies: data.results }));
  }

  componentDidMount(){
    this.getData(this.state.query);
  }

  render() {
    return (
      <div className="App">
        <Header
          query={this.state.query}
          onSearchChange={this.handleChange.bind(this)}
          onButtonSubmit={this.onSubmit.bind(this)}
        />
        <MovieGrid data={this.state.movies}/>
      </div>
    );
  }
}
