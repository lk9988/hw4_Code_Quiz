# hw4_code_quiz

- setInterval to do the "timed" functionality
- clearInterval to stop the timeout
- currentScore / TimeLeft
- VAR questions - array / object array

[ { } ]
// question text
// list of questions answers
// correct answers - think about how to compare values
// JS Loop or HTML hide/display

- VAR pointers // indez - current position in he question array

- highscore store / display

GIVEN I am taking a code quiz
WHEN I click the start button

function startGame (){};

// var startButton = addEventListenr("click",startGame);

THEN a timer starts and I am presented with a question

// set starting score =75
// start the interval to begin the score countdown
// present the question = create new HTML elements for my question content
-> set the #question div's inner HTML
-> append a h2 for the question text
-> append a new button for each choice

WHEN I answer a question

// when user clicks one of my answer buttons

THEN I am presented with another question

// Increase our pointer by 1
// clear

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

```

```
