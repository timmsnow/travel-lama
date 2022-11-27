import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './About';
// import SignIn from './SignIn';
import Navbar from './Navbar';
import Countries from './Countries';
import Country from './Country';

function Home() {
  return (
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
      <Home />
    </div>
  );
}

export default Home;