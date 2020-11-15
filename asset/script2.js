const questions =[

    { 
        question: "When Harry first met Quirrell in the Leaky Cauldron before starting Hogwarts, Quirrell says he needs to pick up a book on ...?", 
        answers: [
            {text: "Werewolves" , correct: false},
            {text: "Vampires" , correct: true},
            {text: "Acromantula" , correct: false},
            {text: "Zombies", correct: false},

         ]
    },
    { 
        question: "Who was the author of the first-year text The Dark Forces: A Guide to Self-Protection?", 
        answers: [
            {text: "Quentin Trimble", correct: true},
            {text:"Phyllida Spore", correct: false},
            {text: "Arsenius Jigger", correct: false},
            {text: "Adalbert Waffling", correct: false},

         ]
    },
    { 
        question: "Which of these was not a Defence Against the Dark Arts text set by Gilderoy Lockhart?", 
        answers: [
            {text: "Break with a Banshee", correct: false},
            {text: "Wandering with Werewolves", correct: false},
            {text: "Gallivanting with Ghouls", correct: true},
            {text: "Voyages with Vampires", correct: false},

         ]
    },
    { 
        question: "What form did Dean Thomas's Boggart take in his DADA lesson with Lupin?", 
        answers: [
            {text: "Shrieking Banshee", correct: false},
            {text: "Bloody eyeball", correct: false},
            {text: "Bandages Mummy", correct: false},
            {text: "Severed hand", correct: true},

         ]
    },
    { 
        question: "What color was the Grindylow Lupin had in a tank in his classroom?", 
        answers: [
            {text: "Black", correct: false},
            {text: "Red", correct: false},
            {text: "Green", correct: true},
            {text: "Brown", correct: false},

         ]
    },
    { 
        question: "Where did Snape say that a Kappa is more commonly found?", 
        answers: [
            {text: "Mongolia", correct: true},
            {text: "Malta", correct: false},
            {text: "Madagascar", correct: false},
            {text: "Morocco", correct: false},

         ]
    },
    { 
        question: "Which of the following did not appear in the third years' DADA exam when Lupin was their teacher?", 
        answers: [
            {text: "Red Caps", correct: false},
            {text: "Hinkypunks", correct: false},
            {text: "Banshees", correct: true},
            {text: "Boggarts", correct: false},

         ]
    },
    { 
        question: "When Moody tried to put the Imperius Curse on Harry what did he try to make him do?", 
        answers: [
            {text: "Hide under the desk", correct: false},
            {text: "Push over the desk", correct: false},
            {text: "Open the lid of the desk", correct: false},
            {text: "Jump onto the desk", correct: true},

         ]
    },
    { 
        question: "In his DADA O.W.L exam, what did harry get a bonus point for doing?", 
        answers: [
            {text: "A perfect Bat Bogey Hex", correct: false},
            {text: "Disarming the examiner with Expelliarmus", correct: false},
            {text: "Banishing a Boggart", correct: false},
            {text: "Casting a Patronus", correct: true},

         ]
    },
    { 
        question: "What was the name of the book by Wilbert Slinkhard that Umbridge set for DADA?", 
        answers: [
            {text: "A Theory of Defensive Magic", correct: false},
            {text: "Defensive Magical Theory", correct: true},
            {text: "A Definitive Guide to Defensive Spell", correct: false},
            {text: "A Masterclass on Magical Theory", correct: false},

         ]
    },
    

    ];
const mainEl = document.getElementById('main-page'); 
const startBtn = document.getElementById('start-btn'); 
const nextBtn = document.getElementById('next-btn'); 
const highBtn = document.getElementById('highscore-btn'); 
const restartBtn = document.getElementById('restart-btn'); 
const questionContainerEl = document.getElementById('question-container'); 
const questionEl = document.getElementById('question'); 
const answerBtnEL = document.getElementById('answer-buttons'); 
const openingEl = document.getElementById('opening-text'); 
const finalEl = document.getElementById('final-page'); 
const scoreEl = document.getElementById('final-score'); 
const gameTimer  = document.getElementById('game-timer'); 


let randomQuestions;
let currentQuestionIndex; 
// inital value would be undefined 


startBtn.addEventListener('click', startQuiz);
// adding click event to startbutton 
nextBtn.addEventListener( 'click', () => { 
    currentQuestionIndex++; 
    setNextQuestion(); 
}
)
// by clicking the next button, currentQuestionIndex increment by 1 and  start setNextQuestion function 

function startQuiz(){
   
    openingEl.classList.add('hide'); 
    // removing opening text div 


    startBtn.classList.add('hide');
    // hide start button 
    
    // **************** need to romove hide from timer 
    
    // ****************timer start
    gameTimer.classList.remove('hide'); 


   

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
    console.log (randomQuestions); 


}; 


function showQuestion (question) {
    // question from questions array 
    console.log(question); 

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
        console.log(answer); 
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
        
        endQuiz(); 


        // **************************************************
        // need to be replaced with showScore function
    }
}; 
//  *********** need to create function for ENDGAME

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
    scoreEl.innerText = score; 
   console.log(score); 
}
// !!!!!!!!!! timeleft is 66 but score is 55 ... what is wrong ? 





// clearing html and show score with 
//'retake button' and 'view high score' button 



// function that add/remove answer status ' correct' or 'wrong' 
function setStatusClass(element, correct) {
    console.log (element); 
    clearStatusClass(element); 
    if (correct) { 
        element.classList.add('correct'); 

    }
    else {
        element.classList.add('wrong'); 
    }
}

function clearStatusClass(element) { 
    console.log (element)
    element.classList.remove('correct')
    element.classList.remove('wrong')
   
}
// check if selected answer is wrong, subtract timer by 10 
function checkAnswer ( element, correct ){
    if ( !correct ) { 
        time -=10; 
    }
}


// need to add final score page 
// localstorage 

//***** timer  */
let time = 180 ;  
//initial time 
let min = ""; 
let sec = ""; 

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

