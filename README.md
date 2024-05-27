# STAR WARS Classic Quiz

# <img src="./assets/images/star-wars-logo.svg" alt="star wars logo" width="100" height="50">

## Description

Welcome to the Classic Star Wars Quiz! This web-based game tests your knowledge of the Star Wars universe through a series of challenging and entertaining questions. Whether you're a casual fan or a die-hard enthusiast, this game is designed to engage and entertain you.

![Am I responsive](/assets/images/am-i-responsive.PNG)

## **TABLE OF CONTENTS**

- [**Team Goal**](#the-team)
- [**Design**](#design)
  - [Colours](#colours)
  - [Typography](#typography)
  - [Wireframes](#wireframes)
  - [Audio](#audio)
- [**Features**](#features)
  - [Footer](#footer)
  - [Home Page](#home-page)
  - [Team Page](#team-page)
  - [Game Flow](#game-flow)
  - [Tech Stack](#tech-stack)
- [**Testing**](#testing)
- [**Bugs**](#bugs)
- [**Credits**](#credits)
- [**The Team**](#the-team)

<hr>

## **Design**

### **Colours**

- Research led to most commonly found colours related to Star Wars.
- We selected a palette of complimentary colours with a galactic theme.
- Colours were selected using the coolors color palette generator.
- An image incorporating [enter feature] was used as the background<br><br>

![Coolors Palette](/assets/images/colour-palette.png)

<hr>

### **Typography**

- All fonts were sourced through [CDN fonts](https://www.cdnfonts.com/star-wars.font) &
  [Google Fonts](https://fonts.google.com/specimen/Press+Start+2P?query=star).
- Fonts were selected for their srelation to Star Wars and 8bit styles.
- Press Start 2P & cursive were selected.

![Fonts](/assets/images/typography-main-font.png)
![Title Font](/assets/images/typography-title-font.png)

<hr>

### **Media**

- [Figma](https://figma.com/) was used for the design of wireframes.
- [Fontawesome](https://fontawesome.com/) was used for the icons on various buttons.
- [Pexels](https://www.pexels.com/) was used to source the background image.

<hr>

### **Wireframes**

Wireframes for different views are linked here:

![Desktop Wireframe](/assets/images/home-sw-wireframe.png)
![Desktop Wireframe](/assets/images/start-sw-wireframe.png)
![Desktop Wireframe](/assets/images/question-sw-wireframe.png)
![Desktop Wireframe](/assets/images/rules-sw-wireframe.png)
![Desktop Wireframe](/assets/images/dark-side-sw-wireframe.png)
![Desktop Wireframe](/assets/images/team-sw-wireframe.png)

<hr>

### **Audio**

Audio files are integrated throughout the site to add interactivity and depth using these sites:

- [Voicy](https://www.voicy.network/)
- [The Sound Archive](https://www.thesoundarchive.com/star-wars.asp)

<hr>

## Features

- Home Page
  - Displays start, rules, team and results buttons.
  - Once the start is pressed user is warped to the quiz selection
  - Rules button displays rules
  - Team button redirects to team page
  - Results page redirects to results page

|                                      Desktop                                      |                                         Mobile                                          |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="assets/images/Home%20page%20desktop.png" alt="Home Page" width="400"/>  |    <img src="assets/images/Home%20page%20mobile.png" alt="Home mobile" width="200"/>    |
| <img src="assets/images/Home:start%20desktop.png" alt="Home/ start" width="400"/> | <img src="assets/images/Home:start%20mobile.png" alt="Home/ start mobile" width="200"/> |

- Rules
  - These are the rules of the quiz

|                               Desktop                                |                               Mobile                                |
| :------------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="assets/images/rules desktop.png" alt="Rules" width="400"/> | <img src="assets/images/rules mobile.png" alt="Rules" width="200"/> |

- Team Page
  - The team page displays cards for each member.
  - Links are provided for team members Github and LinkedIn profiles.
  - One card contains the project repository

|                              Desktop                               |                              Mobile                               |
| :----------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="assets/images/Team desktop.png" alt="Team" width="400"/> | <img src="assets/images/Team mobile.png" alt="team" width="200"/> |

- Results Page
  - Displays button for each quiz result

![Results Page](#)

- Quiz Selection
  - After start button is pressed user selects one of the three movies to play a quiz based on them
  - The movies cards flip and there is a sound

|                                      Desktop                                      |                                         Mobile                                          |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| <img src="assets/images/Home:start%20desktop.png" alt="Home/ start" width="400"/> | <img src="assets/images/Home:start%20mobile.png" alt="Home/ start mobile" width="200"/> |

- Quiz gameplay
  - User gets to answer ten questions which will determine the score that the user gets
  - If more than 5 user is on the light side, if less user is on the dark side
  - There is a score counter and correct color for an answer
  - Soundtrack plays in the background, there is a mute button

|                              Desktop                               |                                  Mobile                                  |
| :----------------------------------------------------------------: | :----------------------------------------------------------------------: |
| <img src="assets/images/quiz desktop.png" alt="quiz" width="400"/> | <img src="assets/images/quiz mobile.png" alt="quiz mobile" width="200"/> |

- Quiz finish
  - Modal pop out that shows the final score
  - User can enter the name to save the score

|                                   Desktop                                    |                                       Mobile                                       |
| :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
| <img src="assets/images/quiz final desktop.png" alt="quiz end" width="400"/> | <img src="assets/images/quiz final mobile.png" alt="quiz end mobile" width="200"/> |

- 404 custom page
  - If there is an invalid URL user is taken to the 404 error page

![404 custom page](#)

<hr>

## Testing

- Please see [TESTING.md](testing.md) for all the detailed testing performed.
- Manual tests were carried out throughout the process.
- Responsiveness has been checked and adjusted in Chrome Dev Tools and the site has been viewed on mobiles and on mac without issues.

<hr>

## **Bugs**

- Issue - [name issues here]
- Cause - [name causes here]
- Resolution - [resolution here]

<hr>

## Deployment and local development

### Netlify Deployment:

1. **Log in to Netlify:** Navigate to the [Netlify website](https://www.netlify.com/) and log in to your account.

2. **Create New Site:** Once logged in, click on the "New site from Git" button.

3. **Connect to GitHub:** Choose GitHub as your Git provider and authorize Netlify to access your repositories.

4. **Select Repository:** Select the repository for your website, in this case, "The Force Awaken."

5. **Configure Settings:** Netlify will automatically detect your build settings, but you may need to adjust them if necessary.

6. **Deploy Site:** Once configured, click on the "Deploy site" button. Netlify will start building and deploying your site automatically.

7. **Live Site:** After the deployment process is complete, Netlify will provide you with a unique URL for your live site. You can access your live site by visiting this URL.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to Netlify and locate and connect [GitHub Repository The Fork Awakens](https://github.com/MickKav/the_fork_awakens/)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your Netlify account.

### Local Clone

1. Log in to Netlify and locate [GitHub Repository The Fork Awakens](https://github.com/MickKav/the_fork_awakens/)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.

<hr>

## Game Flow

1. **Main Screen**
   - The main screen has three buttons:
     - **Start**: Begins the quiz.
     - **Rules**: Displays the game rules.
     - **Team**: Shows information about the development team.
     - **Results**: Shows results for each of the three quizzes
2. **Button Actions**
   - **Start**:
     - When the player clicks the "Start" button, the game transitions to the question theme selection screen.
   - **Rules**:
     - When the player clicks the "Rules" button, a modal displays the game rules. These rules explain how to play the game, how the scoring works, and any other relevant information.
     - The player can close the modal to return to the main screen.
   - **Team**:
     - When the player clicks the "Team" button, the user is directed to the team page, with information about the development team. This includes names, and contact information.
     - The player can click on the "return home" button to return to the main screen.
3. **Question Theme Selection**

   - After clicking "Start", the player is taken to a screen where they can choose between question themes based on three different Star Wars movies.
   - Each theme corresponds to a specific movie from the Star Wars series.
   - The player selects a movie theme by clicking on its movie poster.

4. **Questionnaire**

   - After selecting a movie theme, the player is presented with the first question related to that movie.
   - The questionnaire consists of 10 questions.
   - Each question is displayed with multiple choice answers.
   - The player selects an answer by clicking on it.

5. **Answer Evaluation**

   - Once an answer is selected, the game immediately evaluates whether it is correct or incorrect.
   - The score is updated accordingly.

6. **Next Question**

   - After score is updated, the game automatically transitions to the next question.
   - This process repeats until all 10 questions have been answered.

7. **End Screen**
   - When all 10 questions have been answered, the player is presented with a modal.
   - The modal indicates whether the player is on the light side or the dark side based on their performance:
     - **Light Side**: If the player gets more correct answers than wrong answers.
     - **Dark Side**: If the player gets more wrong answers than correct answers.
   - The modal contains the player’s score.
   - The player has the option to return to the home page.

## Tech Stack

The Star Wars Quiz Game is developed using the following tools and technologies:

- **HTML**: For structuring the content and layout of the web pages.
- **CSS**: For styling the website and making it visually appealing.
- **JavaScript**: For implementing the game logic and interactivity.
- **Bootstrap**: For responsive design and pre-built UI components to ensure the game looks great on all devices.

## The Team

### Tulio Minini

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/t-minini)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tulio-minini/)

### Michael Kavanagh

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MickKav)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/michael-kavanagh-software-dev/)

### Bekry Mohammed

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bky201)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bekry-mohammed/)

### Thomas-Tomo Domitrovic

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Thomas-Tomo)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thomasdomitrovic/)

### Terry Loughran

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TerryLoc)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/terryloughran/)

### Martina Toffoletti

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/martinamicaela)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/martina-toffoletti/)

### Liam Goddard

[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/caleom)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](#)
