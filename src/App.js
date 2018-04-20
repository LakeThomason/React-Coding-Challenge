import React, { Component } from 'react';
import DogTable from './DogTable.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div key="App">
        <DogTable />
      </div>
    );
  }
}

export default App;
