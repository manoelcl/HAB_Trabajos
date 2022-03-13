"use strict";
const button = document.querySelector("button");

const main = document.querySelector("main");
const cubes = [...document.getElementsByClassName("cube")];

const cubeColorModify = (array) => {
  const repeater = setInterval(() => {
    cubes.forEach((element) => {
      element.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777216
      ).toString(16)}`;
    });
  }, 2000);
};

cubeColorModify(cubes);

button.addEventListener("click", () => {
  const newCube = document.createElement("div");
  newCube.className = "cube";
  newCube.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777216
  ).toString(16)}`;
  cubes.push(newCube);
  main.appendChild(newCube);
});
