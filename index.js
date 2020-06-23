// Your code here
let dodger = document.getElementById("dodger");
let gameWindow = document.getElementById("game");
let speed = 5;

function moveDodgerLeft() {
   let leftNumbers = dodger.style.left.replace("px", "");
   let left = parseInt(leftNumbers, 10); 

   if (left > 0) {
       dodger.style.left = `${left - speed }px`
   }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10); 
 
    if (left <  360) {
        dodger.style.left = `${left + speed}px`
    }
}


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }

})