'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.getElementsByClassName("btn");

  for (const button of buttons) {
    button.addEventListener("click", createButtonClickHandler(button));
  }

  function createButtonClickHandler(button) {
    const dataType = button.getAttribute("data-type");

    function handleStartGame() {

      displayBoard();

        setTimeout(function () {
          window.location.href = "game.html";
        }, 2000); // match this with the duration of your transition
      
      
    }

    function handleEndGame() {
      window.location.href = "index.html";
    }

    function handleContinueGame() {
      window.location.href = "game.html";
    }

    

    function handlePlayGame() {
      playGame();
    }

    function handleRestartGame() {
      restartGame();
    }

    function handleWinner() {
      closeWinPopup();
      restartGame();
    }

    return function() {
      if (dataType === "start-game") {
        handleStartGame();
      } else if (dataType === "end-game") {
        handleEndGame();
      } else if (dataType === "continue-game") {
        handleContinueGame();
      } else if (dataType === "play-game") {
        handlePlayGame();
      } else if (dataType === "restart-game") {
        handleRestartGame();
      } else if (dataType === "winner") {
        handleWinner();
      } else {
        alert(`Unknown button type: ${button}`);
      }
    };
  }
});


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

// btn.onclick = function () {
//   modal.style.display = 'block';

//   // Play the audio when the modal is opened
//   audio.play();
// };

// span.onclick = function () {
//   modal.style.display = 'none';
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };

// Start button
const start = document.getElementById('startBtn');
const movies = document.getElementById('movie-container');

start.onclick = function () {
  movies.style.opacity = '0';
  // Start the animation to fade slowly
  setTimeout(function () {
    movies.style.display = 'none';
  }, 1000); // match this with the duration of your transition
};



/////////////////// Bekry //////////

function displayBoard() {

  let lightSide = document.getElementById("ligth-side");
  
  // Start button
const start = document.getElementById('startBtn');
const movies = document.getElementById('movie-container');

start.onclick = function () {
  movies.style.opacity = '0';
  // Start the animation to fade slowly
  setTimeout(function () {
    movies.style.display = 'none';
  }, 1000); // match this with the duration of your transition
};
  // lightSide.innerHTML = "0";

   // Set gameStarted flag to true
  //  gameStarted = true;
  
}

