import React, { Component } from 'react';
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';


class SignUp extends Component {
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
    .catch(error => this.setState( { errors: error.response.data.errors }));
  }

  render() { 
    return (
      <div>
      <Form className="sign-in-form">
        <Form.Group className="mb-1 form-inputs" controlId="formAddUser">
          <Form.Label>Username</Form.Label>
          <input type="text" name="name" value={this.state.name} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-1 form-inputs" controlId="formAddUser">
          <Form.Label>Email</Form.Label>
          <input type="text" name="email" value={this.state.email} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-1 form-inputs" controlId="formAddUser">
          <Form.Label>Password</Form.Label>
          <input type="password" name="password" value={this.state.password} onChange={this.userInputsHandler}  />
        </Form.Group>
        <Form.Group className="mb-1 form-inputs" controlId="formAddUser">
          <Form.Label>Password Confirmation</Form.Label>
          <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.userInputsHandler}  />
        </Form.Group>
      </Form>
      <Button className="margin-bottom" value="submit" type="submit" onClick={this.addUser}>Sign Up</Button>
      {this.state.errors ? this.state.errors.map(
        error => 
          <p className="errors">{error}</p>
        ): ""
      }
      </div>
     );
  }
}
 
export default SignUp;