function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
var timerId;

function start() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
