import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMAGES from '../images/index.js';
import axios from 'axios';


function Top5(props) {
  const limit = 200
  const [shownDescription, setShownDescription] = useState({});
  const [hover, setHover] = useState({});

  const toggleDescription = (id) => {
    setShownDescription(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

  const toggleDark = (id) => {
    setHover(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

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
                <Card key={i.id} className="top5-card" onMouseEnter={()=>{ toggleDark(i.id)}} onMouseLeave={() =>{ toggleDark(i.id)}} style={(!hover[i.id] ? divImage : divImageDark)}>
                  <div className="top5-content" onMouseEnter={() => toggleDescription(i.id)} onMouseLeave={() => toggleDescription(i.id)}>
                   {shownDescription[i.id] ? <p  className="top5-post">{i.posts[0].body.substring(0, limit) + "..."} </p> : <h2>{i.name}</h2>}
                  </div>
                  <Button onClick={() => {upVoteExperience(i.id)}}>UpVote</Button>
                  <Button onClick={() => {downVoteExperience(i.id)}}>DownVote</Button>
                </Card>
              )
            })
          }
          </Col>
        </Row>
        );
  }
}
export default Top5;