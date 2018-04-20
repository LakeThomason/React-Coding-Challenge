import React, { Component } from 'react';
import DogTable from './DogTable.js'
import ReactSmoothScroll from 'react-smooth-scroll'
import './App.css';

class App extends Component {
  render() {
    return (
      <div key="App">
        <ReactSmoothScroll>
          <DogTable />
        </ReactSmoothScroll>
      </div>
    );
  }
}

export default App;
