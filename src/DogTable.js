import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Dog from './Dog.js';
import Lightbox from 'react-image-lightbox';
import './App.css';

/*******************************************************************************
* Author: Lake Sain-Thomason
* Purpose: The table component that contains all the <Dog> compoonents. Styles
* the <div> container with Flexbox and opens Lightbox when an image is clicked
*******************************************************************************/
class DogTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggies: [],
      lightboxOpen: false,
      lightBoxImage: null,
    }
    this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {
    // Get JSON of every available breed
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      return response.json();
    })
    .then(data => {
      let dogArray = [];
      for (let breed in data.message) {
        // If no subBreeds, get random image
        if (Object.keys(data.message[breed]).length === 0) {
          dogArray.push(
              <Dog
                apiUrl={'https://dog.ceo/api/breed/' + breed + '/images/random'}
                name={breed}
                onClick={this.openLightbox}
              />
          );
        }
        // Else, loop through the subBreeds, get random image
        else {
          for (let subBreed in data.message[breed]) {
            dogArray.push(
                <Dog
                  apiUrl={'https://dog.ceo/api/breed/'
                  + breed + "-"
                  + data.message[breed][subBreed]
                  + '/images/random'}
                  name={breed + ' ' + data.message[breed][subBreed]}
                  onClick={this.openLightbox}
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

  openLightbox(imgUrl) {
    this.setState({ lightboxOpen: true, lightBoxImage: imgUrl });
  }

  render() {
    return (
      <div key="Table" style={{width: "80%"}}>
        <Flexbox
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          >
          {this.state.doggies}
        </Flexbox>
        {this.state.lightboxOpen && (
          <Lightbox
            mainSrc={this.state.lightBoxImage}
            onCloseRequest={() => this.setState({ lightboxOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default DogTable;
