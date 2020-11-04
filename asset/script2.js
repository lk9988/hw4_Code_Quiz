var questions =[

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
            {text: "Disarming the examiner with Expelliarmus" correct: false},
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

var startBtn = document.getElementById('start-btn'); 
var nextBtn = document.getElementById('next-btn'); 
var questionContainerEl = document.getElementById('question-container'); 



var randomQuestions;
var currentQuestionIndex; 
// inital value would be undefined 


startBtn.addEventListener('click', startQuiz);
// adding click event to startQuiz


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


