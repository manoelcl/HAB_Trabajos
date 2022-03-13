"use strict";

const setUsers = async (usersNum) => {
  console.log("Loading staff data...");
  const users = [];
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${usersNum}`
    );

    if (response.ok) {
      const usersObject = await response.json();
      console.log(usersObject);
      usersObject.results.forEach((element) => {
        users.push({
          nombreCompleto: element.name.first + " " + element.name.last,
          pais: element.location.country,
          email: element.email,
          foto: element.picture.large,
        });
      });
    }
  } catch (error) {
    console.log("User info couldn't be loaded");
  }
  console.log(users);
  for (const user of users) {
    const article = document.createElement("article");
    console.log(user);
    article.innerHTML = `<img src=${user.foto}></img>
    <h2>${user.nombreCompleto}</h2>
    <a href="mailto:${user.email}">${user.email}</a>
    <p>${user.pais}</p>`;
    document.querySelector("main").append(article);
  }
};

setUsers(30);
