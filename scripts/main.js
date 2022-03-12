
//Changing the image by clicking it:

//Using JavaScript and DOM API features to alternate the display of one of two images. This will happen as a user clicks the displayed image:
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mountain-2.jpg') {
      myImage.setAttribute('src','images/mountain-3.jpg');
    } else {
      myImage.setAttribute('src','images/mountain-2.jpg');
    }
}

//Personalized welcome message:

//- We will save the message using the Web Storage API. 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName)
    setUserName();
  localStorage.setItem('name', myName); //this calls on an API localStorage, which allows us to store data in the browser and retrieve it later
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//Initialization code, as it structures the app when it first loads.
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}