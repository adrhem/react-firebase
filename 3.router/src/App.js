import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {

  render() {
    //alert("Render it!");
    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Main />
        </div>
      </div>
    );
  }

  componentDidMount() {
    //alert("After render");
  }
}

export default App;
