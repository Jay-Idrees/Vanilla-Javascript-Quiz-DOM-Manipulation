
// DOM Elements
//==========================================

var startButton = document.getElementById("start-quiz");
var containerEl = document.querySelector(".container");
var questionEl = document.getElementById("question");
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
  {question: "Common datatypes in Javaascript include which of the following", options: ["strings", "booleans", "objects", "all of the above"], answer: "4"},
  {question: "What is an array ?", options: ["A list of objects", "a list of numbers", "a list of strings", "all of the above"], answer: "4"},
  {question: "An object in JavaScript can be composed of which of the following", options: ["text", "symbols", "numbers", "all of the above"], answer: "4"},
  {question: "How are objects enclosed in javascript- what type of brackets?", options: ["commas", "curly brackets", "quotes", "parenthesis"], answer: "2"},
  {question: "Which program can you use to run javascript code in the terminal", options: ["JavaExpress", "MongoDB", "NodeJS", "React"], answer: "3"}
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

    // When a user chooses an answer- the answer is compared, result is displayed and the next question is displayed
    answerListEl.addEventListener("click", function(event) {
      var clickedElement = event.target;
      if (clickedElement.matches("button")) {
          // console.log("The click is working");
          var userChoice = clickedElement.getAttribute("option-value");
          // console.log(userChoice);   
          // Compare the user choice to the actual answer
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

  var currentQuestion = 0;
    displayQuiz(currentQuestion);
}












$('#user_citysearch_bt').click(function () {
    //it takes user input and stores it in a var cityName
  
    // Empty jumbotron
    // Start the timer
    // Create Question p
    // Create answer options radiobuttons
    // Display the question and answer options
    // Save user answer

    

  });
  





//====================================
// F U N C T I O N S
//====================================

function showQ(){

}

function hideQ(){

}

function timerStart(){

}

function rightOrWrong(){

}

function linkProgBar(){

}

function saveAns(){

}

function displayScore() {
    
}



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
