import React, {useEffect, useState} from 'react';
import ExperiencePost from './ExperiencePost';
import axios from 'axios';

function TopExperience(props) {
  let [posts, setPosts] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts =  () => {
    axios.get(`http://localhost:3000/experiences/${props.id}/posts`)
    .then((response) => {
      const posts = response.data
      setPosts(posts);
    })
  }

    return(
      <div>
        {
         <li key={props.id}> 
          <h4 className="title text-center">{props.name}</h4>
          {posts.length > 0 ? posts.map(x => 
          <div className="post-body" key={x.id}>
            <div className="text-left section-header">User says:</div>
            <ExperiencePost body={x.body} />
          </div>
          ) : ""}
        </li>
        }
      </div>
      );
}
export default TopExperience;