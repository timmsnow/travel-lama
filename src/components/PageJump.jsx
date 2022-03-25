import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PageJump(props) {
  let { id } = useParams();
  let [image, setImage] = useState('')
  
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/countries/${id}`)
  //   .then(res => {
  //     let name = res.data.name.toLowerCase().replace(/\s/g, "");
  //     let img = name + 'banner'
  //     setImage(img.split(' ').reduce((o,i)=> o[i], IMAGES)) ;
  //   })
  // });

  return(
    <div className="nav-button-container">
      <a href="#top-5" className="nav-buttons">Top 5</a>
      <a href="#basics" className="nav-buttons">Basics</a>
      <a href="#budget" className="nav-buttons">Budget</a>
      <a href="#transit" className="nav-buttons">Transit</a>
      <a href="#sleeping" className="nav-buttons">Sleeping</a>
      <a href="#safety" className="nav-buttons">Safety</a>
    </div>
  );
}

export default PageJump;