import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MainContainer from './components/MainContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SMARTR</h1>
          <h5 className="App-subtitle">"Don't be a Dummy"</h5><br />
        </header>
        {/*}<p className="App-intro">
          ...
        </p>*/}
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
