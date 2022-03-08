"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) =>
  setTimeout(
    () => resolve(Math.round(Math.random() * 100)),
    Math.random() * 1000
  )
);

//Crea una función que reciba una edad y devuelva una promesa:

const setAgePromise = (age) => {
  //- Si la edad es menor a 18 la promesa se rechazará inmediatamente con el mensaje "_edad_ es menor".

  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error(`Edad ${age} es menor`));
    } else {
      //- Si la edad es par, la promesa se resolverá al cabo de un segundo con el mensaje "_edad_ es par".
      //- Si la edad es impar, la promesa se resolverá al cabo de dos segundos con el mensaje "_edad_ es impar".
      setTimeout(
        () => resolve(`La edad ${age} es ${age % 2 === 0 ? "par" : "impar"}`),
        (age % 2 === 0 ? 1 : 2) * 1000
      );
    }
  });
};

//Hacer que se muestre por consola el mensaje correspondiente a llamar a la función con la edad que devuelva la promesa.

//En caso de que sea rechazada, se mostrará de color rojo "Error: " y el mensaje correspondiente.

agePromise.then((promiseAge) => {
  setAgePromise(promiseAge)
    .then((result) => console.log(result))
    .catch((err) => console.error(`${err.name}: ${err.message}`));
});
