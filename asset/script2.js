// ***** Declaring VAR for HTML elements 
const mainEl = document.getElementById('main-page'); 
const startBtn = document.getElementById('start-btn'); 
const nextBtn = document.getElementById('next-btn'); 
const highBtn = document.getElementById('highscore-btn'); 
const saveBtn = document.getElementById('save-score-button'); 
const restartBtn = document.getElementById('restart-btn'); 
const restartBtnHigh = document.getElementById('restart-btn-high'); 
const questionContainerEl = document.getElementById('question-container'); 
const questionEl = document.getElementById('question'); 
const answerBtnEL = document.getElementById('answer-buttons'); 
const openingEl = document.getElementById('opening-text'); 
const finalEl = document.getElementById('final-page'); 
const scoreDisplay = document.getElementById('final-score'); 
const gameTimerDisplay = document.getElementById('game-timer'); 
const userInputEl = document.getElementById('username-input'); 
const highScoreEl = document.getElementById('high-score'); 

// ***** Declaring VAR with undefined value 
let randomQuestions;
let currentQuestionIndex; 
let time = 180 ;  

// ***** setting Starting time INTERVAL 
let startingTimer = setInterval(function(){

    document.getElementById("game-timer").innerHTML = time; 
    //better without MIN:SEC format 
    time --; 
    // reduce by 1 sec 
    if (time <= 0 ) { 
         // when timeout happends
        clearInterval (startingTimer); 
        //stop timer 
        document.getElementById("game-timer").innerHTML = "timeout"
        // display "timeout" message 
    }
}, 1000); 



// ***** ADDEVENTListenrs to Buttons 
startBtn.addEventListener( 'click', startQuiz);
// adding click event to startbutton 
nextBtn.addEventListener( 'click', () => { 
    currentQuestionIndex++; 
    setNextQuestion(); 
})
restartBtn.addEventListener('click', restartQuiz);
restartBtnHigh.addEventListener('click', restartQuiz);
saveBtn.addEventListener('click', saveScore); 
highBtn.addEventListener( 'click' , function(event){
    event.preventDefault(); 
    showHighScorePage(); 
})

// ***** FUNCTION to RELOAD starting page 
function restartQuiz (event) { 
    event.preventDefault(); 
    window.location.reload(); 
}

// ***** FUNCTION to start quiz 
function startQuiz(){
    time = 180; 
   
    openingEl.classList.add('hide'); 
    // removing opening text div 
    startBtn.classList.add('hide');
    // hide start button 
    gameTimerDisplay.classList.remove('hide'); 
    // remove hide from timer 

    randomQuestions = questions.sort( () => Math.random() - .5); 
    // taking 'questions' array and shuffeling questions 
    currentQuestionIndex = 0; 
    // current question displaying will be set to index 0 in array. 
    questionContainerEl.classList.remove('hide'); 
    //showing Q/A element 

    setNextQuestion(); 
    //staring setNextQuestion function
    
};


// ***** FUNCTION to setting the next questions 
function setNextQuestion() {
    resetState(); 
    //clear current Q/A 
    showQuestion(randomQuestions[currentQuestionIndex]); 
    // show question from random question array 
    // console.log (randomQuestions); 
}; 

// ***** FUNCTION to redering quesitons to HTML page 
function showQuestion (question) {
    // question from questions array 
    // console.log(question); 
    questionEl.innerText = question.question; 
    // setting innertext of questiondiv with question from array 
    // console.log(question); 

    question.answers.forEach( answer => {
        //  looping thru each answers from 'questions array'
        const button = document.createElement('button'); 
        // creating button element for each answer 
        button.innerText = answer.text ; 
        // setting innertext of each answer with text 
        button.classList.add('btn'); 
        // add btn class to button
        // console.log(answer); 
        //answer is answers array for each question 
        // console.log(answers, 'answers'); 
        // error showing answers is not defined 


        //checking if answer it correct or not (before selecting. this is labeling)
        if (answer.correct) { 
            button.dataset.correct = answer.correct; 
            // settinh data attribute for answer with correct=true set 
            // it will be appear as 'data-correct ="true" in html
        }
           
        button.addEventListener('click', selectAnswer ); 
            // add eventlistener to new buttons that is created with answer text

        answerBtnEL.appendChild(button); 
            // appeding buttons to its parent div 
    });

}; 



// ***** FUNCTION for clearing HTML so new questions can render 
function resetState (){

    nextBtn.classList.add('hide') 
    // hide next button
    while (answerBtnEL.firstChild) 
    {answerBtnEL.removeChild(answerBtnEL.firstChild)}
    // While answerButtonElement has a firstchild/button/ then removes the firstchild, and if no more first child, then stop
    // only removes existing button from acutal HTML 
}; 


// ***** FUNCTION for setting data attr for each answers 
function selectAnswer (event) {
   
    const selectedBtn = event.target; 
    const correct = selectedBtn.dataset.correct; 
    // correct is  selectedBTN that has data-correct attribute which only correct answer button has it 

    Array.from(answerBtnEL.children).forEach(button => {
    
        setStatusClass(button, button.dataset.correct)
        // looping thru answer buttons and setting class based on 'data-correct' attribute
        // this makes buttons to change its color based if selcted answer is correct/wrong
    }); 
    
    checkAnswer(); 

    if (randomQuestions.length > currentQuestionIndex + 1 ) { 
        //checking if there is more questions left 
        nextBtn.classList.remove ( 'hide' ); 
    } else { 
        // if there is no more question left 
        endQuiz(); }
}; 

// ***** FUNCTION  for adding answer button status ' correct' or 'wrong' 
function setStatusClass(element, correct) {
    // console.log (element); 
    clearStatusClass(element); 
    if (correct) { 
        element.classList.add('correct'); 
    }
    else {
        element.classList.add('wrong'); 
    }
}

// ***** FUNCTION for removing answer button status ' correct' or 'wrong' 
function clearStatusClass(element) { 
    // console.log (element) 
    element.classList.remove('correct'); 
    element.classList.remove('wrong'); 
}


// ***** FUNCTION for comparing data attr of answer buttons with clicked answer button
function checkAnswer ( element, correct ){
    if ( !correct ) { 
        time -= 10; 
    }
}

// ***** FUNCTION for moving to final-page after last question 
function endQuiz () {
    clearInterval(startingTimer); 
    //stop the timer 
    gameTimerDisplay.classList.add('hide'); 
    mainEl.classList.add('hide'); 
    //clear inside of card 
    finalEl.classList.remove('hide'); 
    //load final-page 
    showScore(); 
}

// ***** FUNCTION for converting time to score and rendering to HTML 
function showScore() { 
    let score = time; 
    scoreDisplay.innerText = 'your score ' + score; 
//    console.log(score); 
}


// ***** SETTING for LocalStorage 
const viewHighScoreEL = document.getElementById('high-score-link'); 
const userNameEl = document.getElementById('usernames'); 
const scoreEl = document.getElementById( 'scores' ); 
let localUsers= []; 
let userNameIndex = 0; 
let scoreIndex = 0; 
// getting leaderboard from localstorage or start with empty array if none 
const leaderboard = JSON.parse( localStorage.getItem( 'leaderboard')) || []; 
// merging localuser array with leaderboard arry and return a new array 
localUsers = localUsers.concat(leaderboard); 


// add evenlistener to button 
viewHighScoreEL.addEventListener( 'click' , showHighScorePage); 


// ***** FUNCTION getting stored data from localstorage and rendering to HTML page 
function showHighScorePage() { 
    mainEl.classList.add( 'hide' ); 
    finalEl.classList.add( 'hide' ); 
    highScoreEl.classList.remove( 'hide' ); 
    //clear inside of card 

    localUsers.forEach( () => {
        users = document.createElement( 'li' ); 
        users.innerText = localUsers[userNameIndex].userId; 
        userNameEl.appendChild(users); 
        userNameIndex++; 
        // foreach localusers in array, add li to html element & text with userinput
        // & append it to ol html element & index increase by 1 

        scores = document.createElement( 'li' ); 
        scores.innerText = localUsers[scoreIndex].scoreId; 
        scoreEl.appendChild(scores); 
        scoreIndex++; 
        // foreach localusers scores in array, add li to html element & text with userinput
        // & append it to ol html element & index increase by 1 
    }
    )}

// ***** FUNCTION saving current user's score to localstorage and sorting top scores 
function saveScore (event) { 
    
    if ( !userInputEl ) {
        event.preventDefault(); 
    } 
    // preventing empty value saved 
    else { 
        let score = time;  
        console.log (score); 
        let userScore = { 
            userId: userInputEl.value.trim().toUpperCase(), 
            Score: score
        }
        // console.log(score); 
        leaderboard.push(userScore);  
        // push userScore to leaderboard array 
        leaderboard.sort( (a,b) => b.Score - a.Score ); 
        // and sort by comparing value 
        leaderboard.splice(5); 
        // removing elements  in leaderboad array from index 5
        // this will limit to 5 sets to be stored in leaderboard array
        localStorage.setItem( 'leaderboard' , JSON.stringify(leaderboard)); 
        // setting leaderboard to loacalstorage 
    }
}


