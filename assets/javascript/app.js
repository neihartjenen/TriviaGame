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
      correctAnswer: "b"
    },
    {
      question: "I made my family disappear",
      answers: [
         "Home Alone",
         "Rocket Power",
         "The Sandlot",
         "My Girl"
      ],
      correctAnswer: "a"
    },
    {
      question: "What do you mean the game thinks?",
      answers: [
         "Lion King",
         "Aladian",
         "Jumanji",
         "Code Name Kids Next Door"
      ],
      correctAnswer: "c"
    }, 
    {
      question: "Some lady named... Ruth. Baby Ruth", 
      answers: [
        "Little Big League",
        "Benchwarmers",
        "Major League",
        "The Sandlot"
      ],
        correctAnswer:"d"   
  }
  ],

  var timer;
  var game = {
    correct: 0,
    incorrect: 0,
    counter: 180
    countdown: function() {
      game.counter--;
      $("#counter-number").html(game.counter);
      if (game.counter === 0) {
        console.log("Game Over");
        game.done();
      }
    },
  
  
  
  };
