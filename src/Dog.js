import React, { Component } from 'react';

const imgHeight = 275;
const imgPad = 20;

/*******************************************************************************
* Author: Lake Sain-Thomason
* Purpose: Styles and handles passed in images
*******************************************************************************/
class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImageUrl: null,
      imageWidth: null,
      imageBorder: null
    }
  }

  componentDidMount() {
    // Get image URL of breed picture
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
    // Adjust the wdith proportionately to the adjusted height
    let adjWidth = ( imgHeight / img.offsetHeight ) * img.offsetWidth;
    this.setState({
      imageWidth: adjWidth,
      imageBorder: '5px solid black'
    });
  }

  handleClick() {
    this.props.onClick(this.state.dogImageUrl);
  }

  render() {
    // If the URL image has not loaded yet, don't render it
    if (this.state.dogImageUrl === null) {
      return(<img alt=""/>)
    }
    // Else, load the picture with applied style
    else
      return (
        <div key={this.state.dogImageUrl}
          style={{width: this.state.imageWidth + imgPad,
          height: imgHeight + imgPad}}>
          <img src={this.state.dogImageUrl} alt={this.props.name}
            onLoad={this.handleImageLoaded.bind(this)}
            onClick={this.handleClick.bind(this)}
            style={{
              width: this.state.imageWidth,
              height: imgHeight,
              border: this.state.imageBorder
            }}
          />
        </div>
      );
  }
}

export default Dog;
