function updateClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const currentTime = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("clock").textContent = currentTime;
}

updateClock();
setInterval(updateClock, 1000);
