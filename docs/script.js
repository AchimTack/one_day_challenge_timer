const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
let countdown = 100;
let countdownInterval = null;
let isStarted = false;

context.font = "40px 'Press Start 2P'";
context.fillStyle = "42f545";
context.textAlign = "center";
context.fillText("Press SPACE to start or tap", canvas.width / 2, canvas.height / 2);

function startCountdown() {
    countdownInterval = setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "180px 'Press Start 2P'";  // Larger font size for countdown
        context.fillText(countdown, canvas.width / 2, canvas.height / 2);
        
        if (countdown > 0) {
            countdown--;
        } else {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    countdown = 100;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "40px 'Press Start 2P'";  // Smaller font size for start message
    context.fillText("Press SPACE to start or tap", canvas.width / 2, canvas.height / 2);
}

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        if (!isStarted) {
            isStarted = true;
            startCountdown();
        } else {
            isStarted = false;
            resetCountdown();
        }
    } else if (e.code === 'Enter') {
        isStarted = false;
        resetCountdown();
    }
});

canvas.addEventListener('touchstart', function(e) {
    e.preventDefault();
    if (!isStarted) {
        isStarted = true;
        startCountdown();
    } else {
        isStarted = false;
        resetCountdown();
    }
}, false);
