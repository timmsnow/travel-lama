import React from 'react';
import TopExperience from './TopExperience';

function FeaturedFive(props) {
  return(
    <div>
      <div className="section-container">
        <h3>Top Experiences</h3>
          <TopExperience names={props.experienceNames} ids={props.experienceIds}/>
      </div>
    </div>
  );
}

export default FeaturedFive;