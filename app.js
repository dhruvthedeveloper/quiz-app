const STORE = {
  questions: [
    {
      title: "What year did World War 1 begin in?",
      answers: ["1912", "1914", "1913", "1915"],
      correct: 3,
      src: "images/first-q-wwi.jpg",
    },
    {
      title:
        "Whose assassination by Gavrilo Princip lead to the culmination of the war",
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
      src: "images/wwi-cartoon.jpg",
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
      src: "images/triple-alliance.jpg",
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
  guess: 0,
  started: false,
  hasFeedback: false,
};

//render
function render() {
  $("#start").hide();
  $("#quiz").hide();
  $("#next").hide();

  if (!STORE.started) {
    $("#start").show();
  } else if (STORE.started) {
    renderQuestion();
  }
}

//render functions
function renderQuestion() {
  $("#quiz").show();
  const question = STORE.questions[STORE.currentQuestion];
  $("#quiz").html(`
    <form class="question">
    <h2>${question.title}</h2>
    <img class="question-image" src='${question.src}'>
    </form>
    `);
}

//event listeners
function startQuiz() {
  $("#start-quiz").on("click", function (e) {
    STORE.started = true;
    render();
  });
}

function submitChoice() {}

function nextQuestion() {
  $;
}

function restartQuiz() {
  if (STORE.currentQuestion > STORE.questions.length) {
    $("#summary").show();
  } else {
    $("#summary").hide();
  }
}

//main
function main() {
  startQuiz();
  submitChoice();
  nextQuestion();
  restartQuiz();
  render();
}

//callback function
$(main);
