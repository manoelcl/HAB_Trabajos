"use strict";

const initTime = new Date();

//Crea un programa que imprima cada 5 segundos el tiempo que ha pasado desde la ejecución del mismo. Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución.
function printTime(amount, units) {
  const intervalID = setInterval(() => {
    const timePassedSeconds = Math.floor((Date.now() - initTime) / 1000);
    const days = Math.floor(timePassedSeconds / 60 / 60 / 24);
    const hours = Math.floor((timePassedSeconds / 60 / 60) % 24);
    const minutes = Math.floor((timePassedSeconds / 60) % 60);
    const seconds = Math.floor(timePassedSeconds % 60);
    console.log(
      `Han pasado ${days} ${days === 1 ? "día" : "días"}, ${hours} ${
        hours === 1 ? "hora" : "horas"
      }, ${minutes} ${minutes === 1 ? "minuto" : "minutos"} y ${seconds} ${
        seconds == 1
          ? "segundo"
          : "segundos" /*Haz que el texto se ajuste a singular y plural*/
      }`
    );
    //crea una función que sea capaz de parar el programa. Dicha función recibirá dos parámetros: un número y una letra (D, H, M o S), que determinarán el tiempo que tardará en ejecutarse. Para que quede más claro, mostrará un aviso de que el programa se ha parado.
    function getUnits() {
      let value = 0;
      switch (units) {
        case "D":
          value = 60 * 60 * 24;
          break;
        case "H":
          value = 60 * 60;
          break;
        case "M":
          value = 60;
          break;
        case "S":
          value = 1;
          break;
      }

      return value;
    }
    if (timePassedSeconds >= amount * getUnits()) {
      clearInterval(intervalID);
      console.warn("El programa se ha parado");
    }
  }, 5000);
}

printTime(15, "S");
