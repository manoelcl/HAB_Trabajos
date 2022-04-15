"use strict";

const fs = require("fs/promises");

const express = require("express");
const chalk = require("chalk");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.path, req.body, req.query);
  next();
});

app.get("/current-time", (req, res, next) => {
  const date = new Date();
  res.send(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
});
app.get("/path", (req, res, next) => {
  const path = __dirname;
  res.send(`${path}`);
});
app.get("/force-error", (req, res, next) => {
  throw new Error("Error de prueba");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});
app.use((req, res, next) => {
  res.status(404);
  res.send("NOT FOUND");
});
app.listen(port, () => {
  console.log(chalk.green(`Server started @ port ${port}.`));
});
