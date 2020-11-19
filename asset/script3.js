const mainEl = document.getElementById('main-page'); 
const startBtn = document.getElementById('start-btn'); 
const nextBtn = document.getElementById('next-btn'); 
const highBtn = document.getElementById('highscore-btn'); 
const saveBtn = document.getElementById('save-score-button'); 
const restartBtn = document.getElementById('restart-btn'); 
const questionContainerEl = document.getElementById('question-container'); 
const questionEl = document.getElementById('question'); 
const answerBtnEL = document.getElementById('answer-buttons'); 
const openingEl = document.getElementById('opening-text'); 
const finalEl = document.getElementById('final-page'); 
const scoreEl = document.getElementById('final-score'); 
const gameTimerDisplay  = document.getElementById('game-timer'); 
const userInputEl = document.getElementById('username'); 
const highScoreEl = document.getElementById('high-score-page'); 
const viewHighScoreEL = document.getElementById( 'high-score-link'); 

let randomQuestions;
let currentQuestionIndex; 
let time = 180; 

startBtn.addEventListener( "click" , startQuiz );
// adding click event to startbutton 
nextBtn.addEventListener( "click" , () => { 
    currentQuestionIndex++; 
    setNextQuestion(); 
})

saveBtn.addEventListener ('click' , submitScore ); 
highBtn.addEventListener ('click' , showHighScore ); 

let timeLeft = 180; 
let interval; 

function timerStart(){
    interval = setInterval( function() { 
        if (timeLeft <= 0 ) {
            clearInterval(timeLeft = 0); 
        }
    gameTimerDisplay.innerHTML = ( 'Time: ' + timeLeft ); 
    timeLeft -= 1; 
    }, 1000); 
}
    


function startQuiz (){
    openingEl.classList.add('hide'); 
    // removing opening text div 
    startBtn.classList.add('hide');
    // hide start button 
    gameTimerDisplay.classList.remove('hide'); 
    // remove hide from timer 
    timerStart(); 

    randomQuestions = questions.sort( () => Math.random() - .5); 
    // taking 'questions' array and shuffeling questions 
    currentQuestionIndex = 0; 
    // current question displaying will be set to index 0 in array. 
    questionContainerEl.classList.remove('hide'); 
    //showing Q/A element 

    setNextQuestion(); 
    //staring setNextQuestion function
    

}

function setNextQuestion() {
    resetState(); 
    //clear current Q/A 
    showQuestion(randomQuestions[currentQuestionIndex]); 
    // show question from random question array 
    // console.log (randomQuestions); 
}

function showQuestion (question) {

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
        if (answer.correct) { 
            button.dataset.correct = answer.correct; 
            // settinh data attribute for answer with correct=true set 
            // it will be appear as 'data-correct ="true" in html
        }
        button.addEventListener('click', selectAnswer ); 
            // add eventlistener to new buttons that is created with answer text
        answerBtnEL.appendChild(button); 
        // appeding buttons to its parent div 
    })
}

function resetState (){
    nextBtn.classList.add('hide') 
    // hide next button
    while (answerBtnEL.firstChild) 
    {answerBtnEL.removeChild(answerBtnEL.firstChild)}
    // While answerButtonElement has a firstchild/button/ then removes the firstchild, and if no more first child, then stop
    // only removes existing button from acutal HTML 
}

function selectAnswer (event) {
    const selectedBtn = event.target;
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
    } 
    else { 
        // if there is no more question left 
        endQuiz(); }
}

function checkAnswer ( element, correct ){ 
    if ( !correct ){
        timeLeft -= 10; 
    }
}

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