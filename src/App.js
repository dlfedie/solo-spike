import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import SearchForm from './SearchForm/SearchForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchForm />
      </div>
    );
  }
}

export default App;
