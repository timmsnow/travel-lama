import React from 'react';
import ExperiencePost from './ExperiencePost';


function TopExperience(props) {
  return(
    <div>
      {props.names}
      <ExperiencePost id={props.ids}/>
    </div>
  );
}

export default TopExperience;