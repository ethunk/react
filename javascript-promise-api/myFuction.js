let myFunction = (argument) => {
  //something happens
};


// This is a named function

let delay = 3000;

window.setTimeout(() => {
  alert(`setTimeout() was called ${delay}ms ago.`);
}, delay);


window.setTimeout(() => {
  console.log('Im the callback!');
}, 1000);

console.log("I'm called second, but appear first.");
