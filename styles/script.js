var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    answer1: "<js>",
    answer2: "<javascript>",
    answer3: "<scripting>",
    answer4: "<script>",
    correct: "<script>"
  },{
    question: "Who invented JavaScript",
    answer1: "Douglas Crockford",
    answer2: "Sheryl Sandberg",
    answer3: "Brendan Eich",
    answer4: "Black Rifle Coffee Company",
    correct: "Brendan Eichh"
  },{
    question: "Which one of these is a JavaScript package manager?",
    answer1: "Node.js",
    answer2: "TypeScript",
    answer3: "npm",
    answer4: "CSS",
    correct: "npm"
  },{
    question: "Which of the following is correct about features of JavaScript?",
    answer1: "JavaScript is a lightweight, interpreted programming language.",
    answer2: "JavaScript is designed for creating network-centric applications",
    answer3: "JavaScript is complementary to and integrated with Java",
    answer4: "All of the Above",
    correct: "All of the Above"
  },{
    question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
    answer1: "document.location='http://www.newlocation.com';",
    answer2: "browser.location='http://www.newlocation.com';",
    answer3: "navigator.location='http://www.newlocation.com'';",
    answer4: "window.location='http://www.newlocation.com';",
    correct: "window.location='http://www.newlocation.com';",
  },{
    question: "The JavaScript syntax defines two types of values what are they?",
    answer1: "Fixed and Variable",
    answer2: "Temporary and Permenant",
    answer3: "Op[en and Closed",
    answer4: "Integers and Letters",
    correct: "Fixed and Variable"
  },{
    question: "What are JavaScript Variables?",
    answer1: "Algorythems for computation",
    answer2: "Containers for storing data values",
    answer3: "Placholders for syntax expressions",
    answer4: "A method of array expression",
    correct: "Containers for storing data values"
  },{
    question: "Which of the following is not a JavaScript operator?",
    answer1: "Assignment",
    answer2: "Addition",
    answer3: "String",
    answer4: "Boolean",
    correct: "Boolean"
  },{
    question: "How is a JavaScript function defined?",
    answer1: "Defined with the function keyword, followed by a name, followed by parentheses ()",
    answer2: "var function = {}",
    answer3: "defined with let and const hoisted to the top of the block, but not initialized",
    answer4: "All of the Above",
    correct: "Defined with the function keyword, followed by a name, followed by parentheses ()",
  },{
    question: "What do you use to run the same code over and over again, each time with a different value.",
    answer1: "Booleans",
    answer2: "Loops",
    answer3: "Arrays",
    answer4: "Comparisons",
    correct: "Loops"
  }];
  
  // Timer
  var time = document.getElementById("timer");
  var yourScore = document.querySelector(".display-3");
  var submitButton = document.getElementById("buttonInitials");
  var inputLine = document.getElementById("inlineFormInput");
  
  var secondsLeft = 50;
  function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
          time.textContent = "Time: " + secondsLeft;
        
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
        
            } else if (runningQuestion === 5) {
              clearInterval(timerInterval);
              console.log(secondsLeft);
              cardQuestions.setAttribute("style", "display: none");
              displayJumbo.setAttribute("style", "display: block");
              yourScore.textContent = "Your score is: " + secondsLeft;
              startButton.setAttribute("style", "display: none");
              submitButton.setAttribute("style", "display: inline");
              inputLine.setAttribute("style", "display: inline-block");
  
            }
          
            
  
      }, 1000);
    }
    
  
  // Start Button
  var startButton = document.getElementById("startQuiz");
  var cardQuestions = document.getElementById("questionsCard");
  var displayJumbo = document.querySelector(".jumbotron");
  
  startButton.addEventListener("click", startGame);
  
  function startGame() {
      setTime();
      firstQuestion();
      console.log("game on");
      cardQuestions.setAttribute("style", "display: block");
      displayJumbo.setAttribute("style", "display: none");
  
  }
  
  
  //Questions
  var answer1 = document.getElementById("button1");
  var answer2 = document.getElementById("button2");
  var answer3 = document.getElementById("button3");
  var answer4 = document.getElementById("button4");
  var question = document.getElementById("questions");
  var correctAnswer = document.getElementById("correctIncorrect");
  var incorrectAnswer = document.getElementById("correctIncorrect");
  
  var runningQuestion = 0;
  
  // First Question Send questions to card
  function firstQuestion() {
    var quest = questions[runningQuestion];
    question.textContent = quest.question;
    answer1.textContent = quest.answer1;
    answer2.textContent = quest.answer2;
    answer3.textContent = quest.answer3;
    answer4.textContent = quest.answer4;
  }
  var quizBtn = document.querySelectorAll(".quizBtn");
  
  // Event listener for buttons and q/a
  for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
      event.stopPropagation();
      if (event.currentTarget.innerText === questions[runningQuestion].correct){
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: yellow");
      secondsLeft = secondsLeft + 5;
      console.log("correct");
    } else {
      incorrectAnswer.textContent = "Incorrect - 5 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      secondsLeft = secondsLeft - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;
  
  
    if (runningQuestion < 5) {
      firstQuestion();
    }
  });
  }
  
  // High Scores 
  
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  
  submitButton.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("click");
    
    var initials = inputLine.value;
    var finalScore = {initials, secondsLeft};
    console.log("Final Score: " + finalScore);
    console.log(initials + " your score is: " + secondsLeft); 
  
  
  
  
    // Send to localStorage
  
    highscores.push(finalScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
  
  });
  