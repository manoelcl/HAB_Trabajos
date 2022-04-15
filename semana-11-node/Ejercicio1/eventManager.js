"use strict";
const fs = require("fs").promises;
const path = require("path");

const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");

let savedData = {};
const savePath = path.join(__dirname, "eventRegister.json");

const readJSON = async (path) => {
  try {
    const data = await fs.readFile(path, "utf8");
    const json = JSON.parse(data);
    return json;
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(chalk.yellow("No previous data detected."));
      return { events: [] };
    } else {
      console.error(
        chalk.red("An error occurred trying to read the file", err)
      );
    }
  }
};

const writeJSON = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (err) {
    console.error(`There was an error trying to save`, err);
  }
};

const checkArgs = async () => {
  if (argv.d && argv.e) {
    const date = new Date(argv.d);
    console.log(date.toString());
    try {
      if (date.toString() === "Invalid Date") {
        throw new Error("Invalid Date format");
      }
      savedData = await readJSON(savePath);
      savedData.events.push({
        date: new Date(argv.d),
        description: argv.e,
      });
      await writeJSON(savePath, savedData);
      console.log(chalk.green("New event saved"));
    } catch (err) {
      console.error(chalk.red(`${err.name}:${err.message}`));
    }
  } else if (argv.l) {
    savedData = await readJSON(savePath);
    console.log(`You have ${savedData.events.length} events pending:`);
    savedData.events.forEach(({ date: d, description: e }) => {
      const date = new Date(d);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      console.log(
        chalk.cyanBright(`An event the ${day}-${month}-${year}: `),
        chalk.greenBright(e)
      );
    });
  } else {
    console.log(argv);
    console.error(
      chalk.red(
        "Use -d followed by a valid date and -e followed by a description of the event"
      )
    );
  }
};

checkArgs();
