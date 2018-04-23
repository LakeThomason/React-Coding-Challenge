import React, { Component } from 'react';
import defaultDog from './defaultDog.png';

const imgHeight = 275;
const imgPad = 20;

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImageUrl: defaultDog,
      imageWidth: null
    }
  }

  componentDidMount() {
    fetch(this.props.apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({ dogImageUrl: data.message })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleImageLoaded({target: img}) {
    let adjWidth = ( imgHeight / img.offsetHeight ) * img.offsetWidth;
    this.setState({imageWidth: adjWidth});
  }

  render() {
    if (this.state.dogImageUrl === defaultDog) {
      return (
        <img src={this.state.dogImageUrl} alt={this.props.name}
          style={{height: imgHeight}}
        />
      );
    }
    else
      return (
        <div key={this.state.dogImageUrl} style={{width: this.state.imageWidth + imgPad, height: imgHeight + imgPad}}>
          <img src={this.state.dogImageUrl} alt={this.props.name}
            onLoad={this.handleImageLoaded.bind(this)}
            style={{width:this.state.imageWidth, height:imgHeight, border: '5px solid black'}}
          />
        </div>
      );
  }
}

export default Dog;
