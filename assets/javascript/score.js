// Function to fetch the quiz data
async function fetchQuizData() {
    try {
        const response = await fetch('movie-one.json');
        const data = await response.json();
        return data.questions;
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

// Function to display a question and its answers
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

    // Add the answers to the page
    questionData.options.forEach((option, index) => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.textContent = option;
        answerElement.setAttribute('data-index', index);

        // Add click event listener
        answerElement.addEventListener('click', () => {
            const selectedOption = option;
            const correctAnswer = questionData.answer;

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
        });

        answersElement.appendChild(answerElement);
    });
}

// Function to load a new quiz question
async function loadNewQuestion() {
    const questions = await fetchQuizData();
    if (questions && questions.length > 0) {
        // Get a random index within the range of questions array length
        const randomIndex = Math.floor(Math.random() * questions.length);
        // Display the randomly selected question
        displayQuiz(questions[randomIndex]);
    }
}

// Function to compare score and miss values and update body background color
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

// Main function to initialize the quiz
async function initializeQuiz() {
    // Load the first question when the page loads
    await loadNewQuestion();

    // Add event listener to the "Next" button
    const nextButton = document.querySelector('.btn--play');
    nextButton.addEventListener('click', () => {
        loadNewQuestion();
        compareScoreAndMiss(); // Ensure background color is updated when loading a new question
    });
}

// Call the initialize function when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
