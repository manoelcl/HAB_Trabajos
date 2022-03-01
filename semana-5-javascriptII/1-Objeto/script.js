"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

for (const user in people) {
  if (people[user] < 18) {
    console.log(`${user} es menor de edad`);
  } else {
    console.log(`${user} es mayor de edad`);
  }
}
