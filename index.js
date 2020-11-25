var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome "+ userName +", to Do You know Arnav!");

// function begins
var readlineSync = require('readline-sync');
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("you're right");
    score++;
  }
  else{
    console.log("Nope!, you're wrong");
  }
  console.log("current score: ",score);
  console.log("------------")
}


// arrays
var questions = [
  {question: "Who is my favorite superhero? ",
  answer: "captain america"},
  {question: "Where do i live? ",
  answer: "bagaha"},
  {question: "in which city i study? ",
  answer: "kolkata"},
  {question: "which is my favorite dish? ",
  answer: "biryani"},
  {question: "My favorite dessert? ",
  answer: "choco fuzz"}
  ];

for(var i=0; i<questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}
console.log("final score is: ",score)