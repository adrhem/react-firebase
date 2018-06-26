import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

class App extends Component {

  constructor(props){
    super(props);
    //alert("Before Render")
  }

  render() {
    //alert("Render it!");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-primaty">Holi</button>
      </div>
    );
  }

  componentDidMount() {
    //alert("After render");
  }
}

export default App;
