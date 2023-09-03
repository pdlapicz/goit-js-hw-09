import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      notiflix.Notify.info('Please choose a date in the future');
      return;
    }

    const startBtn = document.querySelector('[data-start]');
    startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const startDateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

let countdownInterval;

startButton.addEventListener('click', () => {
  const selectedDate = new Date(startDateInput.value);
  const currentDate = new Date();

  if (selectedDate < currentDate) {
    notiflix.Notify.info('Please choose a date in the future');
    return;
  }

  let countdownTime = selectedDate.getTime() - currentDate.getTime();

  startBtn.disabled = true;

  countdownInterval = setInterval(() => {
    const timeRemaining = convertMs(countdownTime);

    daysElement.textContent = addLeadingZero(timeRemaining.days);
    hoursElement.textContent = addLeadingZero(timeRemaining.hours);
    minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
    secondsElement.textContent = addLeadingZero(timeRemaining.seconds);

    countdownTime -= 1000;

    if (countdownTime < 0) {
      clearInterval(countdownInterval);
      startButton.disabled = false;
      notiflix.Notify.success('Countdown completed!');
    }
  }, 1000);
});
