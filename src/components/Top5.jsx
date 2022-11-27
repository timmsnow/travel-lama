import React, {useState} from 'react';
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '../images/index.js';
import axios from 'axios';


function Top5(props) {
  const limit = 280
  const [shownDescription, setShownDescription] = useState({});
  const [hover, setHover] = useState({});
  
  const toggleDarkAndDescription = (id) => {
    setHover(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
    setShownDescription(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

  const upVoteExperience = (id) => {
    const params = {
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
  
  if (props) {

    return(
      <Row>
         <h2>The Top 5</h2>
         <Col m={5} className="top5-container">
           {
             props.top5.map(i=> {
              var img = i.name
              var im = img.split(' ')[0].split(' ').reduce((o,i)=> o[i], (IMAGES))
              var divImage = {
                backgroundImage : "url(" + im + ")"  
              };
              // style={divImage}
              var divImageDark = {
                backgroundImage : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + im + ")"  
              };
              return(
                <div key={i.id}>
                  <Card className="top5-card" onMouseEnter={()=>{ toggleDarkAndDescription(i.id)}} onMouseLeave={() =>{ toggleDarkAndDescription(i.id)}} style={(!hover[i.id] ? divImage : divImageDark)}>
                    <div className="top5-content">
                     {shownDescription[i.id] ? <p  className="top5-post">{i.description.substring(0, limit) + "..."} </p> : <h2>{i.name}</h2>}
                    </div>
                  </Card>

                  <div className="upvote_icons">
                    <FaThumbsUp className="icon" size={10} onClick={() => {upVoteExperience(i.id)}} />
                    <FaThumbsDown className="icon" size={10} onClick={() => {downVoteExperience(i.id)}} />
                  </div>
                </div>
              )
            })
          }
          </Col>
        </Row>
        );
  }
}
export default Top5;