import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Dog from './Dog.js';
import DogRow from './DogRow.js'
import './App.css';


class DogTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggies: [],
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let dogRowArray = [];
      let row = [];
      for (let breed in data.message) {
        if (row.length === 3) {
          dogRowArray.push(
            <DogRow
              row={row}
            />
          )
          row = [];
        }
        if (Object.keys(data.message[breed]).length === 0) {
          row.push(
            <Flexbox elmenent="div">
              <Dog
                url={'https://dog.ceo/api/breed/' + breed + '/images/random'}
                name={breed}
              />
            </Flexbox>
          );
        }
        else {
          for (let subBreed in data.message[breed]) {
            if (row.length === 3) {
              dogRowArray.push(
                <DogRow
                  row={row}
                />
              )
              row = [];
            }
            row.push(
              <Flexbox element="div">
                <Dog
                  url={'https://dog.ceo/api/breed/'
                  + breed + "-"
                  + data.message[breed][subBreed]
                  + '/images/random'}
                  name={breed + ' ' + data.message[breed][subBreed]}
                />
              </Flexbox>
            );
          }
        }
      }

      this.setState({doggies: dogRowArray});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div key="Table">
        {this.state.doggies}
      </div>
    );
  }
}

export default DogTable;
