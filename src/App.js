import React, { Component } from "react";
import './App.css';
import logo from '../public/icons/logo192.png';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Webpack App</h1>
        <h1><img src={logo} /></h1>
      </div>
    );
  }
}

export default App;