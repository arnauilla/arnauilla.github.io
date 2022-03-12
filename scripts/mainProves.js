const myHeading = document.querySelector('h1'); //This function, document.querySelector is built into the browser.
myHeading.textContent = 'Hello world!'; 

alert('hello!'); //This function, "alert" is built into the browser.

//JavaScript syntax: 

let myVariable;
myVariable = 'Bob';

let myVariable2 = 'Bob';

let myVariable3 = 'Bob';
myVariable3 = 'Steve';


let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}


function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

//Events

document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

//The functions we just passed to addEventListener() here are called anonymous functions, because they don't have a name. There's an alternative way of writing anonymous functions, which we call an arrow function. An arrow function uses "() =>" instead of "function ()"

document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});