var card = $("quiz-area")

var myQuestions = [
    {
      question: "Our love is like a red, red rose... and I am a little thorny.",
      answers: [
         "Barb Wire",
         "The Mask",
         "Generation-X",
         "Rugrats"
      ],
      correctAnswer: "The Mask"
    },
    {
      question: "I made my family disappear",
      answers: [
         "Home Alone",
         "Rocket Power",
         "The Sandlot",
         "My Girl"
      ],
      correctAnswer: "Home Alone"
    },
    {
      question: "What do you mean the game thinks?",
      answers: [
         "Lion King",
         "Aladian",
         "Jumanji",
         "Code Name Kids Next Door"
      ],
      correctAnswer: "Jumanji"
    }, 
    {
      question: "Some lady named... Ruth. Baby Ruth", 
      answers: [
        "Little Big League",
        "Benchwarmers",
        "Major League",
        "The Sandlot"
      ],
        correctAnswer:"The Sandlot"   
  }
  ],

  var timer;
  var game = {
    correct: 0,
    wrong: 0,
    counter: 180,
    countdown: function() {
      game.counter--;
      $("#counter-number").html(game.counter);
      if (game.counter === 0) {
        console.log("Game Over");
        game.done();
      }
    },
    
    start: function() {
       timer = setInterval(game.countdown, 1000);

       $("#secondary-wrapper").prepend(
         "<h2>Time Reamining: <span id='counter'>180</span> Seconds</h2>"
       );
       
   $("#start").remove();
    
   for (var i = 0; i < myQuestions.length; i++) {
    card.append("<h2>" + myQuestions[i].question + "</h2>");
    for (var j = 0; j < myQuestions[i].answers.length; j++) {
      card.append("<input type='radio' name='question-" + i +
      "'value='" + myQuestions[i].answers[j] + "''>" + myQuestions[i].answers[j]);
    }
  }

  card.append("<button id='submit'>Submit</button>");
    },

  
  
  };
