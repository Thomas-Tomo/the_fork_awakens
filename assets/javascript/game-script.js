'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.getElementsByClassName('btn');

  for (const button of buttons) {
    button.addEventListener('click', createButtonClickHandler(button));
  }

  function createButtonClickHandler(button) {
    const dataType = button.getAttribute('data-type');

    function handleStartGame() {
      displayBoard();

      setTimeout(function () {
        window.location.href = 'game.html';
      }, 2000); // match this with the duration of your transition
    }

    function handleEndGame() {
      window.location.href = 'index.html';
    }

    function handleContinueGame() {
      window.location.href = 'game.html';
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

    return function () {
      if (dataType === 'start-game') {
        handleStartGame();
      } else if (dataType === 'end-game') {
        handleEndGame();
      } else if (dataType === 'continue-game') {
        handleContinueGame();
      } else if (dataType === 'play-game') {
        handlePlayGame();
      } else if (dataType === 'restart-game') {
        handleRestartGame();
      } else if (dataType === 'winner') {
        handleWinner();
      } else {
        alert(`Unknown button type: ${button}`);
      }
    };
  }
});

function displayBoard() {
  let lightSide = document.getElementById('light-side');

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
