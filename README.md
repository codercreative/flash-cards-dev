## Flash Cards for Junior Devs

### The challenge:

App for junior front end developers to master common coding interview questions via flash cards.

### Screenshot

![screenshot](img/screenshot.png)

### Process

- Create draft of README file
- Create .gitignore file
- Create Github repository
- Work on HTML, CSS and JS files
- Check final code and accessibility
- Finalize README file
- Publish live URL

### So far the app includes...

- Click on button to pull question from data.js
- Display question
- When user hovers on question, flip card to answer on back
- The card should be large enough to contain the questions and answers
- Make sure the contrast is ok

### Would like to add or change...

- Add more questions and double-check all answers are correct
- Include a reset button
- Include information about what the game is about...
- Include buttons to filter questions between React, JS, CSS and HTML, etc.
- Include a button to filter questions that have already been asked
- Build the app in React instead
- Make it into a multiple choice app

### Code highlights

Excerpt of card flip code in CSS. And then you toggle "flipped" on the card in JavaScript;

```css
.card {
...
 /* flipping action */
 transition: transform 1500ms;
 /* treat as a 3D object and properly flip card
-- used in combination with rotateY*/
 transform-style: preserve-3d;
}

.card:hover,
 /* flipped is added as a class to card in CSS - it is not in the HTML code */
.card.flipped {
 transform: rotateY(180deg);
}

.front,
.back {
...
 backface-visibility: hidden;
}

.front {
 display: flex;
}

.back {
 transform: rotateY(180deg);
 display: flex;
}
```

### Issues

- Currently, the user can only flip from question to answer on iphones and ipads. I need to make sure that user can flip back from answer to question.

### Resources:

[Github frontend developer interview questions]("https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/main")

[Awesome cheatsheets]("https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/javascript.js")

[Sudheerj's JS interview questions]("https://github.com/sudheerj/javascript-interview-questions")

[Hubspot JavaScript interview questions]("https://blog.hubspot.com/website/javascript-interview-questions")

[How to make hover work correctly for mobile]("https://stackoverflow.com/questions/75974325/how-to-make-hover-work-correct-for-mobile")

[Frontendeval - practical interview exercises]("https://frontendeval.com/?utm_source=youtube&utm_medium=video&utm_campaign=techrally")
