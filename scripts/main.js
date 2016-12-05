var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

//Instantiate a button or basically a handle to the button at the bottom of the page 
var myButton = document.querySelector('button');
//If the button is clicked, then we want to call setUserName
myButton.onclick = function() {
	setUserName();
}


var myHeading = document.querySelector('h1');
var mySecondHeading = document.querySelector('h2');


function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozilla is cool, ' + myName;
	mySecondHeading.textContent = 'BOOM CHICKA BOOM';
	if (!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'Mozilla is cool, ' + storedName;
		mySecondHeading.textContent = 'BOOM CHICKA BOOM' + storedName;
	}
}

