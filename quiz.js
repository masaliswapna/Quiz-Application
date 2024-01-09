// Quiz data: questions, options, and answers
const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Texting Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which of the following is not a programming language?",
      options: ["Python", "Java", "CSS", "Ruby"],
      answer: "CSS"
    },
    {
      question: "What is the purpose of CSS?",
      options: ["To provide structure to web documents", "To add interactivity to web pages", "To define the presentation of web documents", "To create web servers"],
      answer: "To define the presentation of web documents"
    },
    {
      question: "Which tag is used to link an external JavaScript file?",
      options: ["<js>", "<script>", "<javascript>", "<link>"],
      answer: "<script>"
    },
    {
      question: "What is the purpose of the 'alt' attribute in an HTML image tag?",
      options: ["To specify the image source", "To add alternative text for screen readers", "To resize the image", "To link the image to another page"],
      answer: "To add alternative text for screen readers"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which CSS property changes the text color of an element?",
      options: ["color", "background-color", "text-color", "font-color"],
      answer: "color"
    },
    {
      question: "What is the correct way to comment in JavaScript?",
      options: ["//This is a comment", "<!--This is a comment-->", "/*This is a comment*/", "'''This is a comment'''"],
      answer: "//This is a comment"
    },
    {
      question: "What is the output of the following code: console.log(2 + '2')?",
      options: ["22", "4", "NaN", "Error"],
      answer: "22"
    },
    {
      question: "Which HTML tag is used for creating an unordered list?",
      options: ["<ol>", "<ul>", "<li>", "<list>"],
      answer: "<ul>"
    }

  ];
  
  
  let currentQuestion = 0;
let timer;
let seconds = 0;
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const result = document.getElementById('result');
const timerDisplay = document.getElementById('timer');

// Function to load a new question
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionText.textContent = currentQuizData.question;
  optionsContainer.innerHTML = '';

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => checkOption(option));
    optionsContainer.appendChild(button);
  });

  setTimeout(() => {
    questionText.classList.add('fade-in');
    optionsContainer.classList.add('fade-in');
  }, 100);
}

// Function to start the timer
function startTimer() {
  timer = setInterval(() => {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  }, 1000);
}

// Function to check the selected option
function checkOption(selectedOption) {
  clearInterval(timer);
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    result.textContent = "Correct!";
    result.classList.add('correct');
  } else {
    result.textContent = "Wrong! The correct answer is: " + currentQuizData.answer;
    result.classList.add('wrong');
  }

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    setTimeout(() => {
      questionText.classList.remove('fade-in');
      optionsContainer.classList.remove('fade-in');
      result.classList.remove('fade-in');
      result.textContent = '';
      seconds = 0;
      startTimer();
      loadQuestion();
    }, 1500);
  } else {
    setTimeout(() => {
      questionText.classList.remove('fade-in');
      optionsContainer.classList.remove('fade-in');
      result.classList.remove('fade-in');
      result.textContent = `Quiz completed! You took ${timerDisplay.textContent} to complete.`;
    }, 1500);
  }
}

// Initial load of the first question and starting the timer
loadQuestion();
startTimer();