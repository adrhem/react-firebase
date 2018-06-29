import React, { Component } from 'react';
import './assets/css/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
