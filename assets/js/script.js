var startBtn = document.getElementById('start');
var timerEl = document.getElementById('countdown');

function coundown(){
    var timeLeft = 75;

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

startBtn.onclick = coundown;