var playerOneButton = document.querySelector("#p1")
var playerTwoButton = document.querySelector("#p2")
var p1score = 0
var p2score = 0
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")

playerOneButton.addEventListener("click", function() {
    if (p1score<5) {
    p1score++;
    p1Display.textContent = p1score
        if (p1score === 5) {
            p1Display.textContent = p1score
        }
    }


    
})


playerTwoButton.addEventListener("click", function () {
    p2score++;
    p2Display.textContent = p2score
})