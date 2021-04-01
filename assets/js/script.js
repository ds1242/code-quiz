var startBtn = document.getElementById('start-button');
var timerEl = document.getElementById('countdown');
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
]
// Countdown Timer function
// var countdown = function(){   
//     var timerBox = document.createElement('div');
//     timerBox.className = "timer-box";
//     timerBox.id = 'countdown';
//     timerBox.textContent = timerEl;
//     body.appendChild(timerBox); 
//         var timeLeft = 75;

//     // console.log(timerBox);
//         // hide the button
//         console.log("time left " + timeLeft);   
//         console.log("timerEL " + typeof(timerEl));   
        
//         // timer interval to count down each second
//         var timeInterval = setInterval(function(){
//             if(timeLeft > 1){
//                 console.log(timeInterval);
//                 timerEl.textContent = timeLeft;
//                 // timerBox.textContent = timerEl;
//                 timeLeft--;
//             } else {
//                 timerEl.textContent = "";
//                 // timerBox.textContent = timerEl;
//                 clearInterval(timeInterval);

//             }

//         }, 1000);
        
//     }

// load information when page is opened
// function pageOpen(){
//     var questionBox = document.createElement('div');
//     questionBox.className = "container";
//     body.appendChild(questionBox);

//     startBtn = document.createElement('button');
//     startBtn.className = "start-button";
//     startBtn.textContent = "Start Quiz";
//     questionBox.appendChild(startBtn);

//     console.log(startBtn);

    // var timerBox = document.createElement('div');
    // timerBox.className = "timer-box";
    // timerBox.id = 'countdown';
    // body.appendChild(timerBox);  


// }
// pageOpen();

var countdown = function(){
    var timeLeft = 5;
    var timerBox = document.createElement('div');
    timerBox.className = "timer-box";
    // timerBox.setAttribute("id", "countdown")
    body.appendChild(timerBox);  
    var timerBoxH1 = document.createElement('h1');
    timerBoxH1.setAttribute("id", "countdown");
    timerBox.appendChild(timerBoxH1);
    
    var timerEl = document.getElementById('countdown');
    //  timer interval to count down each second
        var timeInterval = setInterval(function(){
            if(timeLeft > 0){
                console.log(timeInterval);
                console.log(typeof(timeInterval));
                timerEl.textContent = timeLeft;
                timerBoxH1.textContent = timeLeft;
                timeLeft--;
            } else {
                timerEl.textContent = "";
                timerBoxH1.textContent = timeLeft;
                clearInterval(timeInterval);
                console.log("timerel is done " +timerEl);
            }

        }, 1000);
}
startBtn.addEventListener("click", countdown);
// start countdown when button is clicked
