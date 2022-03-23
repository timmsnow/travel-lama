import React, { Component } from 'react';

class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
      return(
        <div>

        <p>{this.props.introMessage}</p>
        </div>
      );
    }
  }

export default IntroContainer;
