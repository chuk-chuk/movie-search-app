import React, { Component } from 'react';
import './styles.css';

import Header from "../Header";
import SortBy from "../SortBy";
import MovieGrid from "../MovieGrid";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SortBy />
        <MovieGrid />
      </div>
    );
  }
}
