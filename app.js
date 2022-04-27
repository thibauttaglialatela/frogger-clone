const timeLefDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
console.log(squares);
let currentIndex = 76; //index correspondant à starting block
const width = 9;
function moveFrog(event) {
try {
    squares[currentIndex].classList.remove("frog");
    switch (event.key) {
        case "ArrowRight":
          (currentIndex % width < width - 1) ? currentIndex++ : null;
          break;
        case "ArrowLeft":
          (currentIndex % width !== 0) ? currentIndex-- : null ;
          break;
        case "ArrowUp":
          currentIndex - width >=0 ?  currentIndex -= width : null;
          break;
        case "ArrowDown":
          currentIndex + width <= squares.length - 1 ?  currentIndex += width : null;
          break;
      }
      squares[currentIndex].classList.add("frog");
      event.preventDefault();
    
}
 catch (error) {
    console.error("interne", error.message);    

}
}

document.addEventListener("keyup", moveFrog);
