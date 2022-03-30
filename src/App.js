import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
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
          {/* <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/projects" component={Projects}></Route> */} 
        </Routes>
      </main>
      <Home />
    </div>
  );
}


export default App;