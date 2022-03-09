"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function combinaciones(array) {
  const catalogue = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      catalogue.push(`${catalogo[i]} y ${catalogo[j]}`);
    }
  }
  return catalogue;
}

console.log(combinaciones(catalogo));
