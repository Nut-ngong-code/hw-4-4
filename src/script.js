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

function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function startQuiz(quizId) {
  saveToLocalStorage('quiz', quiz);
  const savedQuiz = getFromLocalStorage('quiz');
  
  // สุ่มเลือก 5 คำถามจาก 10 คำถาม
  currentQuestions = [...savedQuiz.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  
  showQuestion();
  startTimer();
}

function showQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  document.getElementById('current-question').textContent = currentQuestionIndex + 1;
  document.getElementById('question-text').textContent = question.text;
  
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  
  question.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.className = 'w-full text-left p-3 rounded border hover:bg-gray-100';
      button.textContent = choice;
      button.onclick = () => submitAnswer(question.id, choice);
      choicesDiv.appendChild(button);
  });
}

function submitAnswer(questionId, answer) {
  const question = currentQuestions[currentQuestionIndex];
  if (answer === question.correct) {
      score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
      showQuestion();
  } else {
      showResult();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById('timer').textContent = 
          `${minutes}:${seconds.toString().padStart(2, '0')}`;

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          showResult();
      }
  }, 1000);
}

function showResult() {
  clearInterval(timerInterval);
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('score').textContent = score;
}