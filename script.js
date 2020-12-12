var currentQuestion = 0;
// DOM Elements
//==========================================

var startButton = document.getElementById("start-quiz");
var containerEl = document.querySelector(".container");
var questionEl = document.getElementById("question");
var jumbowelcome_h = document.getElementById("jumbo_welcome");
console.log(jumbowelcome_h)
var answerListEl;

// User communication vectors 
                 // I N P U T S
// Welcome page: Start button
var timer = document.getElementById("timer");
// OPTIONAL:
// clicking mark
// clicking to highlight text
// clicking to underling text
// clicking to cross out text
// 


// Questions

var quizQuestions = [
  {question: " Q1: Common datatypes in Javaascript include which of the following", options: ["strings", "booleans", "objects", "all of the above"], answer: "4"},
  {question: " Q2: What is an array ?", options: ["A list of objects", "a list of numbers", "a list of strings", "all of the above"], answer: "4"},
  {question: " Q3: An object in JavaScript can be composed of which of the following", options: ["text", "symbols", "numbers", "all of the above"], answer: "4"},
  {question: "Q4: How are objects enclosed in javascript- what type of brackets?", options: ["commas", "curly brackets", "quotes", "parenthesis"], answer: "2"},
  {question: "Q5: Which program can you use to run javascript code in the terminal", options: ["JavaExpress", "MongoDB", "NodeJS", "React"], answer: "3"}
];





                // O U T P U T S
// Timer
// Progress bar
// Warning signs with time
// Result
// Heighlighting, marking, underlining, 

// Other variables
    // questions object
    // Score





//=====================================
//  E V E N T   S E Q U E N C E
//=====================================

// Clicking start button should bring the first question

// Clicking start should start the timer

// CLicking the next button should make the current question disappear

// Clicking the next button should save user response

// determine if the question is correct or wrong

// update the progress bar

// Present the next question

// Repeat steps for the subsequent questions

// Warning modal at 1 minute

// Warning modal when time up

// Exam end screen with final score 


//Optional
// Any time
      // User can click marked- save info
      // User can hightlight/underline/cross text
      // Review for unanswered and 
      // pause the timer for a break of 1 minute
      // If longer than 1 minute is passed the timer resumes automatically






// Features to be included later

     // Progress bar to track question
     // timer started on clicking start
     // Next/Previous button
     // Mark a question
     // hightlight text of selected question
     // cross-out text of selected question
     // Underline text
     // Pause exam for a break 
     // Review marked/unanswered questions
     // Storing score of correct and wrong answers
     // Warning when one minute left
     // Modal when time is up
     // Displaying result in the end
     // Close button
     // Disabeling copying of test
     // Disabeling mouse right click


// Function to start the quiz
function startQuiz() {
  // Starting the timer
  jumbowelcome_h.innerHTML=""
  var secondsLeft = 75;
  timer.innerText = secondsLeft;

  // Timer countdown
  var timerInterval = setInterval(function() {    
      secondsLeft--;
      timer.innerText = secondsLeft;

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      // Ending the quiz
        endQuiz(secondsLeft);
      }

  }, 1000);

  startButton.remove();

    // Create a list for answers and add place it
    answerListEl = document.createElement("ul");
    // answerListEl.style.listStyle = "none";
    // answerListEl.style.padding = "0";
    answerListEl.classList.add("answer-list");
    containerEl.appendChild(answerListEl);

    // When a user chooses an answer- the answer is compared, result is displayed and the next question is displayed
    answerListEl.addEventListener("click", function(event) {
      var clickedElement = event.target;
      if (clickedElement.matches("button")) {
          // console.log("The click is working");
          var userChoice = clickedElement.getAttribute("option-value");
          // console.log(userChoice);   
          // Compare the user choice to the actual answer
console.log ("User choice", userChoice)
console.log ("current question", quizQuestions[currentQuestion])
console.log ("answer", quizQuestions[currentQuestion].answer)

          if (userChoice === quizQuestions[currentQuestion].answer) {
              displayResult("Correct");
          }
          else {
              displayResult("Wrong");
              secondsLeft -= 10;
              timer.innerText = secondsLeft;
          }

          // Move on to the next question
          currentQuestion++;
          // Clearing the time interval is the next question is the last question
          if (currentQuestion === quizQuestions.length) {
              clearInterval(timerInterval);
              endQuiz(secondsLeft);
          }
          else {
              displayQuiz(currentQuestion);
          }
      }
  });

 
    displayQuiz(currentQuestion);
}






// Setting up the display result function
function displayResult(result) {
  var resultEl = document.createElement("p");
  resultEl.innerText = result;
  containerEl.appendChild(resultEl);    
  var resultInterval = setInterval( function () {
      resultEl.remove();
      clearInterval(resultInterval);
  }, 750);
}



function displayQuiz(questionIndex) {
  questionEl.innerText = quizQuestions[questionIndex].question;
  answerListEl.innerHTML = "";
// Displaying the question options
  for (let i = 0; i < quizQuestions[questionIndex].options.length; i++) {
 // Creating a list of buttons
      var liEl = document.createElement("li");
      var buttonEl = document.createElement("button");
      // Build
      buttonEl.setAttribute("option-value", i+1);
      buttonEl.classList.add("button");
      buttonEl.innerText = (i+1) + ". " + quizQuestions[questionIndex].options[i];
      // Place
      liEl.appendChild(buttonEl);
      answerListEl.appendChild(liEl);
  }
}




// Defining the end of quiz function
function endQuiz(score) {
  // Removing the buttons
  answerListEl.remove();
  // Displaying final score
  questionEl.innerText = "Your final score is " + score;
  
  // Asking the for the user's initials
  var FormEl = document.createElement("form");
  containerEl.appendChild(FormEl);

  // Add input field and a submit button to the form
  var labelEl = document.createElement("label");
  labelEl.innerText = "Enter initials: ";
  FormEl.appendChild(labelEl);
  var inputEl = document.createElement("input");
  FormEl.appendChild(inputEl);
  var submitButton = document.createElement("button");
  submitButton.classList.add("button");
  submitButton.innerText = "Submit";
  FormEl.appendChild(submitButton);


  // Event listener for when the user clicks the submit button on submitting the initials
  FormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    var userInitial = inputEl.value;
    if (userInitial) {
        var scoreObj = { initials: userInitial, score: score};
        // console.log(userInitial);

// Obtaining the previous score from local storage
        var highscoresList = JSON.parse(localStorage.getItem("code-quiz-highscores"));
        // console.log(highscoresList);
        if (highscoresList) {
            highscoresList.push(scoreObj);
        }
        else {
            highscoresList = [scoreObj];
        }      
    //Storing the high score list to local storage
        localStorage.setItem("code-quiz-highscores", JSON.stringify(highscoresList));
        // Redirecting to highscores page  
        location.href = "highscores.html";  
    }             
});
}

//Starting the quiz for the start of the quiz button
startButton.addEventListener("click", startQuiz);



