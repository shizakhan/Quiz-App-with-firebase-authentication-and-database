  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
  import { getDatabase, ref, set, push, onChildAdded, update, remove } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCfHsvXxJUqRe95BoSSRNtzwwnHHon1hhE",
    authDomain: "quizapp-firebase-db-auth.firebaseapp.com",
    databaseURL: "https://quizapp-firebase-db-auth-default-rtdb.firebaseio.com/",
    projectId: "quizapp-firebase-db-auth",
    storageBucket: "quizapp-firebase-db-auth.firebasestorage.app",
    messagingSenderId: "574507323660",
    appId: "1:574507323660:web:1a5d607f33333db74df929"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  var Auth = getAuth(app);
  var db = getDatabase(app);

var questionData = [{
    question: "What tag is used to define a hyperlink in HTML?",
    options: ["link","a","href","hyper"],
    answer:"link",
},
{
    question: "What is the purpose of the br tag?",
    options: ["Start a new paragraph","Break line","Bold text","Create a list"],
    answer:"Break line",
},
{
    question: "Which HTML tag is used to define a table cell?",
    options: ["table","tr","td","th"],
    answer:"table",
},
{
    question: "What does the ul tag represent?",
    options: ["Ordered list","Unordered list","Underlined list","Universal list"],
    answer:"Unordered list",
},
{
    question: "Which tag is used to make text bold?",
    options: ["strong","bold","b","em"],
    answer:"b",
}];
//taking values from html 
var questioncount = document.getElementById("questioncount");
var question = document.getElementById("question");
var options = document.getElementById("options");
var progress = document.getElementById("progress");
var progress1 = document.getElementById("progress1");
var percent = document.getElementById("percent");

var questionIndex = 0; // this will match the index value from question data 
var score = 0;
//var progressvalue = 1;

function renderQuestions() {
    if (questionIndex < questionData.length) {
        var currentQuestion = questionData[questionIndex];
        //progress.style.width = `${(progressvalue / questionData.length) * 100}%`
        question.innerHTML = `<h2>${currentQuestion.question}</h2>`;
        questioncount.innerHTML = `Current Question: ${questionIndex + 1}/${questionData.length}`;
        //to render options
        options.innerHTML = "";
        currentQuestion.options.forEach(function (option) {
            options.innerHTML += `
            <button class="option" onclick="checkAnswer('${option}','${currentQuestion.answer}')">${option}</button>
            `
        });

    } else {
        showscore();
    }
}

function nextQuestion() {
    //progressvalue++;
    questionIndex++;
    renderQuestions();
}

window.checkAnswer=function(userAnswer, correctAnswer) {
    if (userAnswer ===  correctAnswer) {
        score++;
        //console.log(score);
    }
    nextQuestion();

}

function showscore() {
    //progress1.style.display = 'none';
    question.innerHTML = "Quiz Completed!"
    options.innerHTML = `Your Score is: ${score}/${questionData.length}`;
    percent.innerHTML = `${(score / questionData.length) * 100}%`;

}

window.onload = function () {
    renderQuestions();
}
