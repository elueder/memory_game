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
}


function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	/*if (cardsInPlay.length === 2) {
		checkForMatch();
	}*/
}

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
	 var newListItem = document.createElement('img');
	 cardElement.setAttribute('src', "images/back.png");
	 cardElement.setAttribute('data-id', i);
	 cardElement.addEventListener('click', flipCard);
	 document.getElementById('game-board').appendChild(newListItem);
	}
}

createBoard();