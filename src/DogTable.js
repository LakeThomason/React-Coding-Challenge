import React, { Component } from 'react';
import Dog from './Dog.js';
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
      let dogImageArray = [];
      for (let breed in data.message) {
        if (Object.keys(data.message[breed]).length === 0) {
          dogImageArray.push(
            <Dog
              url={'https://dog.ceo/api/breed/' + breed + '/images/random'}
              name={breed}
            />
          );
        }
        else {
          for (let subBreed in data.message[breed]) {
            dogImageArray.push(
              <Dog
                url={'https://dog.ceo/api/breed/'
                + breed + "-"
                + data.message[breed][subBreed]
                + '/images/random'}
                name={breed + ' ' + data.message[breed][subBreed]}
              />
            );
          }
        }
      }
      this.setState({doggies: dogImageArray});
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
