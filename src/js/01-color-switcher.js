const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.querySelector("body");
startButton.addEventListener('click', onStartClick);
stopButton.addEventListener('click', onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let timerId = null;

function onStartClick() {
    //button Start becomes inactive
    startButton.setAttribute("disabled", true);
    //button Stop becomes active
    stopButton.removeAttribute("disabled");
    //body once in 1 second begins change bgcolor
      timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
    
}

function onStopClick() {
    //button Stop becomes inactive
    stopButton.setAttribute("disabled", true);
    //button Start becomes active
    startButton.removeAttribute("disabled");
    //body stops change bgcolor
    clearInterval(timerId);
}