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

var loadQuestion = function(i){
    var question = [];
    
    question[i] = questionArray[i].q;           
    questionLoc.textContent = question[i];
      
    var btn = document.createElement("button");
    var btnText = document.createTextNode(questionArray[i].a);
    var btn2 = document.createElement("button");
    var btnText2 = document.createTextNode(questionArray[i].b);
    var btn3 = document.createElement("button");
    var btnText3 = document.createTextNode(questionArray[i].c);
    var btn4 = document.createElement("button");
    var btnText4 = document.createTextNode(questionArray[i].d);


    btn.appendChild(btnText);
    questionLoc.appendChild(btn);

    btn2.appendChild(btnText2);
    questionLoc.appendChild(btn2);
    btn3.appendChild(btnText3);
    questionLoc.appendChild(btn3);
    btn4.appendChild(btnText4);
    questionLoc.appendChild(btn4); 
       
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
    var timeLeft = 75;
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
                for(var i = 0; i < questionArray.length; i++){
                    loadQuestion(i);
                }
                timeLeft--;
            } else {
                timerEl.textContent = "";
                timerBox.textContent = timeLeft;
                clearInterval(timeInterval);
                console.log("timerel is done " +timerEl);
            }

        }, 1000);


    
}
startBtn.addEventListener("click", gameStart);
// start countdown when button is clicked
