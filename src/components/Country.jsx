import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import IntroContainer from './IntroContainer';
import FeaturedFive from './FeaturedFive';
import CountryName from './CountryName';
import PageJump from './PageJump';
import IMAGES from '../images/index.js';


function Country(props) {
  let { id } = useParams();
  let [country, setCountry] = useState({});
  let [image, setImage] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}`)
    .then(res => {
      let country = res.data;
      setCountry(country);
      let name = country.name.toLowerCase().replace(/\s/g, "");
      let img = name + 'top5llama'
      setImage(img.split(' ').reduce((o,i)=> o[i], IMAGES)) ;
    })
  }, []);
  
  return(
    <div>
      <CountryName name={country.name} bannerImage={country.banner_name}/>
      <PageJump />
      <IntroContainer introMessage={country.intro}/>
      <div id="top-5">
        <h2 className="hidden">TraveLlama Featured 5</h2>
        <img className="llama-banner" src={image} />
      </div>
      <FeaturedFive country={country.id}/>
    </div>
  );
}

export default Country;
