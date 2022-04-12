import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Top5(props) {
  const limit = 200
  const [shownDescription, setShownDescription] = useState({});
 
  const toggleDescription = (id) => {
    console.log(id)
    setShownDescription(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
  }

    return(
      <Row>
       <h2>The Top 5</h2>
       <Col m={5} className="top5-container">
         {
          props.top5.map(i=> {
            return(
              <Card key={i.id} className="top5-card">
                <div className="top5-content" onMouseEnter={() => toggleDescription(i.id)} onMouseLeave={() => toggleDescription(i.id)}>
                  <p  className="top5-post">{shownDescription[i.id] ? i.posts[0].body.substring(0, limit) + "..." : i.name}</p>
                </div>
              </Card>
            )
          })
         }
        </Col>
      </Row>
      );
}
export default Top5;