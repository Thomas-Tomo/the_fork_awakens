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
const home = document.getElementById('return-home');
const removeBg = document.getElementById('space');
const addBg = document.getElementById('backgroundImg');

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

  removeBg.style.opacity = '0';
  // Start the animation to fade slowly
  setTimeout(function () {
    removeBg.style.display = 'none';
  }, 5000); // match this with the duration of your transition
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
// To paly the audio
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
