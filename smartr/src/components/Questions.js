import React from 'react';

const Questions = (props) => {

  if (props.quizStarting === true){
    return (
      <div>
        <br/>
        Please Select a Smartr Category:
        <br/>
        %dropdown menu of categories%
        <button type='submit' onClick={props.handleCategorySelection}>Enter/Select</button>
      </div>
    )
  } else if (props.quizStarting === 'almost'){
    return (
      <div>
        <br/>
        Please Select Difficulty of Question 1:
        <br/>
        %radio buttons of difficulty%
        <button type='submit' onClick={props.handleFirstQuestion} >Prepare Yourself...</button>
      </div>
    )
  } else if (props.quizStarted === true){
<<<<<<< HEAD
    console.log('yooooooooooo');

    //let question;

    // let question = async () => {
    //   let json = await fetch(`https://opentdb.com/api.php?amount=1`);
    //   let q = await json.json();
    //   return q
    // };
    //
    // let a = question();
    //
    // console.log(a);

    async function showAvatar() {
      let githubResponse = await fetch(`https://opentdb.com/api.php?amount=1`);
      let githubUser = await githubResponse.json();

      console.log(githubUser);
    }

    let b = showAvatar();
    console.log(b);
    console.log(showAvatar());


=======
>>>>>>> 02180e2a108cb63467bf8aa0eae52f048676823c
    return (
    <div>
      <p>
      Which of the following is the right answer to this very important question?
      </p>
    </div>
    )
  } else if (props.imLeaving === true){
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

export default Questions;
