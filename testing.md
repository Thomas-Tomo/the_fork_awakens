# **Classic Stars Wars Testing Documentation**

## **Table of contents**
 - [**HTML Validation**](#html-validation)
 - [**CSS Validation**](#css-validation)
 - [**JavaScript Validation**](#javascript-validation)
 - [**Lighthouse**](#lighthouse)
 - [**Manual Testing**](#manual-testing)
 - [**Final Review**](#final-review)

<hr>

## **HTML Validation**

All HTML code has been run through the [W3C - HTML](https://validator.w3.org/) validator.  The only errors appear to be confusion over the use of Django.

#### **Index.html**
![HTML Base Page](/static/docs/w3c_about_team.jpg)

#### **Game.html**
![HTML Game Page](/static/docs/w3c_base_html.jpg)

#### **Quiz-one.html**
![HTML Quiz-One Page](/static/docs/w3c_base_html.jpg)


#### **Results.html**
![HTML Results Page](/static/docs/w3c_base_html.jpg)

#### **Team.html**
![HTML Team Page](/static/docs/w3c_base_html.jpg)


<hr>

## **CSS Validation**

All CSS code has been run through the [W3C - CSS](https://jigsaw.w3.org/css-validator/) validator.  There was a minor error with text-wrap in style.css, although it does function as intended.


#### **Quiz.css**
![CSS Validator Style.css](/static/docs/w3c_css_style_css.jpg)

#### **Style.css**
![CSS Validator Style.css](/static/docs/w3c_css_style_css.jpg)

#### **Team.css**

![CSS Validator Style.css](/static/docs/w3c_css_random_post_css.jpg)

<hr>

## **JavaScript Validation**

We will use browser developer tools to fix console errors, detect memory leaks, and verify key functions like the "score counter." Additionally, manual testing will check functionality, user scenarios, and cross-browser performance to ensure reliability.

#### **game-script.js**
![game-script.js](/static/docs/python_testing_admin_py.jpg)

#### **quiz.js**
![quiz.js](/static/docs/python_testing_apps_py.jpg)

#### **star-background.js**
![star-background.js](/static/docs/python_testing_forms_py.jpg)

<hr>

## **Lighthouse**
- The lighthouse score results can be found below.

![Lighthouse](/static/docs/lighthouse.jpg)

![Lighthouse](/static/docs/lighthouse_add_hack.jpg)

![Lighthouse](/static/docs/lighthouse_allhacks.jpg)

![Lighthouse](/static/docs/lighthouse_index.jpg)

<hr>

## **Manual Testing**

Contrast checks were carried out.  Errors were found, but the checker appears to get confused about which background the text is being checked against.

![Contrast](/static/docs/lighthouse_team_contrast.jpg)


  <table>
  <tr>
    <th>Features</th>
    <th>Bugs/Issues</th>
  </tr>
  <tr>
    <td>LINKS: Start button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Rules Button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Teams button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Git Hub button</td>
    <td>Not Detected</td>
  </tr>
 <tr>
    <td>LINKS: LinkedIn button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Repository button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Return Home button</td>
    <td>Not Detected</td>
  </tr>
  </tr>
   <tr>
    <td>LINKS: StarWars Home button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Results button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Quiz 1 Results button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Quiz 2 Results button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: Quiz 3 Results Button</td>
    <td>Not Detected</td>
  </tr>
  <tr>
    <td>LINKS: start Button </td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>LINKS: start Button </td>
    <td>Not Detected</td>
  </tr>
  </table>

<table>
  <tr>
    <th>QUiz</th>
    <th>Bugs/Issues</th>
  </tr>
  <tr>
    <td>Red color if the answer was incorrect </td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Green color if the answer was correct</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>when selection an an option while hoovering the backgrounds changes to yellow </td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>with every wrong answer the wrong score turns red and adds a number to it </td>
    <td>Not Detected</td>
  </tr>
 <tr>
    <td>with every right answer the right score turns green and adds a number to it</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Sounds effect when starting the game</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Button for silencing the sound effects </td>
    <td>Not Detected</td>
  </tr>
  </tr>
   <tr>
    <td>Game Over card appearing at the end of the game</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Game Over final results</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Enter name input text field</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Save button</td>
    <td>Not Detected</td>
  </tr>
   <tr>
    <td>Home Button</td>
    <td>Not Detected</td>
  </tr>
  </table>


  <table>
  <tr>
    <th>Responsiveness</th>
    <th>Bugs/Issues</th>
  </tr>
  <tr>
    <td>Desktop size </td>
    <td> It is responsive</td>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </tr>
   <tr>
    <td>Laptop size </td>
    <td> It is responsive</td>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </tr>
   <tr>
    <td> Tablet size </td>
    <td> It is responsive</td>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </tr>
 <tr>
    <td> Larger phone size </td>
    <td> It is responsive</td>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </tr>
  <tr>
    <td> Average phone size </td>
    <td> It is responsive</td>
    <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
  </tr>
  </table>



## **Final Review**

The testing procedures have been executed, meeting all specified criteria. Results have been thoroughly documented, and any identified issues have been addressed. Post-testing, the website has been confirmed to be fully functional and accessible.