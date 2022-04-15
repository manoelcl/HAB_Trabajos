const prompt = require("prompt-sync")();
const parseArgs = require("minimist");
let argv = parseArgs(process.argv.slice(2));

const name = () => (argv._[0] ? `, ${argv._[0]}` : "");

value = prompt(`Hola${name()}. ¿Qué tal estás? RESPONDER: `);

const checkResponse = (arg) => {
  switch (arg.toUpperCase()) {
    case "BIEN":
      console.log(`¡Me alegro${name()}!`);
      break;
    case "MAL":
      console.log(`Espero que te mejores pronto${name()}.`);
      break;
    case "REGULAR":
      console.log(`Bueno${name()}, no siempre podemos estar al 100%`);
      break;
    default:
      value = prompt(
        `Lo siento${name()}, no te he entendido bien. ¿Cómo te encuentras? RESPONDER: `
      );
      checkResponse(value);
  }
};

if (arg === "bien") checkResponse(value);
