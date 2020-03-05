function buildQuiz(){}
submitButton.addEvent('click', showResults);

buildQuiz(
const myQuestions = [
    {
      question: "Who is Scooby Doo?",
      answers: {
        a: "A Cat",
        b: "A Dog",
        c: "What are you doing?"
      },
      correctAnswer: "b"
    },
    {
      question: "What was a show featuring three friends?",
      answers: {
        a: "Ed, Edd and Eddy",
        b: "Rocket Power",
        c: "Futurama"
      },
      correctAnswer: "a"
    },
    {
      question: "What movie did Simba die in?",
      answers: {
        a: "Lion King",
        b: "Aladian",
        c: "Rugrats",
        d: "Code Name Kids Next Door"
      },
      correctAnswer: "a"
    }
    const answers = [];
    for(letter in currentQuestion.answers)answers.push(
        `<label>
          <input type="questions" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }
  ];
);

function showResults(){
    myQuestions.forEach( (currentQuestion, questionNumber)
    const answerContainer = answerContainers[questionNumber];
    const selector = "input[name=question${questionNumber}]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;