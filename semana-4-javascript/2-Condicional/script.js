"use strict";

const nombre = "Pepe";
const color = "rojo";
const edad = 61;

if (edad <= 12) {
  console.log(
    `A ${nombre} le corresponde el descuento infantil (menores de 12).`
  );
} else if (edad <= 30) {
  console.log(
    `A ${nombre} le corresponde el descuento juvenil (menores de 30).`
  );
} else if (edad >= 60) {
  console.log(
    `A ${nombre} le corresponde el descuento de jubilados (mayores de 60).`
  );
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento.`);
}
