// quiz.js

let score = 0;
let currentQuestionIndex = 0; // Initialize the current question index
let questions = []; // Store fetched questions

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

// Function to shuffle questions so they are displayed randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Main function to initialize the quiz
async function initializeQuiz() {
    questions = await fetchQuizData(); // Store the fetched questions in the global variable
    if (questions && questions.length > 0) {
        questions = shuffleArray(questions); // Shuffle the questions array
        displayQuiz(questions[currentQuestionIndex]); // Display the first question
    }
}

// Function to display a question and its answers
function displayQuiz(questionData) {
    const roundElement = document.getElementById('round');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    // Set the round
    roundElement.textContent = `Round ${currentQuestionIndex+1}`;

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
                score++; // Increment score if the answer is correct
            } else {
                resultMessage += `\n\nIncorrect. The correct answer is: ${correctAnswer}`;
            }

            // Show the result
            const dialog = document.getElementById("resultDialog"); 
            const dialogText = document.getElementById("resultText"); 
            const dialogClose = document.getElementById("resultClose"); 
            dialogText.innerText = `${resultMessage}\n\nYour current score is: ${score}`;
            dialog.show();

            dialogClose.addEventListener('click', () => {
                dialog.close()
            })

            // Display the next question or end the quiz
            if (currentQuestionIndex < 9) {
                currentQuestionIndex++; // Move to the next question
                displayQuiz(questions[currentQuestionIndex]); // Display the next question
            } else {
                const quizResult = document.getElementById("result");
                const quizScore = document.getElementById("quizScore")

                roundElement.style.display = "none";
                questionElement.style.display = "none";
                answersElement.style.display = "none";

                quizScore.textContent = `Quiz finished! Your final score is: ${score}`;
                quizResult.style.display = "block";
            }
        });

        answersElement.appendChild(answerElement);
    });
}

// Call the initialize function when the page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);

//currentQuestionIndex < questions.length - 1 || 