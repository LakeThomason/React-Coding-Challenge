import React, { Component } from 'react';
import DogTable from './DogTable.js'
import Flexbox from 'flexbox-react';
import ReactSmoothScroll from 'react-smooth-scroll'
import './App.css';

class App extends Component {
  render() {
    return (
      <div key="App">
        <ReactSmoothScroll>
          <div id="content" key="content">
            <Flexbox justifyContent="center" alignItems="center">
              <div id="header" key="header" style={{width: "90%", height: "10%"}}>
                <Flexbox justifyContent="center" alignItems="center">
                  <p style={{fontSize: "7vw", fontFamily: "Kalam"}}>
                    SOME GOOD BOIS
                  </p>
                </Flexbox>
              </div>
            </Flexbox>
            <Flexbox alignItems="center" justifyContent="center">
              <DogTable />
            </Flexbox>
          </div>
        </ReactSmoothScroll>
      </div>
    );
  }
}

export default App;
