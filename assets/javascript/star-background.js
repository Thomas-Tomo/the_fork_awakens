// RequestAnimationFrame Polyfill for smoother animation
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Get canvas element and its 2D rendering context
const canvas = document.getElementById('space');
const c = canvas.getContext('2d');

// Number of stars to generate
const numStars = 1900;

// Radius of stars' glow effect
let radius = '0.' + Math.floor(Math.random() * 9) + 1;

// Focal length for perspective effect
let focalLength = canvas.width * 2;

// Initial warp state (0 for off, 1 for on)
let warp = 0;

// Variables for center of the canvas
let centerX, centerY;

// Array to store star objects
let stars = [],
  star;

// Loop index variable
let i;

// Animation flag
let animate = true;

// Initialize the stars and start the animation loop
initializeStars();

function executeFrame() {
  // Animation loop
  if (animate) requestAnimFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars() {
  // Set center coordinates of the canvas
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  // Generate stars with random positions and properties
  stars = [];
  for (let i = 0; i < numStars; i++) {
    let star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.' + Math.floor(Math.random() * 99) + 1,
    };
    stars.push(star);
  }
}

function moveStars() {
  // Move stars closer to the viewer (simulate depth)
  for (let i = 0; i < numStars; i++) {
    let star = stars[i];
    star.z--;

    if (star.z <= 0) {
      star.z = canvas.width;
    }
  }
}

function drawStars() {
  let pixelX, pixelY, pixelRadius;

  // Resize canvas if window size changes
  if (
    canvas.width !== window.innerWidth ||
    canvas.height !== window.innerHeight
  ) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }

  // Calculate the maximum canvas dimension (width or height)
  const maxCanvasDimension = Math.max(canvas.width, canvas.height);

  // Draw background or clear canvas based on warp state
  if (warp == 0) {
    c.fillStyle = 'rgba(0,10,20,1)';
    c.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Draw stars with perspective effect
  c.fillStyle = 'rgba(254, 254, 254, ' + radius + ')';
  for (i = 0; i < numStars; i++) {
    star = stars[i];

    // Calculate projected position of star on the canvas
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);

    // Draw star with calculated position and size
    c.beginPath();
    c.arc(pixelX, pixelY, pixelRadius, 0, Math.PI * 2); // Create a circle path
    c.fill();
    c.closePath();
    c.fillStyle = 'rgba(254, 254, 254, ' + star.o + ')'; // Adjust opacity for each star
  }
}

// tulio updated
const elements = document.querySelectorAll('#startBtn');
elements.forEach((element) => {
  element.addEventListener('click', function () {
    warp = warp === 1 ? 0 : 1;
    warp = 1; // Activate warp effect
    c.clearRect(0, 0, canvas.width, canvas.height);
    executeFrame();
    // Set a timeout to reset warp to 0 after 2 seconds
    setTimeout(function () {
      warp = 0; // Reset warp effect after 3 seconds
    }, 3000);
  });
});

executeFrame();
