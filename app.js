const timeLefDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
console.log(squares);
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
let currentIndex = 76; //index correspondant à starting block
const width = 9;

function moveFrog(event) {
  try {
    squares[currentIndex].classList.remove("frog");
    switch (event.key) {
      case "ArrowRight":
        currentIndex % width < width - 1 ? currentIndex++ : null;
        break;
      case "ArrowLeft":
        currentIndex % width !== 0 ? currentIndex-- : null;
        break;
      case "ArrowUp":
        currentIndex - width >= 0 ? (currentIndex -= width) : null;
        break;
      case "ArrowDown":
        currentIndex + width <= squares.length - 1
          ? (currentIndex += width)
          : null;
        break;
    }
    squares[currentIndex].classList.add("frog");
    event.preventDefault();
  } catch (error) {
    console.error("interne", error.message);
  }
}

document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
  logsRight.forEach((logRight) => moveLogRight(logRight));
}

const moveLogLeft = (logLeft) => {
  switch (true) {
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
};

function moveLogRight(logRight) {
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;
    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;
  }
}

setInterval(autoMoveLogs, 1000);
