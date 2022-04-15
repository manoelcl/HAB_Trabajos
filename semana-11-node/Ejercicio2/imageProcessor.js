"use strict";

const fs = require("fs/promises");
const path = require("path");

const sharp = require("sharp");
const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");
const supportedFileExtensions = [".jpg", ".jpeg", ".png", ".gif"];

console.log(path.extname(path.resolve(__dirname, argv.imgPath)));
const checkFileExtension = (filePath) => {
  if (supportedFileExtensions.includes(path.extname(filePath))) {
    checkFilePath(filePath);
  } else {
    console.error(chalk.red("File not supported"));
  }
};

const checkFilePath = async (filePath) => {
  try {
    await fs.access(filePath);
    createSamplesFolder(filePath);
  } catch (err) {
    console.error(chalk.red("Path error"));
  }
};

const createSamplesFolder = async (filePath) => {
  const dirPath = path.resolve(
    path.dirname(filePath),
    `${path.parse(filePath).name}_samples`
  );
  try {
    await fs.access(dirPath);
  } catch (err) {
    console.log(
      chalk.yellow(`Creating new folder "${path.parse(filePath).name}_samples"`)
    );
    await fs.mkdir(dirPath);
  } finally {
    createSampleImages(filePath, dirPath);
  }
};

const createSampleImages = async (originalImage, saveLocation) => {
  console.log("Creating samples...");
  sharp(originalImage)
    .resize(300, 200)
    .toFile(
      path.resolve(saveLocation, `resized_${path.basename(originalImage)}`),
      function (err) {}
    );
  sharp(originalImage)
    .convolve({
      width: 3,
      height: 3,
      kernel: [-1, 0, 1, -2, 0, 2, -1, 0, 1],
    })
    .toFile(
      path.resolve(saveLocation, `convolved_${path.basename(originalImage)}`),
      function (err) {}
    );
  sharp(originalImage)
    .blur(12)
    .toFile(
      path.resolve(saveLocation, `blurred_${path.basename(originalImage)}`),
      function (err) {}
    );
  sharp(originalImage)
    .negate()
    .toFile(
      path.resolve(saveLocation, `negated_${path.basename(originalImage)}`),
      function (err) {}
    );
  console.log("Done");
};

checkFileExtension(path.resolve(__dirname, argv.imgPath));
