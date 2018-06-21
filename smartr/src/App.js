import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import MainContainer from './components/MainContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://nebula.wsimg.com/0bb125a23119d4f97dba0a4d526d28b8?AccessKeyId=BCC5F117586C87781719&disposition=0&alloworigin=1" className="App-logo" alt="logo" />
          {/*<h1 className="App-title">SMARTR</h1>*/}
          {/*<h5 className="App-subtitle">"Don't be a Dummy"</h5><br />*/}
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
