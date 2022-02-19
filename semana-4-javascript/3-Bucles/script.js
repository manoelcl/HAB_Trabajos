"use strict";

const workingRange = [8, 22];

for (let hour = 0; hour < 24; hour++) {
  if (hour >= workingRange[0] && hour <= workingRange[1]) {
    let cucu = "";
    for (let i = 0; i < ((hour - 1) % 12) + 1; i++) {
      cucu = cucu.concat("¡Cucú! ");
    }
    console.log(`${cucu}\nSon las ${hour} horas`);
  }
}
