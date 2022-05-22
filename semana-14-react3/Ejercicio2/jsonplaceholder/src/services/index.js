export const getPosts = (callback) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((response) => callback(response));
  } catch (err) {
    console.log(err, "API could not be reached");
  }
};

export const createPost = (data, callback) => {
  // console.log(data);
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => callback(response));
  } catch (err) {
    console.log(err, "API could not be reached");
  }
};
