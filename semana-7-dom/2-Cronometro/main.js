"use strict";

const startButton = document.querySelector("ul").children[0];
const pauseButton = document.querySelector("ul").children[1];
const resetButton = document.querySelector("ul").children[2];

const display = document.querySelector(".display");
let cents = 0;

const toDisplay = (cents) => {
  const pairDigits = (number) =>
    number < 10 ? "0" + number : number.toString();
  const minutes = Math.floor(cents / 100 / 60) % 60;
  const seconds = Math.floor(cents / 100) % 60;
  const centsModulo = cents % 100;

  return `${pairDigits(minutes)}:${pairDigits(seconds)}:${pairDigits(
    centsModulo
  )}`;
};

const chronometer = (event) => {
  const interval = setInterval(() => {
    cents++;
    display.textContent = toDisplay(cents);
  }, 10);
  startButton.removeEventListener("click", chronometer);
  pauseButton.addEventListener("click", () => {
    clearInterval(interval);
    startButton.addEventListener("click", chronometer);
  });
};

const reset = () => {
  cents = 0;
  display.textContent = toDisplay(cents);
};

startButton.addEventListener("click", chronometer);
resetButton.addEventListener("click", () => {
  cents = 0;
  display.textContent = toDisplay(cents);
});

window.addEventListener("load", () => {
  cents = JSON.parse(localStorage.getItem("timer"));
  display.textContent = toDisplay(cents);
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem("timer", JSON.stringify(cents));
});
