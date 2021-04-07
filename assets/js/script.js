var startBtn = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
var questionLoc = document.getElementById('question-display');
var footer = document.getElementById('footer');
var score = 0;
var goodBad = "";
var body = document.getElementById("body");
var main = document.getElementById("main");
var submitButton = document.getElementById('userInput');
var highScoreArr = [
    {
        initials: "",
        timeLeft:0
    }
];

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


var clearDOM = function(){
    // var header = document.getElementById("header")
    // header.remove();
    var otherObj = document.getElementById("submitContainer")
    if(otherObj){
        otherObj.remove();  
    };
    var questionDisplayRemove2 = document.getElementById("score-display");
    if(questionDisplayRemove2){
        questionDisplayRemove2.remove();
    };
    var header = document.getElementById("header");
    if(header){
        header.remove();
    }
    var welcomeRemove = document.getElementById("welcome");
    if(welcomeRemove){
        welcomeRemove.remove();
    }
    gameLoad();

}
var highscoreLoad = function(){
       
    // get current high score time
    var highScoreReturn = JSON.parse(localStorage.getItem('highScoreArr', highScoreArr));
    console.log(highScoreReturn);

    var questionLoc = document.createElement('section');
    questionLoc.className = "container";
    questionLoc.setAttribute("id", "score-display");
    
    
    
    if(highScoreReturn === null){
        questionLoc.textContent = "No High Score";
    } else {        
        questionLoc.textContent = "User: " + highScoreReturn.initials + " has the best score with a time score of: " + highScoreReturn.timeLeft;
    }
    main.appendChild(questionLoc)

    // Check if loading high scores prior to playing game to avoid loading the start button twice
    if(document.getElementById("start-button")){
            return;
    }else {
            var startBtn = document.createElement("button");
            startBtn.className = "start-button";
            startBtn.setAttribute("id", "start-button");
            startBtn.textContent = "Restart Quiz"
            questionLoc.appendChild(startBtn);

            startBtn.addEventListener("click", clearDOM);


            var clearBtn = document.createElement("button");
            clearBtn.className="start-button";
            clearBtn.setAttribute("id", "clear-button");
            clearBtn.textContent = "Clear High Score";
            questionLoc.appendChild(clearBtn);

            clearBtn.addEventListener("click", function(){
                localStorage.clear();
                alert("storage cleared");
                clearDOM();
            })
        }
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
    // load question for user to answer
    var question = [];
    question[i] = questionArray[i].q;    
    var questionLoc = document.getElementById("question-display");  
    questionLoc.style.visibility = "visible";     
    questionLoc.removeAttribute("display");
    questionLoc.textContent = question[i];
    
    // create first button answer from the question array
    var btn = document.createElement("button");
    btn.textContent = questionArray[i].a;
    btn.className = "start-button";
    btn.setAttribute("id", questionArray[i].a)
    btn.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
   
    });
    questionLoc.appendChild(btn);  

    // create second button from question array
    var btn2 = document.createElement("button");
    btn2.textContent = questionArray[i].b;    
    btn2.className = "start-button";
    btn2.setAttribute("id", questionArray[i].b);
    btn2.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
    });
    questionLoc.appendChild(btn2); 

    // create third button from question array
    var btn3 = document.createElement("button");
    btn3.textContent = questionArray[i].c;
    btn3.className = "start-button";
    btn3.setAttribute("id", questionArray[i].c);
    btn3.addEventListener("click", function(event){
        answerCheck(event, questionArray[i].correct);
    });
    questionLoc.appendChild(btn3); 

    // create fourth button to answer with from question array
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
    resultContainer.setAttribute("id","resultContainer");
    resultContainer.className = "resultContainer";
    resultContainer.textContent = " ";
    questionLoc.appendChild(resultContainer);
    
            
};
// function to create timer box for countdown
var timerBoxCreation = function(){
    var timerSection = document.createElement('section');
    timerSection.className = "timer-section";
    timerSection.setAttribute("id", "timer-section");
    timerSection.setAttribute("margin-left", "auto");
    header.appendChild(timerSection);

    var timerBoxH1 = document.createElement('h1');
    timerBoxH1.setAttribute("id", "countdown");
    timerSection.appendChild(timerBoxH1);

    return timerBoxH1;
}
// function to end the game and enter score to save for leaderboard
var endGame = function(timeLeft,score){
    // hide timer as game is done
    var timerBox = document.getElementById("timer-section");
    timerBox.style.visibility = "hidden";

    var questionBox = document.getElementById("question-display");
    questionBox.remove();

    // assign score and time to local variable
    var score = score;
    var timeLeft = timeLeft;
    

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
        if(document.getElementById('inputBox').value === ""){
            alert("Please Enter Your Initials");
            return;
        } else{
        storeScore(timeLeft);
        highscoreLoad();
        }
    });
}
var storeScore = function(timeLeft){
    var initials = document.getElementById('inputBox').value;
    var timeLeft = timeLeft;
    var highScore = JSON.parse(localStorage.getItem('highScoreArr', highScoreArr));

    // console.log(highScore.timeLeft);

    if(highScore === null || timeLeft > highScore.timeLeft ){
        highScoreArr = [];
        // highScoreObj = {};
        highScoreObj = {initials, timeLeft};
        console.log("highScoreObj " + JSON.stringify(highScoreObj));
        highScoreArr.push(JSON.stringify(highScoreObj));
        localStorage.setItem('highScoreArr', highScoreArr);
    } else {
        alert("Unfortunately Not A New High Score.  Please Play Again!");
    }

    
    
}

var gameStart = function(){
    // hide the button after starting the quiz
    var btnHide = document.getElementById("start-button");
    btnHide.style.visibility = "hidden";
    // remove any submitContainer if user restarts the game or comes from the highscore page
    if(document.getElementById('submitContainer')){
        var remove1 = document.getElementById('submitContainer')
        remove1.remove();
    }
    // remove the score display container if user comes from the highscore page or restarts the game
    if(document.getElementById('score-display')){
        var remove2 = document.getElementById('score-display');
        remove2.remove();
    }
    
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
                // generate each question as timer runs
                if(i < questionArray.length){
                    // call function to load question
                    
                    loadQuestion(i)   
                    
                    // user can then click answer and addEventLister checks answer
                    if(goodBad === "correct"){
                        notifyResult(goodBad);
                        // add to i to load next question
                        i++;
                        // add to score
                        score++;
                        // clear out result returned when answer is checked
                        goodBad = "";
                        
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
                endGame(timeLeft, score);
                
            }
            
        }, 1000);
        

    
}
var gameLoad = function(){
    // var main = document.createElement("main");
    // body.appendChild(main);

    var header = document.createElement("header");
    header.setAttribute("id", "header");
    main.appendChild(header);
    var highScoreLink = document.createElement("button");
    highScoreLink.className = "start-button";
    highScoreLink.textContent = "High Score";
    // highScoreLink.setAttribute("margin", "left");
    header.appendChild(highScoreLink);

    highScoreLink.addEventListener("click", highscoreLoad) 

    // create container to hold welcome message
    var section = document.createElement('section');
    section.className = "container";
    section.setAttribute("id", "welcome");
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

