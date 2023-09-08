import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const timeOutputs = document.querySelectorAll('.value');
const timerBox = document.querySelector('.timer');

let timerId = null;
startButton.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startButton.disabled = true;
        }
        else {
            startButton.disabled = false;
        }
    },
};

flatpickr(dateInput, options);

startButton.addEventListener('click', onStartClick);

function onStartClick() {
    timeOutputs.forEach(item => item.classList.toggle('end'));
    startButton.disabled = true;
    dateInput.disabled = true;
    timerId = setInterval(() => {
        const choosenDate = new Date(dateInput.value);
        const timeToFinish = choosenDate - Date.now();
        const { days, hours, minutes, seconds } = convertMs(timeToFinish);
    dataDays.textContent = pad(days);
    dataHours.textContent = pad(hours);
    dataMinutes.textContent = pad(minutes);
    dataSeconds.textContent = pad(seconds);

    if (timeToFinish < 1000) {
      timeOutputs.forEach(item => item.classList.toggle('end'));
      clearInterval(timerId);
      dateInput.disabled = false;
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return `${value}`.padStart(2, '0');
}

timerBox.style.width = "180px";
timerBox.style.display = "flex";
timerBox.style.gap = '60px 10px';
timerBox.style.textAlign = "center";