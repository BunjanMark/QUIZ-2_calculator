function calculator() {
	let operator = document.getElementById("operator").value;
	let numberOne = Number(document.getElementById("numberOne").value);
	let numberTwo = Number(document.getElementById("numberTwo").value);
	let answer = document.getElementById("result");
	answer.style.color = "green";
	switch (operator) {
		case "+":
			answer.innerHTML = numberOne + numberTwo;
			break;

		case "-":
			answer.innerHTML = numberOne - numberTwo;
			break;
		case "*":
			answer.innerHTML = numberOne * numberTwo;
			break;

		case "/":
			answer.innerHTML = numberOne / numberTwo;
			break;
		case "%":
			answer.innerHTML = numberOne % numberTwo;
			break;

		default:
			answer.innerHTML = "Invalid operator";
			answer.style.color = "red";
	}
}
