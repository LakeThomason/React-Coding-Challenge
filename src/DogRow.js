import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './App.css';


class DogRow extends Component {
  render() {
    return (
      <div key="Row">
        <Flexbox flexDirection="row" alignItems="center" justifyContent="center">
          {this.props.row}
        </Flexbox>
      </div>
    );
  }
}

export default DogRow;
