import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleReset = () => {
    document.getElementById("form").reset();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3000/sessions", userInfo)
      .then((response) => {
        console.log("Logging in...");
        axios.defaults.headers.common["Authorizaton"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id);
        this.props.showNavBar();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errors: "Invalid Email or Password" });
        this.handleReset();
      });
  };

  render() {
    return (
      <div className="center margin-top">
        <Form className="sign-in-form" id="form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <p className="text-danger">{this.state.errors}</p>
          </div>
          <Form.Group className="form-inputs">
            <Form.Label htmlFor="email">Email:</Form.Label>
            <Form.Control type="text" name="email" id="email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group className="form-inputs">
            <Form.Label htmlFor="password">Password:</Form.Label>
            <Form.Control type="password" name="password" id="password" onChange={this.handleChange} />
          </Form.Group>
          <div className="center">
          <Button onClick={this.handleSubmit}>Sign In</Button>
          </div>
          <div className="flex-right">
          <p>No Account?</p>
          <Button onClick={this.props.showSignUpComponent}> Sign Up</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignIn;