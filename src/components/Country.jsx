import React, { Component } from 'react';
import axios from 'axios';


class Country extends Component {
  constructor() {
    super();
    this.state = {
      country: {}    }
    this.getCountry();
  }
  
  getCountry() {
    axios.get(`http://localhost:3000/countries/1`)
    .then(res => {
      const country = res.data;
      this.setState({ country });
    })
  }
  
  render() {
      return(
        <div>

        <h1>{this.state.country.name}</h1>
        </div>
      );
    }
  }
 
export default Country;