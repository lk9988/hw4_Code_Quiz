//  Questions and Answers object array 

var quizQuestions =[

{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},
{ 
    title: "sdlkfjsdlfkjdsflksdjf", 
    choices: ["answer1" , "answer2" , "answer3" , "answer4"],
    answer: "answer3"
},




]


// Display timer & may change var names for this

// set time for 3 mins 
var time = 180 ;  
var min = ""; 
var sec = ""; 

var startingTime = setInterval(function(){


    min = parseInt(time/60); 
    sec = time % 60 ; 

    document.getElementById("game_timer").innerHTML = min + ":" + sec ; 
    // reduce by 1 sec 
    time --; 
    // when timeout happends
    if (time < 0 ) { 

        // stop timer 
        clearInterval (startingTime); 

        // display "timeout" message 
    
        document.getElementById("game_timer").innerHTML = "timeout"
        
        //  need to display final page with scores 



    }
}, 1000); 

var viewScorePage = document
var startPage = document.getElementById("start_page"); 

var quizPAge = document.getElementById("quiz_page"); 


var resultPage = document.getElementById("result_page"); 

var scorePage = document.getElementById("score_page"); 

var startBtn = document.getElementById("start_button"); 


