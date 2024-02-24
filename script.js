document.addEventListener("DOMContentLoaded", function() {
    const timeForm = document.getElementById("timeForm");
    const stopTimerBtn = document.getElementById("stopTimer");
    const progressBar = document.getElementById("progress");
    let intervalID;
    let timeLeft;

    timeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const timeInput = document.getElementById("time").value;
        startTimer(timeInput);
    });

    stopTimerBtn.addEventListener("click", function() {
        clearInterval(intervalID);
    });

    function startTimer(time) {
        timeLeft = time * 60;
        updateProgress(time);
        intervalID = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            updateProgress();
        } else {
            clearInterval(intervalID);
            alert("Час відпочити, ви працюєте " + document.getElementById("time").value + " хвилин!");
        }
    }

    function updateProgress() {
        const progressPercentage = ((timeLeft / (document.getElementById("time").value * 60)) * 100).toFixed(2);
        progressBar.style.width = progressPercentage + "%";
    
    }
});