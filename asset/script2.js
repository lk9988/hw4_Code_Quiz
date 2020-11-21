
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

//********** NEED TO CLEANUP CODE & ORDER  */
// ********* SECOND RESTART BUTTON STILL NOT WORKING... SOMETHING IS MISSING 

let randomQuestions;
let currentQuestionIndex; 
// inital value would be undefined 
let time = 180 ;  
//initial time 
// let score = 0; 

startBtn.addEventListener( 'click', startQuiz);
// adding click event to startbutton 
nextBtn.addEventListener( 'click', () => { 
    currentQuestionIndex++; 
    setNextQuestion(); 
})
// by clicking the next button, currentQuestionIndex increment by 1 and  start setNextQuestion function 
// saveBtn.addEventListener (); 

restartBtn.addEventListener('click', restartQuiz);
restartBtnHigh.addEventListener('click', restartQuiz);

function restartQuiz (event) { 
    event.preventDefault(); 
    window.location.reload(); 
}


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

function setNextQuestion() {

    resetState(); 
    //clear current Q/A 

    showQuestion(randomQuestions[currentQuestionIndex]); 
    // show question from random question array 
    // console.log (randomQuestions); 


}; 


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

function resetState (){


    // clearStatusClass(document.body)
    // // clearing background color after answer is selected and show green / red 
    // ***************** removing above
    nextBtn.classList.add('hide') 
    // hide next button
    while (answerBtnEL.firstChild) 
    {answerBtnEL.removeChild(answerBtnEL.firstChild)}
    // While answerButtonElement has a firstchild/button/ then removes the firstchild, and if no more first child, then stop
    // only removes existing button from acutal HTML 
    
    
    }; 

function selectAnswer (event) {
   
    const selectedBtn = event.target; 
    
    const correct = selectedBtn.dataset.correct; 
    // correct is  selectedBTN that has data-correct attribute which only correct answer button has it 

    // setStatusClass(document.body, correct); 
    // *************** remove this 

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
function checkAnswer ( element, correct ){
    if ( !correct ) { 
        time -= 10; 
    }

}


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

function showScore() { 
    let score = time; 
    scoreDisplay.innerText = 'your score ' + score; 
   console.log(score); 
}
// !!!!!!!!!! timeleft is 66 but score is 55 ... what is wrong ? 






let startingTimer = setInterval(function(){


    // min = parseInt(time/60); 
    // sec = time % 60 ; 

    // document.getElementById("game-timer").innerHTML = min + ":" + sec ; 
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

// clearing html and show score with 
//'retake button' and 'view high score' button 



// function that add/remove answer status ' correct' or 'wrong' 
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

function clearStatusClass(element) { 
    // console.log (element) 
    element.classList.remove('correct'); 
    element.classList.remove('wrong'); 
   
}

// ****** or 

// maybe for fixing score = remainingtime problem 
// for this let score = 0; -> as global var 

// need to add final score page 
// localstorage 

// const viewHighScoreEL = document.getElementById('high-score'); 
const userNameEl = document.getElementById('usernames'); 
const scoreEl = document.getElementById( 'scores' ); 

let localUsers= []; 
let userNameIndex = 0; 
let scoreIndex = 0; 

const leaderboard = JSON.parse( localStorage.getItem( 'leaderboard')) || []; 
localUsers = localUsers.concat(leaderboard); 


saveBtn.addEventListener('click', saveScore); 

const viewHighScoreEL = document.getElementById('high-score-link'); 

highBtn.addEventListener( 'click' , function(event){
    event.preventDefault(); 
    showHighScorePage(); 
})

viewHighScoreEL.addEventListener( 'click' , showHighScorePage); 

function showHighScorePage() { 
    mainEl.classList.add( 'hide' ); 
    finalEl.classList.add( 'hide' ); 
    highScoreEl.classList.remove( 'hide' ); 

    localUsers.forEach( () => {
        users = document.createElement( 'li' ); 
        users.innerText = localUsers[userNameIndex].userId; 
        userNameEl.appendChild(users); 
        userNameIndex++; 

        scores = document.createElement( 'li' ); 
        scores.innerText = localUsers[scoreIndex].Score; 
        scoreEl.appendChild(scores); 
        scoreIndex++; 
    }
    )}


function saveScore () { 
    if ( !userInputEl ) return;  
    else { 
        let score = time;  
        console.log (score); 
        let userScore = { 
            userId: userInputEl.value.trim().toUpperCase(), 
            Score: score
        }
        leaderboard.push(userScore);  
        leaderboard.sort( (a,b) => b.Score - a.Score ); 
        leaderboard.splice(10); 
        localStorage.setItem( 'leaderboard' , JSON.stringify(leaderboard)); 
    }

}


