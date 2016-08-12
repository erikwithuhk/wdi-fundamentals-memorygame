var games = [
  ['queen', 'queen', 'king', 'king'],
  ['king', 'king', 'queen', 'queen'],
  ['king', 'queen', 'king', 'queen'],
  ['queen', 'king', 'queen', 'king'],
  ['queen', 'king', 'king', 'queen'],
  ['king', 'queen', 'queen', 'king']
];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var flipCard = function() {
  if (this.getAttribute('data-card') === 'queen') {
    this.setAttribute('style', 'background-image:url(card-queen.gif);' +
      'background-size: cover; background-repeat: no-repeat;');
  } else if (this.getAttribute('data-card') === 'king') {
    this.setAttribute('style', 'background-image:url(card-king.gif); ' +
      'background-size: cover; background-repeat: no-repeat;');
  }
};

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

};

var isMatch = function(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }

  var allCards = document.querySelectorAll('.card')
  for (i = 0; i < allCards.length; i++) {
    allCards[i].removeAttribute('style');
  }
};

var randomizeCards = function() {
  var gameNumber = Math.round(Math.random() * 10);

  while (gameNumber > games.length - 1) {
    gameNumber = Math.round(Math.random() * 10);
  }

  return games[gameNumber];
};

var createBoard = function() {
  var cards = randomizeCards();
  for (i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div');
    newCard.setAttribute('class', 'card');
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', flipCard);
    newCard.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newCard);
  }
};

createBoard();