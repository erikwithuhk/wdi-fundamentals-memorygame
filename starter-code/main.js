var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne === cardTwo) {
// 	alert('You found a match!');
// } else {
// 	alert('Sorry, try again.');
// }

var gameBoard = document.getElementById('game-board');


var createBoard = function() {
	for (i = 0; i < 4; i++) {
	  var newCard = document.createElement('div');
	  newCard.setAttribute('class', 'card');
	  gameBoard.appendChild(newCard);
	}
};

createBoard();