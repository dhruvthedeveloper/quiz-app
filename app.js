const STORE = {
  questions: [
    {
      title: "What year did World War 1 begin in?",
      answers: ["1912", "1914", "1913", "1915"],
      correct: 1,
      src: "images/first-q-wwi.jpg",
    },
    {
      title:
        "Whose assassination by Gavrilo Princip lead to the culmination of the war?",
      answers: [
        "Archduke Franz Ferdinand",
        "Kaiser Wilhelm II",
        "Tsar Nicholas II",
        "Georges Clemenceau",
      ],
      correct: 0,
      src: "images/Franz-assassination.jpg",
    },
    {
      title: 'What countries formed the "Triple Entente"?',
      answers: [
        "Russia, Germany, Italy",
        "France, Great Britain, Russia",
        "Italy, Germany, Austro-Hungary",
        "Serbia, Russia, France",
      ],
      correct: 1,
      src: "images/wwi-cartoon.jpeg",
    },
    {
      title: "What countries formed the “Triple Alliance”?",
      answers: [
        "Great Britain, Russia, Germany",
        "France, Switzerland, Belgium",
        "Russia, Ottoman Empire, Austro-Hungary",
        "Austro-Hungary, Italy, Germany",
      ],
      correct: 3,
      src: "images/triple-alliance.webp",
    },
    {
      title:
        "What was Germany’s plan to fight French and Russian forces called?",
      answers: [
        "Schlieffen Plan",
        "Hindenburg Plan",
        "von Baum Plan",
        "Maginot Plan",
      ],
      correct: 0,
      src: "images/schlieffen-plan.jpg",
    },
    {
      title: "Which country first intercepted the “Zimmerman telegram”?",
      answers: ["France", "Great Britain", "USA", "Canada"],
      correct: 1,
      src: "images/zimmerman-telegram.jpg",
    },
    {
      title:
        "What was the name of the first U.S. civilian ship to be sunk by a German submarine?",
      answers: ["Lusitania", "Titanic", "Diana", "Britannia"],
      correct: 0,
      src: "images/Lusitania.jpg",
    },
    {
      title: "What country was the first of the Central Powers to surrender?",
      answers: ["Austro-Hungary", "Greece", "Bulgaria", "Italy"],
      correct: 2,
      src: "images/bulgaria-surrender.jpg",
    },
    {
      title: "Which battle lasted for ten months, the longest of the war?",
      answers: [
        "Battle of Verdun",
        "Battle of the Somme",
        "Battle of the Marne",
        "Battle of Cambrai",
      ],
      correct: 0,
      src: "images/battle-of-verdun.jpg",
    },
    {
      title: "Where was the initial armistice with Germany negotiated?",
      answers: [
        "In the Reichstag building in Berlin",
        "In a train car near Compiègne, France",
        "At the Vatican",
        "At Versailles, France",
      ],
      correct: 1,
      src: "images/wwi-armistice.jpg",
    },
  ],
  score: 0,
  currentQuestion: 0,
  correct: false,
  started: false,
  feedback: false,
};

//render functions
function render() {
  if (!STORE.started) {
    $("main").html(renderStart());
  } else if (STORE.feedback) {
    $("main").html(renderFeedback());
  } else if (STORE.currentQuestion >= STORE.questions.length) {
    $("main").html(renderSummary());
  } else {
    $("main").html(renderQuestion());
  }
}

//render functions
function renderStart() {
  return `
  <section class="start">
    <h2>Welcome!</h2>
    <p>Are you ready to test your knowledge on the Great War?</p>
    <img src="images/wwi-homepage.jpg"/>
    <button id="start">Start Quiz</button>
  </section>
  `;
}

function renderFeedback() {
  return `
  <section class="feedback">
    <h2>${STORE.correct ? "Correct!" : "Incorrect"}</h2>
    <p>${STORE.feedback}</p>
    <button id="next">Next Question</button>
  </section>`);
}

function renderSummary() {
  return `
  <section class=summary>
    <h2>Quiz Summary:</h2>
    <p>You got ${STORE.score} out of ${STORE.questions.length} correct!</p>
    <button id="restart">Restart Quiz</button>
  </section>`);
}

/*need to make submission of answer required*/
function renderQuestion() {
  const question = STORE.questions[STORE.currentQuestion];
  return `
  <form class="question">
    <h2>${question.title}</h2>
    <h4>Question: ${STORE.currentQuestion}/${STORE.questions.length}</h4>
    <h4>Score: ${STORE.score}/${STORE.currentQuestion}</h4>
    <section class="question-details">
      <img src="${question.src}">
      <ul>
      ${question.answers
        .map((answer, i) => {
          return `<li>
                  <input type="radio" name="answer"
                  value="${i}" required class="required" id="${i}"/>
                  <label for="${i}">${answer}</label>
                </li>`;
        })
        .join("")}
        <ul>
      </section>
      <button id="submit" type="submit">Submit Answer</button>
  <form>
  `);
}

//event listeners
function onStart() {
  $("main").on("click", "#start", startedQuiz);
}

function onAnswer() {
  $("main").on("submit", ".question", submitAnswer);
}

function onNext() {
  $("main").on("click", "#next", nextQuestion);
}

function onRestart() {
  $("main").on("click", "#restart", restartQuiz);
}

//logic questions
function startedQuiz() {
  STORE.started = true;
  render();
}

function nextQuestion() {
  STORE.currentQuestion++;
  STORE.feedback = false;
  STORE.correct = false;
  render();
}

function restartQuiz() {
  STORE.started = false;
  STORE.currentQuestion = 0;
  STORE.score = 0;
  render();
}

function submitAnswer(e) {
  e.preventDefault();
  const question = STORE.questions[STORE.currentQuestion];
  const guess = parseInt($('input[type="radio"]:checked').val());
  if (question.correct === guess) {
    STORE.correct = true;
    STORE.score++;
  }
  STORE.feedback = `The correct answer was ${
    question.answers[question.correct]
  }`;
  render();
}

//main
function main() {
  onRestart();
  onNext();
  onAnswer();
  onStart();
  render();
}

//callback function
$(main);
