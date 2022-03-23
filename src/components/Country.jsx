import React, { Component } from 'react';
import axios from 'axios';
import IntroContainer from './IntroContainer';
import FeaturedFive from './FeaturedFive';


class Country extends Component {
  constructor() {
    super();
    this.state = {
      country: {}    }
    this.getCountry();
  }
  
  getCountry() {
    var id = localStorage.getItem('id');
    axios.get(`http://localhost:3000/countries/${id}`)
    .then(res => {
      const country = res.data;
      this.setState({ country });
    })
  }
  
  render() {
      return(
        <div>

        <h1>{this.state.country.name}</h1>
        <IntroContainer introMessage={this.state.country.intro}/>
        <h2>TraveLlama Featured 5</h2>
        <FeaturedFive />
        </div>
      );
    }
  }

export default Country;
