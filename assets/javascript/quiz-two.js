// Global variables
let questionCount = 0;
let questionIndex = 0;
const maxQuestions = 10;

async function fetchQuizData() {
  try {
    const response = await fetch('movie-two.json');
    const data = await response.json();
    return data.questions;
  } catch (error) {
    console.error('Error fetching quiz data:', error);
  }
}

function displayQuiz(questionData) {
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const correctElement = document.getElementById('correct');
  const scoreElement = document.getElementById('score');
  const correctScore = document.getElementsByClassName('correct-wrapper')[0];
  const wrongScore = document.getElementsByClassName('wrong-wrapper')[0];
  const wrongElement = document.getElementById('wrong');
  const missElement = document.getElementById('miss');

  // Set the question text
  questionElement.textContent = questionData.question;

  // Clear previous answers
  answersElement.innerHTML = '';

  // Add the answers to the page
  questionData.options.forEach((option, index) => {
    const answerElement = document.createElement('div');
    answerElement.classList.add('answer');
    answerElement.textContent = option;
    answerElement.setAttribute('data-index', index);

    // Add click event listener
    const handleAnswerClick = () => {
      // Disable all answer buttons
      const allAnswers = document.querySelectorAll('.answer');
      allAnswers.forEach((answer) => {
        answer.style.pointerEvents = 'none';
        if (answer.textContent === questionData.answer) {
          answer.style.backgroundColor = 'green';
        } else if (answer.textContent === option) {
          answer.style.backgroundColor = 'red';
        }
      });

      // Check if the selected option is correct
      if (option === questionData.answer) {
        // Update score by one if correct
        let score = parseInt(scoreElement.textContent);
        score++;
        scoreElement.textContent = score;
        correctScore.style.backgroundColor = 'green';
      } else {
        // Update miss if incorrect
        let miss = parseInt(missElement.textContent);
        miss++;
        missElement.textContent = miss;
        wrongScore.style.backgroundColor = 'red';
      }

      // Set a timer to move to the next question after 2 seconds
      setTimeout(() => {
        // Reset background color
        correctScore.style.backgroundColor = '';
        wrongScore.style.backgroundColor = '';
        // Highlight the correct answer before moving to the next question
        const correctAnswer = questionData.answer;
        const allAnswers = document.querySelectorAll('.answer');
        allAnswers.forEach((answer) => {
          answer.style.pointerEvents = 'auto';
          if (answer.textContent === correctAnswer) {
            answer.style.backgroundColor = 'green';
          }
        });
        // Load the next question
        loadNewQuestion();
      }, 2000);
    };

    answerElement.addEventListener('click', handleAnswerClick);

    answersElement.appendChild(answerElement);
  });
}

async function loadNewQuestion() {
  // Check if the max number of questions has been reached
  if (questionCount >= maxQuestions) {
    showGameOver();
    return;
  }

  const questions = await fetchQuizData();
  if (questions && questions.length > 0) {
    // Get a random index within the range of questions array length
    let questionIndex = Math.floor(Math.random() * questions.length);
    const questionData = questions[questionIndex];
    // Display the randomly selected question
    displayQuiz(questionData);
    questionCount++; // Increment question count only when a question is displayed
    console.log(`Question count: ${questionCount}`); // Debugging log

    // Remove the selected question from the array
    questions.splice(questionIndex, 1);
  }
}

function showGameOver() {
  const score = parseInt(document.getElementById('score').textContent);
  const miss = parseInt(document.getElementById('miss').textContent);

  // Update modal content
  document.getElementById('finalScore').textContent = score;
  document.getElementById('finalMiss').textContent = miss;

  // Show modal
  const gameOverModal = document.getElementById('quizModal');
  gameOverModal.style.display = 'block';
}

function hideGameOver() {
  const gameOverModal = document.getElementById('quizModal');
  gameOverModal.style.display = 'none';
}
async function initializeQuiz() {
  // Load the first question when the page loads
  await loadNewQuestion();

  // Add event listener to the "New Game" button in the modal
  const newGameButton = document.getElementById('newGameButton');
  newGameButton.addEventListener('click', async () => {
    // Reset game variables
    questionCount = 0;
    questionIndex = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('miss').textContent = '0';
    compareScoreAndMiss(); // Reset background color

    // Load the first question of the new game
    await loadNewQuestion();

    // Hide the game over modal
    hideGameOver();
  });

  // // Add event listener to the "Return to home page" button in the modal
  // const returnHomePageButton = document.querySelector(
  //   '#gameOverModal .modal-footer button[data-bs-dismiss="modal"]'
  // );
  // returnHomePageButton.addEventListener('click', () => {
  //   // Redirect to the home page (index.html)
  //   window.location.href = 'index.html';
  // });
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

// Songs for different films - TERRY ADD CODE HERE
// First film
function playAudio() {
  const theme1 = new Audio('assets/audio/star-wars-theme-song.wav');
  theme1.play();
}
//Second film
function playAudio2() {
  const theme2 = new Audio('assets/audio/imperial_march.wav');
  theme2.play();
}

// Third film
function playAudio3() {
  const theme3 = new Audio('assets/audio/phantom-menace.wav');
  theme3.play();
}
