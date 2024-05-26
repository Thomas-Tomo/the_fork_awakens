// Create an audio element and set its source
const flipSound = new Audio("/assets/audio/card-flip-lightsaber.mp3");

// Function to play the sound
function playFlipSound() {
  flipSound.currentTime = 0; // Reset the audio to the start
  flipSound.play();
}

// Get all flip cards
const flipCards = document.querySelectorAll('.flip-card');

// Add hover event listener to each flip card
flipCards.forEach((card) => {
  card.addEventListener('mouseenter', playFlipSound);
});
