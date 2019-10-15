// This script uses the Card, Hand, Deck objects that were created as part of the objects_constructors.js exercises. The functionality found at the bottom can be expanded to implement a blackjack type game.

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }

    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`;
    }
}

// Hand constructor
// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value.

class Hand {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        return this.cards.push(card);
    }

    getPoints() {
        // map creates an array of just point values and reduce sums them all up into one total value
        return this.cards
            .map(el => el.point)
            .reduce((sum, cur) => sum + cur, 0);
    }
}



// Deck constructor
// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card.

class Deck {
    constructor() {
        this.cards = [];
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addCard(card) {
        this.cards.push(card);
    }

    draw() {
        let rand = this.getRndInteger(0, this.cards.length);
        let card = this.cards[rand];
        let index = this.cards.indexOf(card);
        
        // Removes the card from the deck
        this.cards.splice(index, 1);
        return card
    }

    shuffle() {
        let cardsArray = this.cards;
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
    }

    numCardsLeft() {
        return `There are ${this.cards.length} cards remaining.`
    }
}


let gameDeck = new Deck();
// Nested for loop populates deck of cards. Point Values 1 - 13. Each suit is represented.
let suits = ["spades", "clubs", "diamonds", "hearts"];
for (let j = 0; j <= 3; j++) {
    for (let i = 1; i <= 13; i++) {
        gameDeck.addCard(new Card(i, suits[j]));
    }
}

// This logic can be expanded upon to create a blackjack game

let playerHand = new Hand();
playerHand.addCard(gameDeck.draw())
let playerPoints = playerHand.getPoints();

let dealerHand = new Hand();
dealerHand.addCard(gameDeck.draw())
let dealerPoints = dealerHand.getPoints();

console.log('player points', playerPoints)
console.log('dealer points', dealerPoints)

console.log(gameDeck.numCardsLeft()) 
// There are 50 cards remaining. Which makes sense since we only drew 2 cards from the deck.