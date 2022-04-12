import React, { Component } from 'react';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';


class SignIn extends Component {
  state = { name: '', email: '', password: '', password_confirmation: '' }

  userInputsHandler = (e) =>{
    this.setState( {[e.target.name]: e.target.value} )
  }

  addUser = () => {
    let params = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    };
    axios.post(`http://localhost:3000/users`, params)
    .then((response) => {
      console.log(response)
    })
  }

  render() { 
    return (
      <div>
        <Container fluid className="margin">
          <Row className="center">
            <Col lg="8">
        <Card>
      <Card.Title className="center margin">Sign In To TraveLama</Card.Title>
      <Card.Body className="margin">
      <Form>
        <Form.Group className="mb-3" controlId="formAddUser">
          <Form.Label>Username</Form.Label>
          <input type="text" placeholder="User Name" name="name" value={this.state.name} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddUser">
          <Form.Label>Email</Form.Label>
          <input type="text" placeholder="User Name" name="email" value={this.state.email} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddUser">
          <Form.Label>Password</Form.Label>
          <input type="text" placeholder="User Name" name="password" value={this.state.password} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddUser">
          <Form.Label>Password Confirmation</Form.Label>
          <input type="text" placeholder="User Name" name="password_confirmation" value={this.state.password_confirmation} onChange={this.userInputsHandler}  />
        </Form.Group>
      </Form>
      <Button value="submit" type="submit" onClick={this.addUser}>Sign Up</Button>
       </Card.Body>
      </Card>
      </Col>
      </Row>
      {/* <Row className="center margin">
        <Col lg="8" className="center">
      <p className="small text-center"></p>
      </Col>
      </Row> */}
      </Container>
      </div>
     );
  }
}
 
export default SignIn;