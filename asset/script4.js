const mainEl = document.getElementById('main-page'); 
const startBtn = document.getElementById('start-btn'); 
const nextBtn = document.getElementById('next-btn'); 
const highBtn = document.getElementById('highscore-btn'); 
const saveBtn = document.getElementById("save-score-button"); 
const restartBtn = document.getElementById('restart-btn'); 
const questionContainerEl = document.getElementById('question-container'); 
const questionEl = document.getElementById('question'); 
const answerBtnEL = document.getElementById('answer-buttons'); 
const openingEl = document.getElementById('opening-text'); 
const finalEl = document.getElementById('final-page'); 
const scoreEl = document.getElementById('final-score'); 
const gameTimer  = document.getElementById('game-timer'); 
const userInputEl = document.getElementById('username'); 

let randomQuestions;
let currentQuestionIndex; 
// inital value would be undefined 
let time = 180 ;  
//initial time 
// let score = 0; 

startBtn.addEventListener( "click", startQuiz);
// adding click event to startbutton 
nextBtn.addEventListener( "click", () => { 
    currentQuestionIndex++; 
    setNextQuestion(); 
})
// by clicking the next button, currentQuestionIndex increment by 1 and  start setNextQuestion function 
// saveBtn.addEventListener (); 




function startQuiz(){
   
    openingEl.classList.add('hide'); 
    // removing opening text div 
    startBtn.classList.add('hide');
    // hide start button 
    gameTimer.classList.remove('hide'); 
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
        time -=10; 
    }
    // if not correct answer, subtract time by 10 
    // if ( correct) { 
    //     score += 10 }
    //    else { time -= 10 }; 

// maybe for fixing score = remainingtime problem 
// for this let score = 0; -> as global var 

}
//  *********** need to create function for endQuiz

function endQuiz () {
    clearInterval(startingTimer); 
    //stop the timer 
    mainEl.classList.add('hide'); 
    //clear inside of card 
    finalEl.classList.remove('hide'); 
    //load final-page 
    showScore(); 
    
}

//timeleft = score 
let quizDuration = 0; 

function showScore() { 
    let score = time - quizDuration; 
    scoreEl.innerText = 'your score ' + score; 
   console.log(score); 
}
// !!!!!!!!!! timeleft is 66 but score is 55 ... what is wrong ? 


// collecting userName and score and store 
function submitUserInfo (){ 
    
    let userGameInfo = {
        userName: userInputEl.value.trim(), 
        score: finalEl.value
    }; 

    console.log('user', userGameInfo); 
    if (userInputEl.value < 1 )
    return; 
    else { 
        
    

    }
    localStorage.setItem("userGameInfo", JSON.stringify(userGameInfo)); 

}

lastUser = JSON.parse(localStorage.getItem("userGameInfo"));



let startingTimer = setInterval(function(){


    // min = parseInt(time/60); 
    // sec = time % 60 ; 

    // document.getElementById("game-timer").innerHTML = min + ":" + sec ; 
    document.getElementById("game-timer").innerHTML = time; 
    //better without MIN:SEC format 
    time --; 
    // reduce by 1 sec 
    if (time < 0 ) { 
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
    element.classList.remove('correct')
    element.classList.remove('wrong')
   
}