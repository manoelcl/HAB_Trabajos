"use strict";

const generatePassword = () => Math.floor(Math.random() * 100);

function checkPassword(password) {
  let tries = 5;
  while (tries > 0) {
    const numUser = prompt(
      `Introduce un número del 0 al 100.\nQuedan ${tries} intentos`
    );
    if (password === Number(numUser)) {
      alert(`You win!\nThe password was ${password}. Play another game.`);
      checkPassword(generatePassword());
    } else {
      if (--tries === 0) {
        alert(`Game over!!\n the password was ${password}. Try again`);
        checkPassword(generatePassword());
      }
      alert(
        `Fallo!\n la contraseña es ${password > +numUser ? "mayor" : "menor"} `
      );
    }
  }
}

checkPassword(generatePassword());
