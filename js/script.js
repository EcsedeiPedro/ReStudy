//variáveis

let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("short_break");
let longBreak = document.getElementById("long_break");

console.log(shortBreak, longBreak);

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

const reset = document.getElementById("reset");
const play = document.getElementById("play");
const stopBtn = document.getElementById("stopBtn");

console.log(minutes, seconds);

let startTimer;

console.log(typeof startTimer);

function timer() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

play.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("O Timer já está funcionando");
  }
});

reset.addEventListener("click", function () {
  minutes.innerText = 25;
  seconds.innerText = "00";
  stopTimer();
  startTimer = undefined;
});

stopBtn.addEventListener("click", function () {
  stopTimer();
  startTimer = undefined;
});

//seleciona o timer escolhido
pomodoro.addEventListener("click", function () {
  minutes.innerText = 25;
  seconds.innerText = "00";
  stopTimer();
  startTimer = undefined;
});

//seleciona o timer escolhido
shortBreak.addEventListener("click", function () {
  minutes.innerText = 5;
  seconds.innerText = "00";
  stopTimer();
  startTimer = undefined;
});

//seleciona o timer escolhido
longBreak.addEventListener("click", function () {
  minutes.innerText = 15;
  seconds.innerText = "00";
  stopTimer();
  startTimer = undefined;
});
