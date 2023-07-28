// pseudo

// Shuffle the deck

// deal 2 cards to user
// deal 2 cards to cpu

// sum of 2 cards for user
// sum of 2 cards for cpu

// player decision
// stick with current cards
// or pull another card

// each time a card is pulled
// we have to calculate whether its bust or okay
// if the player goes over 21, they lose and the game is restarted

// var that stores the players hand

// when the dealer reaches 17 they cannot get another card

// compare score
// win counter

// play again?

import { decks } from 'cards';
import { hearts, spades, clubs, diamonds } from 'cards/build/suits/index.js';

import chalk from 'chalk';

const deck = new decks.StandardDeck;
deck.shuffleAll();

const card = deck.draw(1)
console.log(chalk.green(card))

const colourCards = (card) => {
    const result = card
    const id = 10
    if (result === hearts) { 
        return chalk.red(`Card: Hearts Value: ${id}`);
    } else if (result === spades) {
        return chalk.green(`Card: Spades Value: ${id}`);
    } else if (result === clubs) {
        return chalk.blue(`Card: Clubs Value: ${id}`);
    } else if (result === diamonds) {
        return chalk.magenta(`Card: Diamonds Value: ${id}`);
    }
} 

console.log(colourCards(hearts))


