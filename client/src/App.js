import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar.js'
import {BrowserRouter as Router} from "react-router-dom";
import {AllRoutes} from "./AllRoutes.jsx";
export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <AllRoutes />
      </Router>
    )
  }
}

export default App
