import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IntroContainer from './IntroContainer';
import FeaturedFive from './FeaturedFive';
import CountryName from './CountryName';

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
    <CountryName name={country.name} bannerImage={country.banner_name}/>
    <IntroContainer introMessage={country.intro}/>
    <h2>TraveLlama Featured 5</h2>
    <FeaturedFive country={country.id}/>
    </div>
  );
}

export default Country;
