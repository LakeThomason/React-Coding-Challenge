import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Dog from './Dog.js';
import Lightbox from 'react-image-lightbox';
import FlipMove from 'react-flip-move';
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
      let dogArray = [];
      for (let breed in data.message) {
        if (Object.keys(data.message[breed]).length === 0) {
          dogArray.push(
              <Dog
                apiUrl={'https://dog.ceo/api/breed/' + breed + '/images/random'}
                name={breed}
              />
          );
        }
        else {
          for (let subBreed in data.message[breed]) {
            dogArray.push(
                <Dog
                  apiUrl={'https://dog.ceo/api/breed/'
                  + breed + "-"
                  + data.message[breed][subBreed]
                  + '/images/random'}
                  name={breed + ' ' + data.message[breed][subBreed]}
                />
            );
          }
        }
      }
      this.setState({doggies: dogArray});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div key="Table">
        <Flexbox
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          >
          {this.state.doggies}
        </Flexbox>
      </div>
    );
  }
}

export default DogTable;
