var card = $("#quiz-area");

var testQuestions = [
    {
      question: " Our love is like a red, red rose... and I am a little thorny. ",
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
  ];

  var timer;
    
  var game = {
    correct: 0,
    wrong: 0,
    counter: 130,

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
         "<h2>Time Remaining: <span id='counter-number'>130</span> Seconds</h2>"
       );
       
   $("#start").remove();
    
   for (var i = 0; i < testQuestions.length; i++) {
    card.append("<h2>" + testQuestions[i].question + "</h2>");
    for (var j = 0; j < testQuestions[i].answers.length; j++) {
      card.append("<input type='radio' name='question-" + i +
        "' value='" + testQuestions[i].answers[j] + "''>" + testQuestions[i].answers[j]);
    }
  }

  card.append("<button id='submit'>Submit</button>");
  },

    
  done: function() {
  var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === testQuestions[i].correctAnswer) {
        game.correct++;
        } else {
          game.incorrect++;
        }
      }
      this.result();
    },
  
  result: function() {
    clearInterval(timer);
  
    $("#secondary-wrapper h2").remove();
  
      card.html("<h2>You've Finished!</h2>");
      card.append("<h3>Correct Answers: " + this.correct + "</h3>");
      card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
  };
 

$(document).on("click", "#start", function() {
  game.start();
});
  
$(document).on("click", "#submit", function() {
  game.done();
});
  