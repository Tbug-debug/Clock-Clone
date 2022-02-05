const clocking = document.querySelector("#clock");

function getClock() {
  const clock = new Date();
  const second = String(clock.getSeconds()).padStart(2, "0");
  const hour = String(clock.getHours()).padStart(2, "0");
  const minutes = String(clock.getMinutes()).padStart(2, "0");
  clocking.innerHTML = `${hour}:${minutes}:${second}`;
}

getClock();
setInterval(getClock, 1000);
