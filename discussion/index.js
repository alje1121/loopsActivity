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
