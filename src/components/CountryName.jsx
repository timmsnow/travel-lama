import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IMAGES from '../images/index.js';


function CountryName(props) {
  let { id } = useParams();
  let [image, setImage] = useState('')
  
  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}`)
    .then(res => {
      let name = res.data.name.toLowerCase().replace(/\s/g, "");
      let img = name + 'banner'
      setImage(img.split(' ').reduce((o,i)=> o[i], IMAGES)) ;
    })
  });

  return(
    <div>
      <img className='country-banner' src={image} alt=""/>
    <h1 className='hidden'>{props.name}</h1>
    </div>
  );
}

export default CountryName;