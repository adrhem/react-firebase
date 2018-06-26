import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {

  constructor(props){
    super(props);
    this.countries = [
      {
        value: 'MX', 
        display: 'México'
      },
      {
        value: 'US', 
        display: 'United States'
      },
    ];
    //alert("Constructor");
  }

  render() {
    //alert("Render it!");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Form states={this.countries} />
        </div>
      </div>
    );
  }

  componentDidMount(){
    //alert("After Render");
  }
}

export default App;
