let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;

const quiz = {
  id: "quiz1",
  questions: [
    {
      id: 1,
      text: "1 + 1 = ?",
      choices: ["1", "2", "3", "4"],
      correct: "2",
    },
    {
      id: 2,
      text: "2 + 2 = ?",
      choices: ["2", "3", "4", "5"],
      correct: "4",
    },
    {
      id: 3,
      text: "3 + 3 = ?",
      choices: ["4", "5", "6", "7"],
      correct: "6",
    },
    {
      id: 4,
      text: "4 + 4 = ?",
      choices: ["6", "7", "8", "9"],
      correct: "8",
    },
    {
      id: 5,
      text: "5 + 5 = ?",
      choices: ["8", "9", "10", "11"],
      correct: "10",
    },
    {
      id: 6,
      text: "6 + 6 = ?",
      choices: ["10", "11", "12", "13"],
      correct: "12",
    },
    {
      id: 7,
      text: "7 + 7 = ?",
      choices: ["12", "13", "14", "15"],
      correct: "14",
    },
    {
      id: 8,
      text: "8 + 8 = ?",
      choices: ["14", "15", "16", "17"],
      correct: "16",
    },
    {
      id: 9,
      text: "9 + 9 = ?",
      choices: ["16", "17", "18", "19"],
      correct: "18",
    },
    {
      id: 10,
      text: "10 + 10 = ?",
      choices: ["18", "19", "20", "21"],
      correct: "20",
    },
  ],
};

// บันทึกข้อมูลลง localStorage
localStorage.setItem("quiz", JSON.stringify(quiz));

function startQuiz(quizId) {}
function submitAnswer(questionId, answer) {}
function calculateScore() {}
function showResult() {}
function saveToLocalStorage(key, data) {}
function getFromLocalStorage(key) {}
