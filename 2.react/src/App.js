import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends React.Component {

  constructor(props){
    super(props);
    this.countries = [
      {
        value: 'MX', 
        display: 'México'
      },
      {
        value: 'AR', 
        display: 'Argentina'
      },
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Form countries={this.countries} />
        </div>
      </div>
    );
  }

  componentDidMount(){
    //More information
  }
}

export default App;