// DOM Elements

var highscoresListEl = document.getElementById("highscores-list");
var clearButton = document.getElementById("clear-highscores");

// Get highscores from local storage
var highscoresList = JSON.parse(localStorage.getItem("code-quiz-highscores"));
// console.log(highscoresList);

if (highscoresList) {
    // Sort the scores from highest to lowest scores
    highscoresList.sort(function(a, b){return b.score - a.score}); // from https://www.w3schools.com/js/js_array_sort.asp
    
    highscoresList.forEach(function(highscore, index) {
        var liEl = document.createElement("li");
        liEl.innerText = highscore.initials + " - " + highscore.score;
        highscoresListEl.appendChild(liEl);
    });
}

// Giving an option to the user to clear previous scores in local storage
clearButton.addEventListener("click", function(event) {
    event.preventDefault();
// Removing the scores from local storage
    localStorage.removeItem("code-quiz-highscores");
    // Clearing the hTML display from the high scores
    highscoresListEl.innerHTML = "";
})
