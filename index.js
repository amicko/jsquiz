var prompt = require('prompt-sync').prompt;

var numCorrectAnswers = 0;
var htmlCorrectAnswers = 0;
var cssCorrectAnswers = 0;

console.log('What is your name?');

var name = prompt();

console.log('Welcome, ' + name + '! ' + 'Are you ready to begin?');

var ready = prompt().toLowerCase();

if(ready === 'yes') {
	var start = new Date();
	console.log('Alright! Lets do this!');
}
else {
	console.log('Too bad, here we go!');
}

console.log('First Question! Within which tag are all html tags placed?');

var answer01 = prompt().toLowerCase();

if(answer01 === 'html') {
	numCorrectAnswers++;
	htmlCorrectAnswers++;
	console.log('Correct! Thats one for the good guys!');

	console.log('You are one of the good guys, right?');
	var goodGuy = prompt().toLowerCase();

	if(goodGuy === 'yes') {
		console.log('Great, lets keep going!');
	}
	else {
		console.log('Thats okay too, lets keep going!');
	}
}
else {
	console.log('Not even close! The correct answer is the html tag');
}

console.log('Which of the following would you use to cause an element to set as far to the left as possible?' + ' FLOAT DIV TABLE');

var answer02 = prompt().toLowerCase();

if(answer02 === 'float') {
	numCorrectAnswers++;
	htmlCorrectAnswers++;
	console.log('Correct! Onward!');
}
else {
	console.log('Sorry, I believe float was the correct answer.');
}

console.log('Which tag is used to create a drop-down menu in a form?');

var answer03 = prompt().toLowerCase();

if(answer03 === 'select') {
	numCorrectAnswers++;
	htmlCorrectAnswers++;
	console.log('Yes! Good for you, ' + name + '!');
}
else {
	console.log('Narp, it was select');
}

console.log('What follows the anchor tag to identify a target url? HREF, URL, LOC');

var answer04 = prompt().toLowerCase();

if(answer04 === 'href') {
	numCorrectAnswers++;
	htmlCorrectAnswers++;
	console.log('You will have no problem finding where you are going!');
}
else {
	console.log('I am suprised you even found your way to this question!');
}

console.log('Besides the body, what is the other primary parent tag of the html document?');

var answer05 = prompt().toLowerCase();

if(answer05 === 'head') {
	numCorrectAnswers++;
	htmlCorrectAnswers++;
	console.log('You have clearly got a good head on YOUR shoulders. ....get it?');
}
else {
	console.log('I guess you could say you would lose your head if it wasnt bolted to your neck.');
}

if(htmlCorrectAnswers >= 3) {
	console.log('!DOCTYPE is always followed by what?');
	var testAnswer01 = prompt().toLowerCase();

	if(testAnswer01 === 'html') {
		numCorrectAnswers++;
		console.log('Correct!');
	}
	else {
		console.log('The correct answer is html');
	}

	console.log('What year was html first used?');
	var testAnswer02 = prompt().toLowerCase();

	if(testAnswer02 === '1993') {
		numCorrectAnswers++;
		console.log('Great job!');
	}
	else {
		console.log('Incorrect! The year was 1993');
	}

	console.log('Which element is outside the padding, but inside the margin?');
	var testAnswer03 = prompt().toLowerCase();

	if(testAnswer03 === 'border') {
		numCorrectAnswers++;
		console.log('You got it!');
	}
	else {
		console.log('Fail! The answer is border');
	}

	console.log('Which element is outside the border?');
	var testAnswer04 = prompt().toLowerCase();

	if(testAnswer04 === 'margin') {
		numCorrectAnswers++;
		console.log('Correct!');
	}
	else {
		console.log('What a marginal answer... I mean the answer is margin.');
	}

	console.log('Which attribute of overflow should be used to fix the collapsing parent container caused by floated children?');
	var testAnswer05 = prompt().toLowerCase();

	if(testAnswer05 === 'hidden') {
		numCorrectAnswers++;
		console.log('Gee, I cant pull thw wool over your eyes!');
	}
	else {
		console.log('Nope! The answer is hidden.');
	}

	console.log('What is the tag called that is used to create a link with a url?');
	var testAnswer06 = prompt().toLowerCase();

	if(testAnswer06 === 'anchor') {
		numCorrectAnswers++;
		console.log('Correct!');
	}
	else {
		console.log('Wrong!The answer is anchor');
	}

	console.log('True or False: HTML stand for Hyper Text Markup Language');
	var testAnswer07 = prompt().toLowerCase();

	if(testAnswer07 === 'true') {
		numCorrectAnswers++;
		console.log('You are correct!');
	}
	else {
		console.log('Sorry, the answer is true');
	}

	console.log('Which parent element contains a data row?');
	var testAnswer08 = prompt().toLowerCase();

	if(testAnswer08 === 'table') {
		numCorrectAnswers++;
		console.log('Correct!');
	}
	else {
		console.log('NOOOO! Its a table.');
	}

	console.log('What kind of element is a child element to?');
	var testAnswer09 = prompt().toLowerCase();

	if(testAnswer09 === 'parent') {
		numCorrectAnswers++;
		console.log('Its like the parent trap!');
	}
	else {
		console.log('The correct answer is parent');
	}

	console.log('Which element is considered to be the universal element in html?');
	var testAnswer10 = prompt().toLowerCase();

	if(testAnswer10 === 'div') {
		numCorrectAnswers++;
		console.log('Thats right!');
	}
	else {
		console.log('The correct answer is div.');
	}	
}

else {

	console.log('What kind of braces follow a selector in the CSS? CURLY or REGULAR');

	var answer06 = prompt().toLowerCase();

	if(answer06 === 'curly') {
		numCorrectAnswers++;
		cssCorrectAnswers++;
		console.log('You got it!');
	}
	else {
		console.log('Sorry, it was curly.');
	}

	console.log('True or False: A colon always follows the property');

	var answer07 = prompt().toLowerCase();

	if(answer07 === 'true') {
		numCorrectAnswers++;
		cssCorrectAnswers++;
		console.log('If you continue to keep your course true, youll get through through this A-OK!');
	}
	else {
		console.log('Nope!');
	}

	console.log('How many targets can an ID have? ONE SIX or INFINITE');

	var answer08 = prompt().toLowerCase();

	if(answer08 === ('one' || 1)) {
		numCorrectAnswers++;
		cssCorrectAnswers++;
		console.log('Correct!');
	}
	else {
		console.log('Noooooooo! It was one.');
	}

	console.log('What does the C in CSS stand for?');

	var answer09 = prompt().toLowerCase();

	if(answer09 === 'cascading') {
		numCorrectAnswers++;
		cssCorrectAnswers++;
		console.log('Correct! Man, ' + name + 'you are a pro!');
	}
	else {
		console.log('Incorrect, the correct answer is Cascading.');
	}

	console.log('Of the following, which selector allows you to target multiple elements without repeating the code? CLASS, ID, or FAMILY');

	var answer10 = prompt().toLowerCase();

	if(answer10 === 'class') {
		numCorrectAnswers++;
		cssCorrectAnswers++;
		console.log('You have got some real class, my friend!');
	}
	else {
		console.log('Talk about a person with no class!');
	}

	if(cssCorrectAnswers >= 5) {
		console.log('This is a question placeholder!');
		var testAnswer01 = prompt().toLowerCase();

		if(testAnswer01 === true) {
			numCorrectAnswers++;
			console.log('words words words good!');
		}
		else {
			console.log('words words words bad!');
		}

		console.log('This is a question placeholder!');
		var testAnswer02 = prompt().toLowerCase();

		if(testAnswer02 === true) {
			numCorrectAnswers++;
			console.log('words words words good!');
		}
		else {
			console.log('words words words bad!');
		}

		console.log('This is a question placeholder!');
		var testAnswer03 = prompt().toLowerCase();

		if(testAnswer03 === true) {
			numCorrectAnswers++;
			console.log('words words words good!');
		}
		else {
			console.log('words words words bad!');
		}

		console.log('This is a question placeholder!');
		var testAnswer04 = prompt().toLowerCase();

		if(testAnswer04 === true) {
			numCorrectAnswers++;
			console.log('words words words good!');
		}
		else {
			console.log('words words words bad!');
		}

		console.log('This is a question placeholder!');
		var testAnswer05 = prompt().toLowerCase();

		if(testAnswer05 === true) {
			numCorrectAnswers++;
			console.log('words words words good!');
		}
		else {
			console.log('words words words bad!');
		}

	}
	else {

		console.log('True or False: JavaScript is a programming language.');

		var answer11 = prompt().toLowerCase();

		if(answer11 === 'true') {
			numCorrectAnswers++;
			console.log('You bet it is!');
		}
		else {
			console.log('Some snooty people may say otherwise, but it most definitely is!');
		}

		console.log('What year did JavaScript first appear?');

		var answer12 = prompt().toLowerCase();

		if(answer12 === '1995') {
			numCorrectAnswers++;
			console.log('Talk about old, right?');
		}
		else {
			console.log('Nice try, but it was 1995.');
		}

		console.log('Which end of engineering can JavaScript be used? FRONT-END, BACK-END, or BOTH');

		var answer13 = prompt().toLowerCase();

		if(answer13 === 'both') {
			numCorrectAnswers++;
			console.log('I guess you could say that it likes it in the front and the back!');
		}
		else {
			console.log('Pff, prude. It was both.');
		}

		console.log('What command is used to print in JavaScript?');

		var answer14 = prompt().toLowerCase();

		if(answer14 === ('console.log();' || 'console.log' || 'console.log()')) {
			numCorrectAnswers++;
			console.log('Correct!');
		}
		else {
			console.log('The correct answer is console.log();');
		}

		console.log('True or False: Java is the shorthand name for JavaScript.');

		var answer15 = prompt().toLowerCase();

		if(answer15 === 'false') {
			numCorrectAnswers++;
			console.log('I would never get caught making that mistake with Java devs around.');
		}
		else {
			console.log('The Java devs would eat you alive for making that mistake!');
		}

	}
}
var finish = new Date();
var difference = new Date();
difference.setTime(finish.getTime() - start.getTime());
console.log( 'Your completion time is ' + difference.getSeconds() + ' seconds!' );
console.log('Your percent correct is' + ' ' + (numCorrectAnswers / 15 * 100) + '%!');