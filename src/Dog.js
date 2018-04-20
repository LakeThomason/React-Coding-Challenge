import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImage: null,
    }
    this.imageStyle = {
      height: 250
    }
    this.divStyle = {
      width: 500,
      display: "flex",
      justifyContent: "center"
    }
  }

  componentDidMount() {
    fetch(this.props.url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let image = (
          <div key={data.message}>
            <img src={data.message} alt={this.props.name} style={this.imageStyle}/>
          </div>
        )
      this.setState({dogImage: image});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div key={this.props.name} style={this.divStyle}>
        {this.state.dogImage}
      </div>
    );
  }
}

export default Dog;
