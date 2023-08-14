const hoursHand = document.getElementById("hours");
const minutesHand = document.getElementById("minutes");
const secondsHand = document.getElementById("seconds");

function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursRotation = (hours * 30 + minutes * 0.5) % 360;
  const minutesRotation = (minutes * 6 + seconds * 0.1) % 360;
  const secondsRotation = (seconds * 6) % 360;

  hoursHand.setAttribute("transform", `rotate(${hoursRotation} 243.5 250.5)`);
  minutesHand.setAttribute(
    "transform",
    `rotate(${minutesRotation} 243.5 250.5)`
  );
  secondsHand.setAttribute(
    "transform",
    `rotate(${secondsRotation} 243.5 250.5)`
  );
}
updateClock();
setInterval(updateClock, 1000);

const tickSound = new Audio('tick.mp3');
tickSound.addEventListener('canplaythrough', (event) => {
    // The audio is now playable; play it
    tickSound.play();
}, { once: true });
