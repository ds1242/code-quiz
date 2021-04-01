var startBtn = document.getElementById('start');
var timerEl = document.getElementById('countdown');

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