import React, {useEffect, useState} from 'react';
import ExperiencePost from './ExperiencePost';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function TopExperience(props) {
  let [posts, setPosts] = useState('');

  useEffect(() => {
    const fetchPosts =  () => {
      axios.get(`http://localhost:3000/experiences/${props.id}/posts`)
      .then((response) => {
        const posts = response.data
        setPosts(posts);
      })
    }
    fetchPosts();
  }, []);


  const upVoteExperience = (id) => {
    let params = {
      experience_id: id,
      vote_cd: 1,
    };
    axios.post(`http://localhost:3000/experience_votes`, params)
    .then((response) => {
      console.log(response);
    })
  }

  const downVoteExperience = (id) => {
    let params = {
      experience_id: id,
      vote_cd: 2,
    };
    axios.post(`http://localhost:3000/experience_votes`, params)
    .then((response) => {
      console.log(response);
    })
  }

    return(
      <div>
        {
         <li key={props.id}> 
          <h4 className="title text-center">{props.name}</h4>
          <Button onClick={() => {upVoteExperience(props.id)}}>UpVote</Button>
          <Button onClick={() => {downVoteExperience(props.id)}}>DownVote</Button>
          {posts.length > 0 ? posts.map(x => 
          <div className="post-body" key={x.id}>
            <div className="text-left section-header">{x.user_id ? x.user.name : ''} says:</div>
            <ExperiencePost body={x.body} />
          </div>
          ) : ""}
        </li>
        }
      </div>
      );
}
export default TopExperience;