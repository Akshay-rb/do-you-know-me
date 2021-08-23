
var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What is your name ?")

console.log("welcome " + userName + " lets play Do you know me well ");

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toLowerCase() ===  answer.toLowerCase()){
    console.log("right!")
    score = score+1
  } else{
    console.log("better luck")
  }

  console.log("current score is " ,score);
  console.log("---------------")
}

var questions = [
  {
    question:"what is My name ?" ,
    answer : "Akshay"
  },{
    question:"Where do I live ?" ,
    answer : "Bangalore"
  },
  {
    question:"Where do I work ?" ,
    answer : "TCS"
  },
  {
    question:"Which month I was born in?" ,
    answer : "August"
  }]

for(let i=0; i< questions.length; i++){
  play(questions[i].question, questions[i].answer)
}