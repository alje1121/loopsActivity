/*
- function that will count to a series of number depending on the input of the user.
- get the value of the input field. in order to get the value of the input, using a dot(.)
notation call out its value property.

5 WAYS to Select Elements (5 DOM Selectors)
- getElementByTagName() -- collective through the use of the element/tag name.
- getElementByClassName() -- collective through the use of their class attributes.
- getElementById() -- select a disctinct/specific through the use of its ID attribute.
- querySelector() -- neutral/versatile selection.
- querySelectorAll() -- collective approach when selecting multiple componenets/elements at once.
*/
function countUsingWhile() {
	let input1 = document.getElementById('task1').value;
	//solution to avoid negative number
	if (input1 <= 0) {
		//inform the user that input is NOT valid
		//innerHTML property
		let msg = document.getElementById('message');
		msg.innerHTML = 'Value Not Valid';
	} else {
	//what will happen if the condition is/not met.
	while (input1 !== 0){
		alert(input1);
		input1-- //decrease the value of input by 1 per iteration of the loop
		}
	}
}

/*
function that will count to a series of number depending on the value inserted by the user.
*/
function countUsingDoWhile() {
	//get the input of the user
	let number = document.getElementById('task2').value;
	// make sure the value is valid (will not accept 0 or less)
	if (number <= 0) {
		let displayText = document.getElementById('info')
		displayText.innerHTML = 'The number is not valid'
	} else {
		//PROCEED coz the value is VALID
		/*
		let number = Number(prompt('Give me a number'));
		do{
			console.log('Do While ' + number);
			number += 1;	
		}while (number <10)
		*/
		let indexStart = 1 //will count from 1 to n (depending on the value inserted by user)
		do {
			//block of code identified here will be executed first
			let displayText = document.getElementById('info');
			displayText.innerHTML = number + ' is Valid';
			alert('Count value: ' + indexStart);
			indexStart++
		} while (indexStart <= number);

	}
}


// FOR LOOP
// syntax: for (initialization; expression/condition; finalExpression/iteration)
// Task: count to a series number depending on the value inserted by user.
function countUsingForLoop() {
	let data = document.getElementById('task3').value;
	let res = document.getElementById('response');
	if (data <= 0) {
		res.innerHTML = 'Input Invalid';
	} else {
		//res.innerHTML = 'Input Valid';
		//initialization; condition; iteration/finalExp
		for (let startCount = 0; startCount <= data; startCount++) {
		//since the start of the count started with 0 then for every iteration we should add a value of 1 to eventually meet the condition and terminate the process.
		//describe what will happen per iteration
		alert('This is the value in this iteration: ' + startCount); //print each value of each iteration before the process terminates.
		}
	}
}

// [] How to access Elements of a string using repetition control structures.

function accessElementsInString() {
	let name = document.getElementById('userName').value;
	
	if (name !== '') {
		//response if truthy
		//Checker: alert('Value is Valid');
		textLength.innerHTML = 'The string is ' + name.length + ' characters long';
		//upon accessing elements inside a string, this can be done so using [] square brackets.
		//keep in mind we can access each element through the use of its index number/count.
		//the count will start from 0 (first character inside the string coreespons to the number 0), the next is 1 and up to the "nth" number
		/*
		console.log(name[0]);
		console.log(name[1]);
		console.log(name[2]);
		console.log(name[3]);
		console.log(name[4]);
		console.log(name[5]);
		console.log(name[6]);
		*/
	//will use concept of loops in order to produce a much more flexible response for the user's input
		//initialization ; condition ; iteration
	for (let startIndex = 0; startIndex < name.length; startIndex++) {
		//access each element and display it inside the console
		console.log(name[startIndex]);
	}

	} else {
		//response if falsy
		alert('Value is Invalid');
	}
}