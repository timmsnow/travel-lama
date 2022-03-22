import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
  }

    render() {
      return(
        <NavLink to="/countries"><h3>Explore</h3></NavLink>
      );
    }
  }
 
export default Home;