import React, { Component } from 'react';
import kalahari2 from '../assets/kalahari2.jpg';
import kalahari3 from '../assets/kalahari3.jpg';

class FeaturedFive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: kalahari2,
      hovered: false
    };
  }
  
  changeImage() {

  }

  render() {
      return(
        <div>

        {/* <p>{this.props.introMessage}</p> */}
        <img className='featuredFivePhoto' src={this.state.img1} 
          onMouseEnter={() => {
            this.setState({
              img1: kalahari3, 
              hovered: true
            })
          }} 
          onMouseOut={() => {
            this.setState({
              img1: kalahari2, 
              hovered: false
            })
          }}
          style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`
        }}></img>
        {/* <img className='featuredFivePhoto' src={kalahari3}></img> */}
        </div>
      );
    }
  }

export default FeaturedFive;