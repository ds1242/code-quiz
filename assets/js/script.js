var startBtn = document.getElementById('start-button');
var timerEl = "75";
var score = 0;
var body = document.body;


var questionArray = [
    {
            q: "Which is not a valid data type?",
        a1: "Boolean",
        a2: "String",
        a3: "Asterisk",
        a4: "Object"
        // asterisk is not a data type
    },
    {
        q: "Which is an advantage of using JavaScript?",
        a1: "Less Server Interaction",
        a2: " Immediate feedback to the visitors",
        a3: "Increased Interactivity",
        a4: "All of the above"
        // all of the above
    },
    {
        q:"Which built in method returns the string converted to upper case?",
        a1: "toUpper()",
        a2: "toUpperCase()",
        a3: "capitalizeString()",
        a4: "All of the above"
        // toUpperCase()
    },
    {
        q: "How does a FOR loop start?",
        a1: "for i++",
        a2: "for(var i = 0; i < 5; i++)",
        a3: "for(i = 0; i < 5)",
        a4: "for i = 1 to 5"
        // for(var i = 0; i < 5; i++)
    },
    {
        q: "How do you declare a variable in Javacript?",
        a1: "v = 1",
        a2: "var myVariable",
        a3: "myVariable",
        a4: "v myVariable"
    }
]
// Countdown Timer function
var countdown = function(){    
    
    var timeLeft = 75;
        // hide the button
        console.log("time left " + timeLeft);   
        console.log("timerEL " + timerEl);   
        
        // timer interval to count down each second
        var timeInterval = setInterval(function(){
            if(timeLeft > 0){
                console.log(timeInterval);
                timerEl.textContent = timeLeft;
                // timerBox.textContent = timerEl;
                timeLeft--;
            } else {
                timerEl.textContent = "";
                // timerBox.textContent = timerEl;
                clearInterval(timeInterval);

            }

        }, 1000);
        console.log("time left " + timeLeft);   
        console.log("timerEL " + timerEl);
        console.log(timeInterval);
}

// load information when page is opened
function pageOpen(){
    var questionBox = document.createElement('div');
    questionBox.className = "container";
    body.appendChild(questionBox);

    startBtn = document.createElement('button');
    startBtn.className = "start-button";
    startBtn.textContent = "Start Quiz";
    questionBox.appendChild(startBtn);

    console.log(startBtn);

    var timerBox = document.createElement('div');
    timerBox.className = "timer-box";
    timerBox.textContent = timerEl;
    body.appendChild(timerBox);  


}
pageOpen();
startBtn.addEventListener("click", countdown);
// start countdown when button is clicked
