import React, {useEffect, useState} from 'react';
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import ExperiencePost from './ExperiencePost';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

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
            <Card>
              <div className="flex_header">
                <h4 className="text-center">{props.name}</h4>
                <FaThumbsUp className="icon" size={10} onClick={() => {upVoteExperience(props.id)}} />
                <FaThumbsDown className="icon" size={10} onClick={() => {downVoteExperience(props.id)}} />
              </div>
              <div className="post-body">
                {props.description ? <ExperiencePost description={props.description} /> : ""}
              </div>
            </Card>
            {/* {posts.length > 0 ? posts.map(x => 
            <div className="post-body" key={x.id}>
            <div className="text-left section-header">{x.user_id ? x.user.name : ''} says:</div>
            </div>
          ) : ""} */}
          </li>
        }
      </div>
      );
}
export default TopExperience;