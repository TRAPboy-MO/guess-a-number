// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🥂 Correct Number!";

// console.log(document.querySelector(".number").textContent = 12);
// console.log(document.querySelector(".score").textContent = 15);

// document.querySelector(".guess").value = 33;
// console.log(document.querySelector(".guess").value);

let numero = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(numero)

document.querySelector(".button").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess); 

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "📛 No number ❗❗";

    // when player wins
  } else if (guess === numero) {  
    document.querySelector(".message").textContent = "🥂 Correct Number!";
    document.querySelector(".number").textContent = numero;
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".number").style.width = "250px";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
   

    // when number guessed is greater
  } else if (guess > numero) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🚀Too much!📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " You lost the game 💣 please try again 🏋️‍♀️🧠  ";
      document.querySelector(".score").textContent = 0;
    }

    // when number guessed is lesser
  } else if (guess < numero) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        " You lost the game 💣 please try again 🏋️‍♀️🧠  ";
      document.querySelector(".score").textContent = 0;
    }
  }

  // reset back to the start
  document.querySelector(".play-again").addEventListener("click", function () {
    score = 20;
    numero = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "🤔Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "250px";
  });
});
