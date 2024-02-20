//1. declare variables
//
//2. Listen for click on button to go from "Show the first question to pulling question from data.js

//Display question on front
//When user clicks on display answer button, display answer
//click continue
//Perhaps include a navigation to show what the game is about...
//Need the title to stay in place
// The card should be high and wide enough for the questions and answers to
//Make sure the contrast is ok
//filter questions between React, JS, CSS and HTML
// In one session - if a question has already been asked don't show again.

import { questions } from "./data.js";

const nextQuestionBtn = document.getElementById("next-question-btn");
const cardContainer = document.getElementById("card-container");

nextQuestionBtn.addEventListener("click", () => {
  // get random index
  const randomIndex = Math.floor(Math.random() * questions.length);

  const { question, answer } = questions[randomIndex];

  const cardHTML = `
  <div class="card" id="card">
    <div class="front">
      <h2>${question}</h2>
    </div>
    <div class="back">
      <h2>${answer}</h2>
    </div>
  </div>
 `;

  cardContainer.innerHTML = cardHTML;
});
nextQuestionBtn.addEventListener("click", showNextQuestion);
nextQuestionBtn.addEventListener("touchstart", showNextQuestion);
