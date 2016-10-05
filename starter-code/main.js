var cardOne = "queen"
var cardTwo = "queen"
var cardThree = "King"
var cardFour = "King"

if (cardOne === cardTwo) {
	alert("You have a match!");
}
else if (cardOne === cardThree) {
	alert("Sorry, try again.");
}
else if (cardThree === cardFour) {
	alert("You have a match");
}
else if (cardThree === cardTwo) {
	alert("Sorry not a match!");
}