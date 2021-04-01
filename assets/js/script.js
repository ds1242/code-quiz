var startBtn = document.getElementById('start');
var timerEl = document.getElementById('countdown');


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
function coundown(){
    var timeLeft = 75;
    // hide the button
    startBtn.style.display = "none";

    // timer interval to count down each second
    var timeInterval = setInterval(function(){
        if(timeLeft > 0){
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);

        }

    }, 1000);
}


// start countdown when button is clicked
startBtn.onclick = coundown;