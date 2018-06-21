import React from 'react';

class Questions extends React.Component {
  state = {
    difficulty: '',
  }

  handleDifficulty = (event) => {
    this.setState({
      difficulty: event.target.name
    }, () => console.log(this.state.difficulty))
  }

  handleDifficultySubmit = (event) => {
    event.preventDefault();
    this.props.handleFirstQuestion(this.state.difficulty);
  }

  render() {
    if (this.props.quizStarting === true){
      return (
        <div>
          <br/>
          Please Select a Smartr Category:
          <br/>
          %dropdown menu of categories%
          <button type='submit' onClick={this.props.handleCategorySelection}>Enter/Select</button>
        </div>
      )
    } else if (this.props.quizStarting === 'almost'){
      return (
        <div>
          <br/>
          Please Select Difficulty of Question 1:
          <br/>
          <form onSubmit={this.handleDifficultySubmit} >
            <input type="radio" checked={this.state.difficulty === "easy"} name="easy" onClick={this.handleDifficulty} />Easy<br />
            <input type="radio" checked={this.state.difficulty === "medium"} name="medium" onClick={this.handleDifficulty} />Medium<br />
            <input type="radio" checked={this.state.difficulty === "hard"} name="hard" onClick={this.handleDifficulty} />Hard<br />
            <button type='submit' >Prepare Yourself...</button>
          </form>
        </div>
      )
    } else if (this.props.quizStarted === true){
      return (
      <div>
        <p>
        {this.props.question}
        </p>
      </div>
      )
    } else if (this.props.imLeaving === true){
        return (
        <div>
          <h1>
          It's okay to be bad at stuff. Next time.
          </h1>
          <h5>*under breathe*</h5>
          <h5>...idiot.</h5>
        </div>
        )
    } else {
      return null;
    }
  }
}

export default Questions;
