'use strict';

// Get the modal
const modal = document.getElementById('myModal');
const btn = document.getElementById('rulesBtn');
const span = document.getElementsByClassName('close')[0];

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

//Start button
const start = document.getElementById('startBtn');
const movies = document.getElementById('movie-container');
const quizFilms = document.getElementById('quiz-container');

const audio1 = new Audio('assets/audio/hyperspace-jump.wav');

start.onclick = function () {
  movies.style.opacity = '0';
  // Start the animation to fade slowly
  setTimeout(function () {
    movies.style.display = 'none';
  }, 1000); // match this with the duration of your transition

  // match this with the duration of your transition
  quizFilms.style.opacity = '1';
  // Start the animation to fade slowly
  setTimeout(function () {
    // match this with the duration of your transition
    quizFilms.style.display = 'flex';
  }, 1000);

  audio1.play();
};

// Hover sound effect for ESB film
// converts the HTMLCollection to an array, so we can use forEach on it
const newHope = Array.from(document.getElementsByClassName('hope'));
const esb = Array.from(document.getElementsByClassName('esb'));
const jedi = Array.from(document.getElementsByClassName('jedi'));
// Create an audio element
const hope = new Audio('assets/audio/droids.mp3');
const father = new Audio('assets/audio/father.mp3');
const laughing = new Audio('assets/audio/laughing.wav');

// To paly the audios on hovers on the images
newHope.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    hope.play();
  });
});
esb.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    father.play();
  });
});
jedi.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    laughing.play();
  });
});

function printResult(quiz){

    // Retrieve highscores from local storage.
  const highScores = JSON.parse(localStorage.getItem(quiz));
  
  if (highScores == null) {
    document.getElementById(`${quiz}Results`).innerText = "Sorry, No Scores Set"
    return
  }

    // Sort the highscores array by score in descending order.
    highScores.sort((a, b) => b.score - a.score);

    // Get a reference to the table element.
    const table = document.getElementById("highscores");

    // Create table name row
    const nameRow = table.insertRow();
    const nameCell = nameRow.insertCell();
    nameCell.colSpan = 2;
    nameCell.innerText = "High Scores";
    nameCell.style.fontWeight = "bolder";

    // Create header row
    const headerRow = table.insertRow();
    const header1 = headerRow.insertCell();
    const header2 = headerRow.insertCell();
    header1.innerText = "Name";
    header2.innerText = "Score";
    header1.style.fontWeight = "bold";
    header2.style.fontWeight = "bold";

    // Loop through the highscores array and add a new row for each score.
    highScores.forEach((score) => {
        const row = table.insertRow();
        const usernameCell = row.insertCell();
        const scoreCell = row.insertCell();
        usernameCell.innerText = score.name;
        scoreCell.innerText = score.score;
    });
  
  document.getElementById("quiz1Results").style.display="none"
  document.getElementById("quiz2Results").style.display = "none"
  document.getElementById("quiz3Results").style.display="none"
};

// If there are any highscores in local storage, call printHighScore function
if (localStorage.getItem("highscores")) {
    printHighScore();
}

