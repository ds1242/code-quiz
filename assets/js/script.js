var startBtn = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
var questionLoc = document.getElementById('question-display');
var score = 0;
var goodBad = "";
var body = document.getElementById("body");
var main = document.getElementById("main");
var submitButton = document.getElementById('userInput');
var highScoreArr = []
highScoreArr = JSON.parse(localStorage.getItem('highScoreArr', highScoreArr));
// array containing the questions, answers, and which one is correct
var questionArray = [
    {
        q: "Which is not a valid data type?",
        a: "Boolean",
        b: "String",
        c: "Asterisk",
        d: "Object",
        correct: "Asterisk"
    },
    {
        q: "Which is an advantage of using JavaScript?",
        a: "Less Server Interaction",
        b: " Immediate feedback to the visitors",
        c: "Increased Interactivity",
        d: "All of the above",
        correct: "All of the above"
    },
    {
        q:"Which built in method returns the string converted to upper case?",
        a: "toUpper()",
        b: "toUpperCase()",
        c: "capitalizeString()",
        d: "All of the above",
        correct: "toUpperCase()"
    },
    {
        q: "How does a FOR loop start?",
        a: "for i++",
        b: "for(var i = 0; i < 5; i++)",
        c: "for(i = 0; i < 5)",
        d: "for i = 1 to 5",
        correct: "for(var i = 0; i < 5; i++)"
    },
    {
        q: "How do you declare a variable in Javacript?",
        a: "v = 1",
        b: "v myVariable",
        c: "myVariable",
        d: "var myVariable",
        correct: "var myVariable"
    }
];
var highscoreLoad = function(){
    var submitContainer = document.getElementById("submitContainer");
    submitContainer.style.display = "none";

    highScoreArr = JSON.parse(localStorage.getItem('highScoreArr', highScoreArr));
    console.log(highScoreArr);
}

// function to check if answer clicked is correct
var answerCheck = function(event, correctAnswer){
    var click = event.target.textContent
    if(click === correctAnswer){            
        goodBad= "correct";
        return goodBad;
    } else {        
        goodBad = "wrong";
        return goodBad;       
        
    }
}
// notify the player on the result of their answer
var notifyResult = function(goodBad){
    var result = goodBad;   
    resultContainer.textContent = result;    
}
// create elements to load question and add buttons to response answers which then check if it is correct or not.
var loadQuestion = function(i){
    
    var question = [];
    question[i] = questionArray[i].q;    
    var questionLoc = document.getElementById("question-display");       
    questionLoc.textContent = question[i];
    

    var btn = document.createElement("button");
    btn.textContent = questionArray[i].a;
    btn.className = "start-button";
    btn.setAttribute("id", questionArray[i].a)
    btn.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
   
    });
    questionLoc.appendChild(btn);  

    var btn2 = document.createElement("button");
    btn2.textContent = questionArray[i].b;    
    btn2.className = "start-button";
    btn2.setAttribute("id", questionArray[i].b);
    btn2.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
    });
    questionLoc.appendChild(btn2); 

    var btn3 = document.createElement("button");
    btn3.textContent = questionArray[i].c;
    btn3.className = "start-button";
    btn3.setAttribute("id", questionArray[i].c);
    btn3.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
    });
    questionLoc.appendChild(btn3); 

    var btn4 = document.createElement("button");
    btn4.textContent = questionArray[i].d;
    btn4.className = "start-button";
    btn4.setAttribute("id", questionArray[i].d);
    btn4.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
    });
    questionLoc.appendChild(btn4);
    

    // create result container below question buttons
    resultContainer = document.createElement('div');
    resultContainer.setAttribute("id",resultContainer);
    resultContainer.className = "resultContainer";
    resultContainer.textContent = " ";
    questionLoc.appendChild(resultContainer);
    
            
};
// function to create timer box for countdown
var timerBoxCreation = function(){
    var timerSection = document.createElement('section');
    timerSection.className = "timer-section";
    timerSection.setAttribute("id", "timer-section");
    main.appendChild(timerSection);

    var timerBox = document.createElement('div');
    timerBox.className = "timer-box";
    timerBox.setAttribute("id", "timer-container");
    timerSection.appendChild(timerBox);  

    var timerBoxH1 = document.createElement('h1');
    timerBoxH1.setAttribute("id", "countdown");
    timerBox.appendChild(timerBoxH1);

    return timerBoxH1;
}
// function to end the game and enter score to save for leaderboard
var endGame = function(timeLeft,score){
    // hide timer as game is done
    var timerBox = document.getElementById("timer-section");
    timerBox.style.display = "none";

    var questionBox = document.getElementById("question-display");
    questionBox.style.display = "none";

    // assign score and time to local variable
    var score = score;
    var timeLeft = timeLeft;
    console.log("timeLeft in endGame " + timeLeft);

    // create container to display score
    var scoreContainer = document.createElement('section');
    main.appendChild(scoreContainer);
    scoreContainer.className = "container";
    scoreContainer.setAttribute("id", "submitContainer");

    var scoreBox = document.createElement('h1');
    scoreBox.textContent = ("You completed the quiz with a " + score + " of " + questionArray.length + " in " + timeLeft + " seconds.");
    scoreContainer.appendChild(scoreBox);
    
    var inputBox = document.createElement("INPUT")
    inputBox.className = "input-box";
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("placeholder", "Enter Initials");
    inputBox.setAttribute("id", "inputBox");
    scoreContainer.appendChild(inputBox);

    var submitButton = document.createElement("button");
    submitButton.className = "start-button";
    submitButton.setAttribute("id", "userInput");
    submitButton.textContent = "Submit";
    scoreContainer.appendChild(submitButton);

    // add event listener to the button
    submitButton.addEventListener("click", function(){
        storeScore(timeLeft);
        highscoreLoad();
        
    });
}
var storeScore = function(timeLeft){
    var initials = document.getElementById('inputBox').value;
    var timeLeft = timeLeft
    console.log("initials = " + initials);
    if(initials === null || initials === ""){
        alert("Please Enter Initials")
    } else {
        highScoreArr.push({userinitials: initials, timeScore: timeLeft});
        localStorage.setItem('highScoreArr', JSON.stringify(highScoreArr));
    }
    
}

var gameStart = function(){
    // hide the button after starting the quiz
    var btnHide = document.getElementById("start-button");
    btnHide.style.display = "none";
    
    // set start time
    var timeLeft = 75;
    // create timer box and store in variable
    var timerBox = timerBoxCreation();
    var i = 0;
    // define timerEl
    var timerEl = document.getElementById('countdown');
    //  timer interval to count down each second
        var timeInterval = setInterval(function(){
            // run timer until time reachs 0
            if(timeLeft > 0){
                console.log(timeLeft);
                timerEl.textContent = timeLeft;
                timerBox.textContent = timeLeft;
                timeLeft--;              
                // generate each question as timer runss
                if(i < questionArray.length){
                    // call function to load question
                    loadQuestion(i)   
                    console.log("goodBad in gameStart" + goodBad);
                    // user can then click answer and addEventLister checks answer
                    if(goodBad === "correct"){
                        notifyResult(goodBad);
                        // add to i to load next question
                        i++;
                        // add to score
                        score++;
                        // clear out result returned when answer is checked
                        goodBad = "";
                        console.log("score " + score);
                    } else if(goodBad === "wrong"){
                        notifyResult(goodBad);
                        // remove time for incorrect answer
                        timeLeft = timeLeft-10;
                        // clear out click result 
                        goodBad = "";
                        // add to i to load next question
                        i++
                    }
                } else {
                    endGame(timeLeft, score);
                    clearInterval(timeInterval);
                };
               
            } else {
                // clear interval when timer is done
                timerEl.textContent = "";
                timerBox.textContent = timeLeft;
                clearInterval(timeInterval);
                console.log("timerel is done " +timerEl);
            }
            
        }, 1000);
        

    
}
var gameLoad = function(){
    // create container to hold welcome message
    var section = document.createElement('section');
    section.className = "container";
    // welcome to page h1
    var h1 = document.createElement('h1');
    h1.textContent = "Welcome to this JavaScript Code Quiz";
    // instructions below
    var p = document.createElement('p');
    p.textContent = "Click start to begin the quick. You have 75 seconds to answer all the questions.  Each incorrect question will reduce your total time by 10 seconds";
    // append to body of document
    main.appendChild(section);
    section.appendChild(h1);
    section.appendChild(p);

    // create start game button
    var questionLoc = document.createElement('section');
    questionLoc.className = "container";
    questionLoc.setAttribute("id", "question-display");

    main.appendChild(questionLoc)

    var startBtn = document.createElement("button");
    startBtn.className = "start-button";
    startBtn.setAttribute("id", "start-button");
    startBtn.textContent = "Start Quiz"
    questionLoc.appendChild(startBtn);

    startBtn.addEventListener("click", gameStart);
}
gameLoad();

// start countdown when button is clicked

