"use strict";

const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const dni = "12345678-Z";

const dniChecker = (dniString) => {
  try {
    //1- Lo que se ha introducido es un string con 10 caracteres.
    if (typeof dniString !== "string" || dniString.length !== 10) {
      const error = new TypeError(
        "El código introducido debe tener 10 caracteres"
      );
      throw error;
    }
    const splittedString = dniString.split("-");
    //2- Si separamos por el guión tiene dos partes.
    if (splittedString.length !== 2) {
      const error = new TypeError("Su DNI debe contener un guion");
      throw error;
    }
    //3- La primera parte (antes del guion) son 8 números.
    if (!(splittedString[0].length === 8 && !isNaN(+splittedString[0]))) {
      const error = new TypeError("Debe consistir en un número de ocho cifras");
      throw error;
    }
    //4- La segunda parte (después del guion) es un único caracter y no es un número.
    if (!(splittedString[1].length === 1 && isNaN(splittedString[1]))) {
      console.log(splittedString[1].length);
      console.log(isNaN(splittedString[1]));
      const error = new TypeError(
        "Debe contener una única letra tras el guion"
      );
      throw error;
    }
    //5- La letra se corresponde con la que debería, según el número.
    if (letras[+splittedString[0] % 23] === splittedString[1].toUpperCase()) {
      console.log("DNI verificado con éxito");
    } else {
      console.log(letras[+splittedString[0] % 23]);
      console.log(splittedString[1].toUpperCase());
      const error = new TypeError("La letra no se corresponde con el número");
      throw error;
    }
  } catch (error) {
    console.error(error.name, error.message);
  }
};

dniChecker(dni);
