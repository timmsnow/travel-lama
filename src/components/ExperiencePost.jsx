import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ExperiencePost(props) {
  let { id } = useParams();
  let [experienceNames, setExperienceNames] = useState('');
  let [experienceIds, setExperienceIds] = useState('');
  
  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}/experiences`)
    .then(res => {
      let experienceNames = res.data.map(e => e.name);
      let experienceIds = res.data.map(e => e.id);
      console.log();
      setExperienceNames(experienceNames);
      setExperienceIds(experienceIds);
    })
  }, []);

  return(
    <div>
      noooooo
    </div>
  );
}

export default ExperiencePost;