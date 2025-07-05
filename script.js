function updateISTClock() {
  const clockElement = document.getElementById("clock");

  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const nowIST = new Date().toLocaleTimeString('en-US', options);
  clockElement.textContent = nowIST;
}

// Initial display
updateISTClock();
// Update every second
setInterval(updateISTClock, 1000);
