// https://app.schoology.com/assignment/2271041776/info
function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
    console.log("Hello " + other.name + ", I am " + this.name + "!");
};

// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
let sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
let jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");

// Have sonny greet jordan using the greet method.
sonny.greet(jordan);

// Have jordan greet sonny using the greet method.
jordan.greet(sonny);

// Write a statement to print the contact info (email and phone) of Sonny.
console.log("Sonny's Contact Info: ", sonny.email, sonny.phone);

// Write another statement to print the contact info of Jordan.
console.log("Jordan's Contact Info: ", jordan.email, jordan.phone);

// Card Constructor

class Card {
    constructor(point, suit) {
        this.point = point;
        this.suit = suit;
    }
}

let myCard = new Card(10, "spades");
console.log("my card", myCard.point, myCard.suit);

// getImageUrl() Add a getImageUrl method to card objects by adding it as a property to Card.prototype.

Card.prototype.getImageUrl = function() {
    return `images/${this.point}_of_${this.suit}.png`;
};

console.log(myCard.getImageUrl()); // images/10_of_spades.png

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

let myHand = new Hand();

// Adding cards to myhand
myHand.addCard(new Card(5, "diamonds"));
myHand.addCard(new Card(13, "spades"));

console.log(myHand.getPoints()); // 18

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
        console.log(this.cards[rand]);
        let index = this.cards.indexOf(card);
        // Removes the card from the deck
        this.cards.splice(index, 1);
    }

    shuffle() {
        let cardsArray = this.cards;
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
    }

    numCardsLeft() {
        console.log(`There are ${this.cards.length} cards remaining.`);
    }
}

myDeck = new Deck();
let suits = ["spades", "clubs", "diamonds", "hearts"];

// Nested for loop populates deck of cards. Point Values 1 - 13. Each suit is represented.
for (let j = 0; j <= 3; j++) {
    for (let i = 1; i <= 13; i++) {
        myDeck.addCard(new Card(i, suits[j]));
    }
}

myDeck.draw();
myDeck.numCardsLeft();
console.log(myDeck.cards[0]);
myDeck.shuffle();
console.log(myDeck.cards[0]);
