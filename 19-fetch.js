fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.name);
  })
  .catch((error) => {
    console.log(error);
  });