const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Task failed");
  }

});


myPromise
  .then(result => {
    console.log(result); // Output: Task completed successfully
  })
  .catch(error => {
    console.error(error); // This won't be called in this case
  });
  // example 2

const promise = new Promise((resolve, reject) => {

  let success = true;
  //let success = false;

  if (success) {
    resolve("Login Successful");
  } else {
    reject("Invalid Password");
  }

});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });