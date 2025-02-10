let time = 600;
let score;

// เพิ่มแบบสอบถาม
const quiz = {
  id: "quiz1",
  question: [
    {
      id: 1,
      text: "what is 1+1 =?",
      choices: ["1", "2", "3", "4"],
      correct: "2",
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
