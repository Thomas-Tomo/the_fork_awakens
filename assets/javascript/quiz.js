// Global variables
let timerId;
let questionCount = 0;
let skipCount = 0; // Variable to track the number of skips
const maxQuestions = 10;
const maxSkips = 5;

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
    const scoreElement = document.getElementById('score');
    const missElement = document.getElementById('miss');
    const correctElement = document.getElementById('correct');
    const wrongElement = document.getElementById('wrong');

    // Set the question text
    questionElement.textContent = questionData.question;

    // Clear previous answers
    answersElement.innerHTML = '';

    // Clear previous timer
    clearTimeout(timerId);

    // Add the answers to the page
    questionData.options.forEach((option, index) => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.textContent = option;
        answerElement.setAttribute('data-index', index);

        // Add click event listener
        const handleAnswerClick = () => {
            // Clear the timer when an answer is selected
            clearTimeout(timerId);

            const selectedOption = option;
            const correctAnswer = questionData.answer;

            // Disable all answer buttons
            const allAnswers = document.querySelectorAll('.answer');
            allAnswers.forEach(answer => {
                answer.style.pointerEvents = 'none';
                if (answer.textContent === correctAnswer) {
                    answer.style.backgroundColor = 'green';
                } else if (answer.textContent === selectedOption) {
                    answer.style.backgroundColor = 'red';
                }
            });

            // Check if the selected option is correct
            if (selectedOption === correctAnswer) {
                // Update score by one if correct
                let score = parseInt(scoreElement.textContent);
                score++;
                scoreElement.textContent = score;
                correctElement.style.backgroundColor = "green";
            } else {
                // Update miss if incorrect
                let miss = parseInt(missElement.textContent);
                miss++;
                missElement.textContent = miss;
                wrongElement.style.backgroundColor = "red";
            }

            // Compare score and miss values to set body background color
            compareScoreAndMiss();

            // Set a timer to move to the next question after 2 seconds
            setTimeout(() => {
                loadNewQuestion();
            }, 2000);
        };

        answerElement.addEventListener('click', handleAnswerClick);

        answersElement.appendChild(answerElement);
    });

    // Set a timer to auto move to the next question after 8 seconds
    timerId = setTimeout(() => {
        // Highlight the correct answer before moving to the next question
        const correctAnswer = questionData.answer;
        const allAnswers = document.querySelectorAll('.answer');
        allAnswers.forEach(answer => {
            answer.style.pointerEvents = 'none';
            if (answer.textContent === correctAnswer) {
                answer.style.backgroundColor = 'green';
            }
        });

        // Increment the miss count if no answer was selected
        let miss = parseInt(missElement.textContent);
        miss++;
        missElement.textContent = miss;

        // Change the background color of the wrong element to red
        wrongElement.style.backgroundColor = 'red';

        // Update body background color
        compareScoreAndMiss();

        // Set a timer to move to the next question after 2 seconds
        setTimeout(() => {
            loadNewQuestion();
        }, 2000);
    }, 8000);
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
        const randomIndex = Math.floor(Math.random() * questions.length);
        // Display the randomly selected question
        displayQuiz(questions[randomIndex]);
        questionCount++; // Increment question count only when a question is displayed
        console.log(`Question count: ${questionCount}`); // Debugging log
    }
}

function compareScoreAndMiss() {
    const score = parseInt(document.getElementById('score').textContent);
    const miss = parseInt(document.getElementById('miss').textContent);
    const body = document.body;

    if (miss > score) {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'white';
    }
}

function showGameOver() {
    const score = parseInt(document.getElementById('score').textContent);
    const miss = parseInt(document.getElementById('miss').textContent);

    // Update modal content
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalMiss').textContent = miss;

    // Show modal
    const gameOverModal = new bootstrap.Modal(document.getElementById('gameOverModal'));
    gameOverModal.show();
}

async function initializeQuiz() {
    // Load the first question when the page loads
    await loadNewQuestion();

    // Add event listener to the "Skip" button
    const skipButton = document.querySelector('.btn-play');
    skipButton.addEventListener('click', () => {
        if (skipCount < maxSkips) { // Check if the maximum skips limit has not been reached
            clearTimeout(timerId); // Clear the timer when the Skip button is clicked
            console.log('Skip button clicked'); // Debugging log
            loadNewQuestion();
            compareScoreAndMiss(); // Ensure background color is updated when loading a new question
            skipCount++; // Increment the skip count
            console.log(`Skip count: ${skipCount}`); // Debugging log
            questionCount--; // Decrement question count to not consider skipped question
            console.log(`Question count after skip: ${questionCount}`); // Debugging log
        } else {
            console.log('Max skips reached'); // Debugging log
        }
    });

    // Add event listener to the "New Game" button in the modal
    const newGameButton = document.getElementById('newGameButton');
    newGameButton.addEventListener('click', async () => {
        // Reset game variables
        questionCount = 0;
        skipCount = 0;
        document.getElementById('score').textContent = '0';
        document.getElementById('miss').textContent = '0';
        compareScoreAndMiss(); // Reset background color

        // Load the first question of the new game
        await loadNewQuestion();

        // Hide the game over modal
        const gameOverModal = bootstrap.Modal.getInstance(document.getElementById('gameOverModal'));
        gameOverModal.hide();
    });

    // Add event listener to the "Return to home page" button in the modal
    const returnHomePageButton = document.querySelector('#gameOverModal .modal-footer button[data-bs-dismiss="modal"]');
    returnHomePageButton.addEventListener('click', () => {
        // Redirect to the home page (index.html)
        window.location.href = 'index.html';
    });
}

document.addEventListener('DOMContentLoaded', initializeQuiz);

