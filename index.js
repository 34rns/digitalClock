const clockDom = document.querySelector(".clock");

function clock() {
  const date = new Date();

  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const twelveHour = hour > 12 ? hour - 12 : hour;
  const formattedHour = twelveHour < 10 ? "0" + twelveHour : twelveHour;
  const formattedMin = min < 10 ? "0" + min : min;
  const formattedSec = sec < 10 ? "0" + sec : sec;
  const time = formattedHour + ":" + formattedMin + ":" + formattedSec;
  clockDom.textContent = time;
}
const myIn = setInterval(() => {
  clock();
}, 1000);

// clearInterval(myIn);

// console.log(clock());
