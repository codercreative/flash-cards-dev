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

  const card = document.getElementById("card");

  let isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints;

  const toggleCard = () => {
    card.classList.toggle("flipped");
  };

  if (isTouchDevice) {
    card.addEventListener("pointerdown", toggleCard);
    card.addEventListener("pointerup", toggleCard);
  } else {
    card.addEventListener("click", toggleCard);
  }
});
