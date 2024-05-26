// Global variables
let questionCount = 0;
let questionIndex = 0;
const maxQuestions = 1;

async function fetchQuizData() {
  try {
    const response = await fetch('movie-one.json');
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

  // Choose image and text based on score
  const resultImage = document.getElementById('winLose');
  const resultText = document.getElementById('wlText');
  if (score >= 1) {
    resultImage.src = 'assets/images/luke.webp';
    resultText.textContent = 'Congratulations! May the Force be with you.';
  } else {
    resultImage.src = 'assets/images/vader.webp';
    resultText.textContent = 'Welcome to the dark side.';
    resultText.style.color = '#8888';
    // Set text color to black;
  }

  // Show modal
  const gameOverModal = document.getElementById('quizModal');
  gameOverModal.style.display = 'block';
}

// function showGameOver() {
//   const score = parseInt(document.getElementById('score').textContent);
//   const miss = parseInt(document.getElementById('miss').textContent);

//   // Update modal content
//   document.getElementById('finalScore').textContent = score;
//   document.getElementById('finalMiss').textContent = miss;

//   // Show modal
//   const gameOverModal = document.getElementById('quizModal');
//   gameOverModal.style.display = 'block';
// }

function hideGameOver() {
  const gameOverModal = document.getElementById('quizModal');
  gameOverModal.style.display = 'none';
}
async function initializeQuiz() {
  // Load the first question when the page loads
  await loadNewQuestion();
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

// Songs for different films - TERRY ADD CODE HERE
// First film
const theme1 = new Audio('assets/audio/star-wars-theme-song.wav');

function playAudio() {
  theme1.play();
}

function muteAudio() {
  if (theme1.duration > 0 && !theme1.paused) {
    theme1.pause();
    document.getElementById("muteImg").src = "assets/images/volume-mute.png";
  } else {
    theme1.play();
    document.getElementById("muteImg").src = "assets/images/volume-on.png";
  }
}

// code to save score for results

function saveScore() {
  let name = document.getElementById("name").value
  let score = document.getElementById("finalScore").innerText

  const quizResult = {
        name: name,
        score: score
  };
  
  // Retrieve the existing array of objects from local storage.
  let existingResult = JSON.parse(localStorage.getItem("quiz1"));

  // If the array doesn't exist yet, create it.
  if (!existingResult) {
      existingResult = [];
  }

  // Push quizResult into the existingArray.
  existingResult.push(quizResult);

  localStorage.setItem("quiz1", JSON.stringify(existingResult));

  // hide the text box
  document.getElementById("name").style.display.none
  document.getElementById("finalScore").style.display.none

  document.getElementById("scoreSave").innerText="Score saved!"
}