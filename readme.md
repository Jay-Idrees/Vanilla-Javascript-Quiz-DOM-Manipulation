# Vanila JavaScript Quiz in Action 

## About the Project
This project is a Front-End application designed to conduct a quiz. In this example the topic of the quiz is Javascript itself. This quiz is timed. When a user hits the start button, the timer starts, the first question is displayed. The user is presented with the options to select an answer. 
Once a user makes a choice, the selected choice is matched with the actual correct answer and a result of right or wrong is displayed. Subsequently, the next question is presented into the Jumbotron. The score is updated. The quiz will end if the time ends. Towards the end the user is prompted to enter initials and a score is then displayed. The user's scores are stored in local storage. All previous scores are displayed along with the current score. 

[Link to the Quiz App ](https://jay-idrees.github.io/Vanilla-Javascript-Quiz-DOM-Manipulation/) <br />
[Watch a video demonstrating the app functionality](https://youtu.be/-owhO0fuMrw)<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JAY-IDREES](https://github.com/Jay-Idrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Applied Programming Skills](#applied-programming-skills)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Credits and Copyright](#credits-and-copyright)


## User Story

I am the CEO of a Tech company looking to hire fresh grads. I would like an application that allows me to quiz the applicants on their knowledge of coding, in particular javascript. The quiz should be timed and I would like the app to keep track of the score and display results in the end.  



## Technologies used


![Bootstrap](https://img.shields.io/badge/Bootstrap-blueviolet?style=for-the-badge&logo=bootstrap)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)



## Packages used

There are no required packages for this app


## Applied Programming Skills

By completing this project I was able to master application of the following programming skills: 

- Using Vanilla Javascript to Plug into HTML Document Object Model (DOM) elements

- Handeling on-click event listeners to trigger jaascript functions

- Setting up a timer with the application of setInterval and ClearInterval functions

- Clearing the pre-existing contents of an HTML divisin by using innerHTML="" for clearing the way for displaying new information. Note that in this example I have used this method to clear the Jumbotron every time before the next question is displayed.

- Removing an element from HTML by using a .remove method. In this application for example I have used this option to remove the start button before the begining of the quiz. Note that this is different from using show/hide display features

- Mastery over complex DOM manipulatuon with for loops and object oriented programming using pure vanilla Javascript as opposed to relying on modifying CSS features of showing and hiding display features for manipulating DOM elements

- Performing the Front-End CRUD (Create, Read, Update, Delete) functions. For instance, in this project, new elements are created in HTML to display a question and is corresponding answer buttons, retrieving individual questions from the questions object, updating score and displaying it into HTML, emptying the inner HTML by deleting the pre-exisitng HTML elements so that newly created elements using javascript can be displayed

- Applying object oriented programing features by using dot notation

- Using a button's option-value as surrogate for the answer selected by the user, using object oriented programing to match the user choice with the actual answers. This was achieved by retrieving actual answer from the current question object using dot notation and matching it with the button's option-value 

- Using Vanilla Javascript to target multiple HTML elements sharing a common class (e-g in this case the buttons)

- Using Vanilla Javascript to target a unique element to perform a specific task only for that partiular element, e-g clearing only the Jumbotron for the new question to be displayed

- Applying .creatElement, .appendChild, .getAttribute, .remove, .classlist.add event.target etc to manipulate DOM elements with Vanilla Javascript for modifying and displaying information into the innerHTML

- Understaning the significance of Object Oriented Programming in vanilla Javascript and applying it to localStorage

- Using JSON.parse with retrieving data from localStorage, and JSON.stringify when storing data into localStorage

- Applying the localStoage.getitem and localStorage.setitem for retrieveing and storing data respectively

- Using localStorage.removeItem to remove an item from localStorage, note how this is different from clearing the localStorage altogether.

- Using Node.JS to create a high quality readme file.

## Key files in the repository

index.html <br />
script.js <br />
scorerecord.js


## Installation

None

## Usage

Please visit the link https://jay-idrees.github.io/Vanilla-Javascript-Quiz-DOM-Manipulation/


## Testing

None

## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copytight 2020- Present. Jay Idrees


