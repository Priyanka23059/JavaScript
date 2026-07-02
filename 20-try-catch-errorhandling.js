try {
  console.log(name);
}
catch(error) {
  console.log("Something went wrong");
}

//Example 2
try {
  let age = 18;

  if (age < 18) {
    throw new Error("Not Eligible");
  }

  console.log("Eligible");
}
catch(error) {
  console.log(error.message);
}
//Example 3
let password = "123";

try {

  if (password.length < 6) {
    throw new Error("Password too short");
  }

  console.log("Login Success");

}
catch(error) {
  console.log(error.message);
}


//Error Handling with Promises
const promise = new Promise((resolve, reject) => {

  let success = false;

  if(success) {
    resolve("Success");
  } else {
    reject("Failed");
  }

});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });