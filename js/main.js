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
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    }else {
      alert('Sorry, try again');
    }//if cards match alert 'You found a match'
    //else alert 'Sorry , try again'
  }//Begin if cards in play are equal to 2
}//checkForMatch function

function flipCard(cardId) {
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  checkForMatch();
}//flip card function ends

flipCard(0);
flipCard(2);
