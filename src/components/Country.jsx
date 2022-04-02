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
  let [experienceNames, setExperienceNames] = useState()
  let [experienceIds, setExperienceIds] = useState()
 
  useEffect(() => {
    fetchCountry();
    fetchExperiences();
  }, []);

  const fetchCountry = async () => {
    const country = await axios.get(`http://localhost:3000/countries/${id}`)
      setCountry(country.data);
      let name = country.data.name.toLowerCase().replace(/\s/g, "");
      let img = name + 'top5llama'
      setImage(img.split(' ').reduce((o,i)=> o[i], IMAGES)) ;
  }

  const fetchExperiences = async () => {
    const experiences = await axios.get(`http://localhost:3000/countries/${id}/experiences`)
      setExperienceNames(experiences.data.map(x => x.name))
      setExperienceIds(experiences.data.map(x => x.id))
  }

  
  return(
    <div>
      <CountryName name={country.name} bannerImage={country.banner_name}/>
      <PageJump />
      <IntroContainer introMessage={country.intro}/>
      <div id="top-5">
        <h2 className="hidden">TraveLlama Featured 5</h2>
        <img className="llama-banner" src={image} />
      </div>
      <FeaturedFive experienceIds={experienceIds} experienceNames={experienceNames} country={country.id}/>
    </div>
  );
}

export default Country;
