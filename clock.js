const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');
const stopBtn = document.querySelector('.stop-stopwatch');
const startBtn = document.querySelector('.start-stopwatch');
// const restartBtn = document.querySelector('.restart');
const resetBtn = document.querySelector('.reset-stopwatch');
const stopwatchBtn = document.querySelector('.stopwatch');
const stopwatchDisplay = document.querySelector('.stopwatch-display');

let secDeg = 0;
let minDeg = 0;
let hourDeg = 0;
let timer;
let stopwatchTimer;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

function startClock() {
  timer = setInterval(() => {
    secDeg += 6;
    minDeg += 0.1;
    hourDeg += (1/120);

    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }, 1000);
}

function stopClock() {
  clearInterval(timer);
}

function resetClock() {
  secDeg = 0;
  minDeg = 0;
  hourDeg = 0;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

function restartClock() {
  secDeg = 0;
  minDeg = 0;
  hourDeg = 0;
  
  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  startClock();
}

function startStopwatch() {
  stopwatchTimer = setInterval(() => {
    stopwatchSeconds++;

    if (stopwatchSeconds === 60) {
      stopwatchSeconds = 0;
      stopwatchMinutes++;
    }

    if (stopwatchMinutes === 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }

    const formattedSeconds = stopwatchSeconds < 10 ? `0${stopwatchSeconds}` : stopwatchSeconds;
    const formattedMinutes = stopwatchMinutes < 10 ? `0${stopwatchMinutes}` : stopwatchMinutes;
    const formattedHours = stopwatchHours < 10 ? `0${stopwatchHours}` : stopwatchHours;

    stopwatchDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
}

function resetStopwatch() {
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;

  stopwatchDisplay.textContent = '00:00:00';
}

startBtn.addEventListener('click', startClock);
stopBtn.addEventListener('click', stopClock);
resetBtn.addEventListener('click', resetClock);
// restartBtn.addEventListener('click', restartClock);
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
