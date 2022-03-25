import React, { Component } from 'react';
import Parser from 'html-react-parser';

class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  
  render() {
      return(
        <div>
          <div className="basic-container">
            {Parser(String(this.props.introMessage))}
          </div>
        </div>
      );
    }
  }

export default IntroContainer;
