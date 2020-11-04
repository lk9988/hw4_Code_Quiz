var questions =[

    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    { 
        question: "sdlkfjsdlfkjdsflksdjf", 
        answers: [
            {text:'sdflksdflksdf', correct: true},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},
            {text:'sdflksdflksdf', correct: false},

         ]
    },
    

    ];

var startBtn = document.getElementById('start-btn'); 
var nextBtn = document.getElementById('next-btn'); 
var questionContainerEl = document.getElementById('question-container'); 





startBtn.addEventListener('click', startQuiz);



function startQuiz(){
    console.log('started');

    //initial screen nothing but with start button only 
    startBtn.classList.add('hide');

    
    // need to remove hide from timer 

    //timer start



    // adding class name hide to start-button so when it is click, it will disappear

    randomQuestions = questions.sort( () => Math.random() - .5); 
    // randomizing questions order appear on screen 

    currentQuestionIndex = 0; 
    // starting with first question

    questionContainerEl.classList.remove('hide'); 
    //start-button disappear and questions page appears 

    setNextQuestion(); 
    

};


