import React from 'react';
import TopExperience from './TopExperience';

function Experiences(props) {
  const experiences = props.experiences

  if (experiences.length > 0)  {
    return( 
      experiences.map(x => {
        return(
    <div key={x.id}>
        {<TopExperience name={x.name} id={x.id}/>}
    </div>
    )})
  )} else {
    return(
      <div></div>
    )
  }
        
}

export default Experiences;