// quiz.js

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
            alert(`You selected: ${option}`);
        });

        answersElement.appendChild(answerElement);
    });
}

// Main function to initialize the quiz
async function initializeQuiz() {
    const questions = await fetchQuizData();
    if (questions && questions.length > 0) {
        // Get a random index within the range of questions array length
        const randomIndex = Math.floor(Math.random() * questions.length);
        // Display the randomly selected question
        displayQuiz(questions[randomIndex]);
    }
}

// Function to display a question and its answers
function displayQuiz(questionData) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

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
            let resultMessage = `You selected: ${selectedOption}`;
            
            // Check if the selected option is correct
            if (selectedOption === correctAnswer) {
                resultMessage += '\n\nCorrect!';
            } else {
                resultMessage += `\n\nIncorrect. The correct answer is: ${correctAnswer}`;
            }

            // Show the result
            alert(resultMessage);
        });

        answersElement.appendChild(answerElement);
    });
}


// Call the initialize function when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);
