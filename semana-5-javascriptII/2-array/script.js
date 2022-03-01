"use strict";

let names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

function cleanDuplicates(array) {
  const compareArray = new Array();
  for (const element of array) {
    if (!compareArray.includes(element)) {
      compareArray.push(element);
    }
  }
  return compareArray;
}
names.push("hola");
console.log(names);
