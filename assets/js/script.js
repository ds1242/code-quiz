var startBtn = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
var questionLoc = document.getElementById('question-display');
var score = 0;
var body = document.body;


var questionArray = [
    {
        q: "Which is not a valid data type?",
        a: "Boolean",
        b: "String",
        c: "Asterisk",
        d: "Object",
        correct: "C"
    },
    {
        q: "Which is an advantage of using JavaScript?",
        a: "Less Server Interaction",
        b: " Immediate feedback to the visitors",
        c: "Increased Interactivity",
        d: "All of the above",
        correct: "D"
    },
    {
        q:"Which built in method returns the string converted to upper case?",
        a: "toUpper()",
        b: "toUpperCase()",
        c: "capitalizeString()",
        d: "All of the above",
        correct: "B"
    },
    {
        q: "How does a FOR loop start?",
        a: "for i++",
        b: "for(var i = 0; i < 5; i++)",
        c: "for(i = 0; i < 5)",
        d: "for i = 1 to 5",
        correct: "B"
    },
    {
        q: "How do you declare a variable in Javacript?",
        a: "v = 1",
        b: "v myVariable",
        c: "myVariable",
        d: "var myVariable",
        correct: "D"
    }
];

var loadQuestion = function(questionIndex){
    // pull in question index and set that index from the questionArray to a variable
    var question = questionArray[questionIndex].q; 
    var questionDisplay = document.createElement('div');
    questionDisplay.className = "question";
    questionDisplay.textContent = question;
    questionLoc.appendChild(questionDisplay);

    // question[i].q.innerHTML = "<p>" + question[questionIndex].q + "</p>"
    
    
};
var timerBoxCreation = function(){
    var timerBox = document.createElement('div');
    timerBox.className = "timer-box";
    body.appendChild(timerBox);  
    var timerBoxH1 = document.createElement('h1');
    timerBoxH1.setAttribute("id", "countdown");
    timerBox.appendChild(timerBoxH1);

    return timerBoxH1;
}

var gameStart = function(){
    var btnHide = document.getElementById("start-button");
    btnHide.style.display = "none";

    // set start time
    var timeLeft = 5;
    // create timer box and store in variable
    var timerBox = timerBoxCreation();
    // define timerEl
    var timerEl = document.getElementById('countdown');
    //  timer interval to count down each second
        var timeInterval = setInterval(function(){
            if(timeLeft > 0){
                console.log(timeLeft);
                timerEl.textContent = timeLeft;
                timerBox.textContent = timeLeft;
                timeLeft--;
            } else {
                timerEl.textContent = "";
                timerBox.textContent = timeLeft;
                clearInterval(timeInterval);
                console.log("timerel is done " +timerEl);
            }

        }, 1000);


    for(var i = 0; i < questionArray.length; i++){
       loadQuestion(i);
       console.log(loadQuestion[i]);
    }
}
startBtn.addEventListener("click", gameStart);
// start countdown when button is clicked
