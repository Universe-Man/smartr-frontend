import React from 'react';

class Buttons extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  handleLoginClick = (event) => {
    console.log('inside login button');
    console.log(event.target);
  }

  handleSignupClick = (event) => {
    console.log('inside signup click');
    console.log(event.target);
    this.props.summonNewUserForm()
  }

  handleLogoutClick = (event) => {
    console.log('inside logout click');
    console.log(event.target);
  }

  handleStartQuiz = (event) => {
    console.log('starting quiz...');
    console.log(event.target);
  }

  render(){
    if (this.props.loggedIn === false) {

      return(
        <div>
          <button id='login-button' onClick={this.handleLoginClick}>Login</button>
          <button id='signup-button' onClick={this.handleSignupClick}>Sign Up</button>
        </div>
      )
    } else if (this.props.loggedIn === true) {
      return(
        <div>
          <button id='logout-button' onClick={this.handleLogoutClick}>Logout</button>
          <button id='start-quiz-button' onClick={this.handleStartQuiz}>Start Quiz</button>
        </div>
      )
    }
  }
}

export default Buttons;
