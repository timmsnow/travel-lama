import './App.css';
import React, { useState } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {

  const [showSignUp, setShowSignUp] = useState(false)
  const [showSignIn, setShowSignIn] = useState(true)
  const [showNav, setShowNav] = useState(false)

  const showSignUpComponent = (e) => {
    setShowSignUp(true)
    setShowSignIn(false)
  }

  const showNavBar = (e) => {
    setShowNav(true)
  }

  // handleReset = () => {
  //   document.getElementById("form").reset();
  // };

  // getUsers = () => {
  //   axios.get("http://localhost:3000/api/users").then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = (event) => {
  //   const user = {
  //     name: this.state.username,
  //     email: this.state.email,
  //     password: this.state.password,
  //     password_confirmation: this.state.password_confirmation,
  //   };
  //   axios
  //     .post("http://localhost:3000/api/users", user)
  //     .then((res) => {
  //       console.log(res.data);
  //       // this.handleLogin(); erroneous????
  //       this.props.history.push("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.errors);
  //       this.setState({ errors: error.response.data.errors });
  //       this.handleReset();
  //       // this.setState.errors = ["Invalid email or Password"];
  //       // this.setState({email: ""});
  //       // this.setState.password = "";
  //     });
  // };

  return (
    <div>
    {showNav ? 
    <div className="App">
        <header className="App-header">
          <p>TraveLama</p>
        </header>
        <Navbar />
        <main>
          <Routes>
            {/* <Route exact path="/"></Route> */}
            {/* <Route exact path="/" component={Home}></Route> */}
            {/* <Route exact path="/login" component={Login}></Route> */}
            <Route exact path="/countries" element={<Countries />} />
            <Route path="countries/:id" element={<Country />}/>
            {/* <Route exact path="/logout" component={Logout}></Route> */}
            {/* <Route exact path="/contacts" component={Contacts}></Route> */}
            {/* <Route exact path="/about" component={About}></Route> */}
            <Route exact path="/about" element={<About />}></Route>
            {/* <Route exact path="/sign_in" element={<SignIn />}></Route> */}
            {/* <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/projects" component={Projects}></Route> */} 
          </Routes>
        </main>
      </div> :
    <div>
      <Container fluid className="basic-container">
          <Row className="center">
            <Col lg="8">
              <Card>
                <Card.Title className="center padding-top">Sign In To TraveLama</Card.Title>
                <Card.Body className="margin">
                  { showSignUp ? <SignUp /> : <SignIn showSignUpComponent={showSignUpComponent} showNavBar={showNavBar}/> }     
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>}
  </div>
  )

}

export default App;