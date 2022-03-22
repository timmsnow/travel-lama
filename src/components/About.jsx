import React, { Component } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";



class About extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Container fluid className="margin">
          <Row className="center">
            <Col lg="8">
        <Card>
      <Card.Title className="center margin">Who Is TraveLama?</Card.Title>
      <Card.Body className="margin">
        
       </Card.Body>
      </Card>
      </Col>
      </Row>
      <Row className="center margin">
        <Col lg="8" className="center">
      <p className="small text-center">TraveLama was built using Ruby on Rails and React, with a little help from Bootstrap</p>
      </Col>
      </Row>
      </Container>
      </div>
     );
  }
}
 
export default About;
