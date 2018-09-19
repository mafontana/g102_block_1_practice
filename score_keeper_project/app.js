var playerOneButton = document.querySelector("#p1")
var p1score = 0
var p1Display = document.querySelector("#p1Display")

playerOneButton.addEventListener("click", function() {
    p1score++; 
    p1Display.textContent = p1score
})