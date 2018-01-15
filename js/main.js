var cards = [
{
  rank: 'Queen',
  suit: 'Hearts',
  cardImage: 'images/queen-of-hearts.png',
},
{
  rank: 'Queen',
  suit: 'Diamonds',
  cardImage: 'images/queen-of-hearts.png',
},
{
  rank: 'King',
  suit: 'Hearts',
  cardImage: 'images/queen-of-hearts.png',
},
{
  rank: 'King',
  suit: 'Diamonds',
  cardImage: 'images/queen-of-hearts.png',
},
];
var cardsInPlay = [];

function checkForMatch() {
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    }else {
      alert('Sorry, try again');
    }//if cards match alert 'You found a match'
    //else alert 'Sorry , try again'
  }//Begin if cards in play are equal to 2
}//checkForMatch function

function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();
}//flip card function ends

function createBoard() {
  for (var i = 0; i < cardsInPlay.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
