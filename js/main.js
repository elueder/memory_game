//console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "css/images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "css/images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "css/images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "css/images/king-of-diamonds.png",
}];

var cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay.length === 2) {
		if(cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};


function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
	 var newListItem = document.createElement('img');
	 newListItem.setAttribute('src', 'css/images/back.png');
	 newListItem.setAttribute('data-id', i);
	 newListItem.addEventListener('click', flipCard);
	 var gameBoard = document.getElementById('game-board');
	 gameBoard.appendChild(newListItem);
	}
};

createBoard();