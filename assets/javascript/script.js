'use strict';
// This is amount of divs/ stars being created in the background
const stars = 350;
// Function to generate random x & y coordinates for the stars
function addStars() {
  // Loop through the number of stars specified
  for (let i = 0; i < stars; i++) {
    // Generate a random x & y coordinate within the window's inner width and height
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    // Return an array containing the x & y coordinates
    return [x, y];
  }
}
// Loop through the number of stars specified
for (let i = 0; i < stars; i++) {
  // Create a new div element to represent a star
  const star = document.createElement('div');
  // Set the class name of the star to 'stars'
  star.className = 'stars';
  // Get the x and y coordinates for the star from the addStars function
  let xy = addStars();
  // Set the left and top styles of the star to the calculated coordinates
  star.style.right = xy[0] + 'px';
  star.style.left = xy[0] + 'px';
  star.style.top = xy[1] + 'px';
  // Add the star to the document body
  document.body.append(star);
}

// Get the modal
var modal = document.getElementById('myModal');
var btn = document.getElementById('rulesBtn');
var span = document.getElementsByClassName('close')[0];

const audio = new Audio('assets/audio/do_or_do_not.mp3');

btn.onclick = function () {
  modal.style.display = 'block';

  // Play the audio when the modal is opened
  audio.play();
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const quizData = [
  {
    question: "Who is Luke Skywalker's father?",
    options: ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
    answer: "Darth Vader"
  },
  {
    question: "What is the name of Han Solo's ship?",
    options: ["Millennium Falcon", "Star Destroyer", "X-Wing", "TIE Fighter"],
    answer: "Millennium Falcon"
  },
  {
    question: "Who trained Yoda?",
    options: ["Darth Bane", "Count Dooku", "Qui-Gon Jinn", "N'Kata Del Gormo"],
    answer: "N'Kata Del Gormo"
  }
];

// Function to populate Quiz
const populateQuiz = () => {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = quizData.map((questionData, index) => `
      <div class="question">
          <h3>${index + 1}. ${questionData.question}</h3>
          ${questionData.options.map(option => `
              <label>
                  <input type="radio" name="question${index}" value="${option}">
                  ${option}
              </label><br>
          `).join('')}
      </div>
  `).join('');
};

// Function to calculate score
const calculateScore = () =>
  quizData.reduce((score, { answer }, index) =>
    document.querySelector(`input[name="question${index}"]:checked`)?.value === answer
      ? score + 1
      : score, 0);

// Event listener for submitting quiz
document.getElementById('submit-quiz').addEventListener('click', () => {
  const score = calculateScore();
  alert(`Your score is: ${score} out of ${quizData.length}`);
  // Save the score to localStorage and redirect to the results page
  localStorage.setItem('latestScore', score);
  window.location.href = 'results.html';
})

// Populate the quiz on page load
document.addEventListener('DOMContentLoaded', populateQuiz);