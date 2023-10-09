function quiz() {
    const questions = [
      'How many moons does Earth have?',
      'How many moons does Saturn have?', //Bug #1: Needed to add a comma after the second element
      'How many moons does Venus have?'
    ];
    const answers = [1, 82, 0];
  
    let score = 0; //Bug #10: not a const because we change it later so changed it to let
  
    let num = Math.floor(Math.random() * 1);
  
    // console.log(questions.count); Used for debugging #8
    for (let i = 0; i <= questions.length-1; i++) { // Bug #8 and 9: questions.length not questions.count and it should be legnth - 1 because we are starting the i count at 0
        // Could have also started i=1 for Bug 9 above ^
      const question = questions[num];
      const answer = prompt(question); //Bug 6: Need to put const in front
      if (answer == answers[num]) { 
        score++; //Bug #2: Add a + to increment the score
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
      num++;
      if (num == questions.length) { //Bug #5: Need to do 2 equals
        num = 0;
      }
    }
  
    const scoreArea = document.querySelector('#score-area'); //Bug #4: Added the # because it's an id call
    //console.log(scoreArea); Used for debugging #7 which I fixed in the html file
    scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
  }
  
  alert('Are you ready for a quiz?');
  quiz(); //Bug #3: "quiz" not "quaz"