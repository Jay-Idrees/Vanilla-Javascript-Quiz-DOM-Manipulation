

// One 

   var brands = ["Acer", "Apple", "Sony", "Samsung"];

  //  Print array 

   function consoleInside(arr){
     for (var i=0; i<arr.length;i++){
     console.log(arr[i]);
     }
     console.log('-----');
   }

 consoleInside(brands);

//  two Checking if a number is greater than 2
 var nums = [1, 8, 2, 3, 1, 1, 6, 6, 6];

 for (var i=0;i<nums.length;i++){
   if (nums[i]>2){
     console.log('The number is greater than 2 '+num)
   }
   else{
     consol.log('the number is less than 2 '+num)
  }
 }


//  Three extracting data from an object and then storing in variable

 var joanOfArcInfoParts = ["Real Name", "Grew Up Where", "Known For", "Scars", "Symbolism"];

// Values for Joan's "properties."
var joanOfArcInfoValues = [
  "Jehanne la Pucelle.",
  "Domremy, a village in northeastern France.",
  "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
  "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
  "Stands for French unity and nationalism."
];
 var input = "Real Name";

// How do I use input to get "Jehanne la Pucelle."
var index = joanOfArcInfoParts.indexOf(input);
var valuesIndex = joanOfArcInfoValues[index];


// Four- Accessing and storing variables from an object

if (gandalf.haveRetirementPlan) {

  // Or with a variable that matches the name of the property
  var ageProperty = "age (est)";
  var years = gandalf[ageProperty];
  alert("My 401k has been gathering interest for " + years + " years!");
}

// FIVE Functions inside an object

},

// second function
driveAroundWorld: function() {
    alert("Old Mileage: " + this.mileage);

    this.mileage = this.mileage + 24000;

    alert("New Mileage: " + this.mileage);
    alert("Car needs a tuneup!");

    this.isWorking = false;
},


//SIX
// The array of questions for our quiz game.
var questions = [
  { q: "The sky is blue.", a: "t" },
  { q: "There are 365 days in a year.", a: "t" },
  { q: "There are 42 ounces in a pound.", a: "f" },
  { q: "The Declaration of Independence was created in 1745.", a: "f" },
  { q: "Bananas are vegetables.", a: "f" }
];

// We start the game with a score of 0.
var score = 0;

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if ((answer === true && questions[i].a === "t") ||
    (answer === false && questions[i].a === "f")) {
    // Increase score
    score++;
    alert("Correct!");
  }
  else {
    alert("Wrong!");
  }
}

// Show total at end
alert("You got " + score + "/" + questions.length);
