const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const startBtnEl = document.querySelector(
  'button[data-action="start"]',
);
const stopBtnEl = document.querySelector(
  'button[data-action="stop"]',
);
const bodyEl = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

startBtnEl.addEventListener('click', onStartClick);
stopBtnEl.addEventListener('click', onStopClick);

//console.log(randomIntegerFromInterval(0, 5))
//console.log(colors[5]);

function onStartClick(e) {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  startBtnEl.setAttribute('disabled', true);
}

function onStopClick(e) {
  clearInterval(timerId);
  startBtnEl.removeAttribute('disabled');
}




