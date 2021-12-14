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
