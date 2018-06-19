import React from 'react';
import Questions from './Questions.js'
import Answers from './Answers.js'
import QuizInfo from './QuizInfo.js'
import Buttons from './Buttons.js'
import SignUpForm from './SignUpForm.js'

class MainContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      newUser: false,
      logInNow: false,
      quizStarting: false,
      quizStarted: false,
      imLeaving: false
    }
  }

  summonNewUserForm = () => {
    this.setState({
      newUser: true,
      logInNow: false
    })
  }

  summonLoginForm = () => {
    this.setState({
      newUser: false,
      logInNow: true
    })
  }

  logUserIn = () => {
    // FETCH POST TO LOG IN USER
      console.log('boop beep boop logging user in...');
  }

  createNewUser = () => {
    // FETCH POST TO CREATE A NEW USER
    console.log('beep boop beep creating user...');
  }


// ** WHEN QUIZ IS DONE MAKE SURE YOU SET LOGGEDIN STATE BACK TO TRUE OR FALSE!! ** //
  startQuiz = () => {
    this.setState({
      loggedIn: "in a quiz",
      quizStarting: true
    })
    console.log('starting quiz...');
  }

  handleCategorySelection = () => {
    // SEND CATEGORY TO API FOR QUESTIONS
    console.log('yo i got hit');
    this.setState({
      quizStarting: "almost"
    }, () => console.log(this.state))
  }

  handleFirstQuestion = () => {
    this.setState({
      quizStarted: true,
      quizStarting: false
    })
    //startTimer()
  }

  sayGoodbyeIdiot = () => {
    this.setState({
      imLeaving: true
    })
  }

  render() {
    return (
      <div>
      <Buttons {...this.state} summonNewUserForm={this.summonNewUserForm} summonLoginForm={this.summonLoginForm} startQuiz={this.startQuiz} sayGoodbyeIdiot={this.sayGoodbyeIdiot} />
        <SignUpForm {...this.state} createNewUser={this.createNewUser} logUserIn={this.logUserIn} />
        <Questions quizStarting={this.state.quizStarting} quizStarted={this.state.quizStarted} handleCategorySelection={this.handleCategorySelection} handleFirstQuestion={this.handleFirstQuestion} imLeaving={this.state.imLeaving}/>
        <Answers quizStarted={this.state.quizStarted} />
        <QuizInfo quizStarted={this.state.quizStarted} handleFirstQuestion={this.handleFirstQuestion}/>
      </div>
    )
  }

}

export default MainContainer;
