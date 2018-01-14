
console.log('Up and running!');

var cards = ['Queen', 'Queen', 'King', 'King'];
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
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}//flip card function ends

flipCard(0);
flipCard(2);
