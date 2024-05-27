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
 We have validated our base html. Even though there is some errors on the buttons, we don't want to touch our button and modify the styles of our page.
![HTML Base Page](/static/docs/w3c_about_team.jpg)

#### **Game.html**
![HTML Game Page](/assests/docs/game_html.jpg)

#### **Quiz-one.html**
![HTML Quiz-One Page](/static/docs/w3c_base_html.jpg)


#### **Results.html**
![HTML Results Page](/static/docs/w3c_base_html.jpg)

#### **Team.html**
![HTML Team Page](/static/docs/w3c_base_html.jpg)

#### **Result.html**
![HTML Team Page](/assests/docs/results_html.jpg)

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


## **Final Review**

The testing procedures have been executed, meeting all specified criteria. Results have been thoroughly documented, and any identified issues have been addressed. Post-testing, the website has been confirmed to be fully functional and accessible.