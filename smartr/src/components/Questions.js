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
          <select onChange={this.props.handleCategorySelection}>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
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
          <h1>You answered {this.props.correct} out of 7 questions correctly.</h1>
          <button onSubmit={this.props.restart}><h1>Restart?</h1></button>
        </div>
        )
    } else {
      return null;
    }
  }
}

export default Questions;
