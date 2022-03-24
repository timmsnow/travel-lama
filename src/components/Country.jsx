import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IntroContainer from './IntroContainer';
import FeaturedFive from './FeaturedFive';


// class Country extends Component {
//   constructor() {
//     super();
//     this.state = {
//       country: {}    }
//     this.getCountry();
//   }
  
//   getCountry() {
//     var id = localStorage.getItem('id');
//     axios.get(`http://localhost:3000/countries/${id}`)
//     .then(res => {
//       const country = res.data;
//       this.setState({ country });
//     })
//   }
  
//   render() {
//       return(
//         <div>

//         <h1>{this.state.country.name}</h1>
//         <IntroContainer introMessage={this.state.country.intro}/>
//         <h2>TraveLlama Featured 5</h2>
//         <FeaturedFive country={this.state.country.id}/>
//         </div>
//       );
//     }
//   }

function Country(props) {
  let { id } = useParams();
  let [country, setCountry] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}`)
    .then(res => {
      let country = res.data;
      setCountry(country);
    })
  }, []);
  
  return(
    <div>
    <h1>{country.name}</h1>
    <IntroContainer introMessage={country.intro}/>
    <h2>TraveLlama Featured 5</h2>
    <FeaturedFive country={country.id}/>
    </div>
  );
}

export default Country;
