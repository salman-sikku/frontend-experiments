const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    answer: "1995",
  },
];

let quizHeading = document.querySelector(".quiz-heading");
let optionBox = document.querySelector(".option-box");
let nextBtn = document.querySelector("button");

let currentQuiz = 0;
let score = 0;

function loadQuestion() {
  let dataQuiz = quizData[currentQuiz];
  quizHeading.textContent = dataQuiz.question;
  optionBox.innerHTML = "";

  dataQuiz.options.forEach((option) => {
    let label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
    optionBox.append(label);
  });
}

nextBtn.addEventListener("click", () => {
  let selected = document.querySelector("input[name='option']:checked");
  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  let selectedLabel = selected.parentElement;
  selectedLabel.style.border = "1px solid red";

  if (selected.value === quizData[currentQuiz].answer) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuestion();
  } else {
    userShowResult();
  }
});

function userShowResult() {
  document.querySelector(
    ".quiz-conatiner"
  ).innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
}

loadQuestion();
