let timer;
let timeLeft;
let time;
let ring = new Audio("./files/ring.mp3")
const progress = document.getElementById("progress-bar");
const timerForm = document.getElementById("timerForm");
const stopBtn = document.getElementById("stop");

function startTimer(e) {
  e.preventDefault();
  time = parseInt(document.getElementById("time").value) * 60;
  timeLeft = time;

  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  const prozent = ((time - timeLeft) / time) * 100;
  progress.style.width = `${prozent}%`;

  if (timeLeft === 0) {
    clearInterval(timer);
    ring.play();
    alert(`Час розім'ятися, Ви працюєте ${time / 60} хвилин!`);
    
  }
}

function stopTimer() {
  clearInterval(timer);
}

timerForm.addEventListener("submit", startTimer);
stopBtn.addEventListener("click", stopTimer);
