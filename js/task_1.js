

const dateRef = {
  day: document.querySelector('span[data-value="days"]'),
  hour: document.querySelector('span[data-value="hours"]'),
  min: document.querySelector('span[data-value="mins"]'),
  sec: document.querySelector('span[data-value="secs"]'),
}

const targetDate = new Date('Jul 17, 2021');

const timer = setInterval(() => {
  const dateNow = new Date();
  const remainingTime = targetDate - dateNow;
  fnTimer(remainingTime);
}, 1000);

// -------------------> Шаблонная ф-я:
function fnTimer(time) {
  //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  //  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  //  * остатка % и делим его на количество миллисекунд в одном часе
  //  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  //  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  //  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  //  * миллисекунд в одной секунде (1000)
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
  dateRef.day.textContent = days;
  dateRef.hour.textContent = hours;
  dateRef.min.textContent = mins;
  dateRef.sec.textContent = secs;
};

// -------------------> Ф-я которая добивает строку (переводит формат времини с 0:0 -> 00:00)
function pad(value) {
  return String(value).padStart(2, '0');
}