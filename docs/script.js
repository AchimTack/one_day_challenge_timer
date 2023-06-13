const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
let countdown = 100;
let countdownInterval = null;

context.font = "30px 'Press Start 2P'";
context.fillStyle = "red";
context.textAlign = "center";
context.fillText("Press SPACE to start", canvas.width / 2, canvas.height / 2);

function startCountdown() {
    countdownInterval = setInterval(function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = "80px 'Press Start 2P'";  // Larger font size for countdown
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
    context.font = "30px 'Press Start 2P'";  // Smaller font size for start message
    context.fillText("Press SPACE to start", canvas.width / 2, canvas.height / 2);
}

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        startCountdown();
    } else if (e.code === 'Enter') {
        resetCountdown();
    }
});
