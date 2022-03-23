import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      id: 1
    }
  }
  
  setId(id) {
    localStorage.setItem('id', id);
  }
  
  componentDidMount() {
    axios.get(`http://localhost:3000/countries`)
    .then(res => {
      const countries = res.data;
      this.setState({ countries });
    })
  }
  
  render() {
    return(
      <div>

      <ul>
          {
            this.state.countries
            .map(country =>
              <li key={country.id}><Link to={`/countries/${country.id}`} onClick={() => this.setId(country.id)}>{country.name}</Link></li>
              )
            }

        </ul>
        </div>
      );
    }
  }
 
export default Countries;