//Code Without async/await

function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza Ready");
    }, 3000);
  });
}

orderPizza().then((result) => {
  console.log(result);
});

//Code With async/await
function orderPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pizza Ready");
    }, 3000);
  });
}

async function eatPizza() {
  const result = await orderPizza();

  console.log(result);
}

eatPizza();


//Example 2
function friendBringsBook() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Book Received");
    }, 5000);
  });
}
async function study() {
  console.log("Waiting for book...");

  const book = await friendBringsBook();

  console.log(book);
  console.log("Start Studying");
}

study();
