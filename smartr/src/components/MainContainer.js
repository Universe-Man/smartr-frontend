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
      category: '',
      quizStarted: false,
      imLeaving: false,
      difficulty: '',
      question: '',
      answers: null,
      questionCount: 0,
      correctQuestionCount: 0,
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

  logUserIn = (user) => {
    // FETCH POST TO LOG IN USER
    console.log('boop beep boop logging user in...');
    fetch(`http://localhost:3001/api/v1/sessions`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: user.inputName,
          inputPassword: user.inputPassword
       })
     })
     .then(r => r.json())
     .then(user => console.log(user))
  }

  createNewUser = (newUser) => {
    // FETCH POST TO CREATE A NEW USER
    console.log('beep boop beep creating user...');
    fetch(`http://localhost:3001/api/v1/users`, {
		    method: "POST",
		    headers: {"Content-Type": "application/json"},
		    body: JSON.stringify({
	        name: newUser.inputName,
	        inputPassword: newUser.inputPassword
	     })
     })
     .then(r => r.json())
     .then(newUser => console.log(newUser))
  }


// ** WHEN QUIZ IS DONE MAKE SURE YOU SET LOGGEDIN STATE BACK TO TRUE OR FALSE!! ** //
  startQuiz = () => {
    this.setState({
      loggedIn: "in a quiz",
      quizStarting: true
    })
    console.log('starting quiz...');
  }

  handleCategorySelection = (event) => {
    // SEND CATEGORY TO API FOR QUESTIONS
    console.log(event.target.value);

    this.setState({
      quizStarting: "almost",
      category: event.target.value,
    }, () => console.log(this.state))
  }

  handleFirstQuestion = (difficulty) => {
    this.setState({ difficulty });

    fetch(`http://localhost:3001/api/v1/trivia`, {
		    method: "POST",
		    headers: {"Content-Type": "application/json"},
		    body: JSON.stringify({
	        difficulty: difficulty,
          category: this.state.category,
	     })
     })
     .then(r => r.json())
     .then(data => {
       const question = data.question.replace(/&#039;/g, `'`).replace(/&quot;/g, `"`);
       const correct = data.correct_answer.replace(/&#039;/g, `'`).replace(/&quot;/g, `"`);
       const incorrects = data.incorrect_answers.split(',');
       const incorrect1 = incorrects[0].slice(2, -1).replace(/&#039;/g, `'`).replace(/&quot;/g, `"`);
       const incorrect2 = incorrects[1].slice(2, -1).replace(/&#039;/g, `'`).replace(/&quot;/g, `"`);
       const incorrect3 = incorrects[2].slice(2, -2).replace(/&#039;/g, `'`).replace(/&quot;/g, `"`);
       const answers = [correct, incorrect1, incorrect2, incorrect3];

       this.setState({
         quizStarted: true,
         quizStarting: false,
         question: question,
         answers: answers,
       })
   })
  }

  submitAnswer = (event) => {
   //else {
      //console.log(event.target.id);
      //console.log(this.state.correctQuestionCount);
      if (event.target.id === "1") {
        this.setState({
          correctQuestionCount: this.state.correctQuestionCount + 1,
          questionCount: this.state.questionCount + 1
        }, () => console.log(this.state.correctQuestionCount, this.state.questionCount))
      } else {
        this.setState({
          questionCount: this.state.questionCount + 1
        }, () => console.log(this.state.correctQuestionCount, this.state.questionCount))
      }

      this.handleFirstQuestion(this.state.difficulty);
    //}
  }

  shouldComponentUpdate() {
    if (this.state.questionCount > 7) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    if (this.state.questionCount === 7) {
      this.setState({
        quizStarting: false,
        quizStarted: false,
        imLeaving: true,
        questionCount: 8,
      })
    }
  }

  restart = () => {
    this.setState = {
      loggedIn: false,
      newUser: false,
      logInNow: false,
      quizStarting: false,
      category: '',
      quizStarted: false,
      imLeaving: false,
      difficulty: '',
      question: '',
      answers: null,
      questionCount: 0,
      correctQuestionCount: 0,
    }
  }

  render() {
    return (
      <div>
      <Buttons {...this.state} summonNewUserForm={this.summonNewUserForm} summonLoginForm={this.summonLoginForm} startQuiz={this.startQuiz} sayGoodbyeIdiot={this.sayGoodbyeIdiot} />
        <SignUpForm {...this.state} createNewUser={this.createNewUser} logUserIn={this.logUserIn} />
        <Questions quizStarting={this.state.quizStarting} quizStarted={this.state.quizStarted} handleCategorySelection={this.handleCategorySelection} handleFirstQuestion={this.handleFirstQuestion} imLeaving={this.state.imLeaving} question={this.state.question} correct={this.state.correctQuestionCount} restart={this.restart}/>
        <Answers quizStarted={this.state.quizStarted} answers={this.state.answers} submitAnswer={this.submitAnswer}/>
        <QuizInfo quizStarted={this.state.quizStarted} handleFirstQuestion={this.handleFirstQuestion}/>
      </div>
    )
  }

}

export default MainContainer;
