const Request = new XMLHttpRequest();
Request.addEventListener('load', function() {
    console.log(this.responseText);
});
Request.open('GET', 'https://supersimplebackend.dev ');
Request.send();

//CALLBACK

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const name = "Priyanka";
  callback(name);
}

processUser(greet);