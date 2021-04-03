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
// var answerCheck = function(){
//     // var answer = document.querySelector("")
//     var answer = document.getElementById("id");
//     console.log(answer);
    
//     // if(answer === questionArray[i].correct){
//     //     return true;
//     // } else {
        
//     //     return false;
//     // }
// }
var loadQuestion = function(i){
    
    var question = [];
    
    question[i] = questionArray[i].q;           
    questionLoc.textContent = question[i];
    

    var btn = document.createElement("button");
    btn.textContent = questionArray[i].a;
    btn.className = "start-button";
    btn.setAttribute("id", questionArray[i].a)
    btn.addEventListener("click", function(){
        console.log(btn.querySelector("id"));
    });

    var btn2 = document.createElement("button");
    btn2.textContent = questionArray[i].b;    
    btn2.className = "start-button";
    btn2.setAttribute("id", questionArray[i].b);
    // btn2.addEventListener("click", answerCheck);
   
    var btn3 = document.createElement("button");
    btn3.textContent = questionArray[i].c;
    btn3.className = "start-button";
    btn3.setAttribute("id", questionArray[i].c);
    // btn3.addEventListener("click", answerCheck);
    
    var btn4 = document.createElement("button");
    btn4.textContent = questionArray[i].d;
    btn4.className = "start-button";
    btn4.setAttribute("id", questionArray[i].d);
    // btn4.addEventListener("click", answerCheck);
   
    questionLoc.appendChild(btn);  
    questionLoc.appendChild(btn2); 
    questionLoc.appendChild(btn3); 
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
                
                for(var i = 0; i < questionArray.length;i++){
                    loadQuestion(i);
                    // console.log(question);
                    

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
