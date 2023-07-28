import { decks } from 'cards';
import { hearts, spades, clubs, diamonds } from 'cards/build/suits/index.js';
import chalk from 'chalk';

const deck = new decks.StandardDeck;
deck.shuffleAll();

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

const card = deck.draw(1)

console.log(chalk.green(card))
console.log(colourCards(hearts))
console.log(colourCards(clubs))
console.log(colourCards(diamonds))
console.log(colourCards(spades))

// module.exports = colourCards;



