import React, {useState} from 'react';

function ExperiencePost(props) {  
  const limit = 200
  const [showAll, setShowAll] = useState(false);
  const toShow = props.body.substring(0, limit) + "...";

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (props.body.length <= limit) {
    return <div>{props.body}</div>
  }
  
  if (showAll) {
    return <div> 
      {props.body} 
      <button className="no-btn" onClick={showLess}>  less</button> 
    </div>
  }
  
  return(
    <div>
       "{toShow}"
       <button className="no-btn" onClick={showMore}>  more</button>
    </div>
    )
        }

export default ExperiencePost;