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
     const query = this.state.query;
     console.log("OnSubmit", query);
     this.setState({ query: ''})
  }

  getData() {
    const url = `http://localhost:5000/movies/?searchTerm=${this.state.query}`
    console.log("URL", url);
    fetch(url)
    .then(results => results.json())
    .then(data => this.setState({ movies: data.results }));
  }

  componentDidMount(){
    this.getData();
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
