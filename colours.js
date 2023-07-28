import { decks } from 'cards';
import { hearts, spades, clubs, diamonds } from 'cards/build/suits/index.js';
import chalk from 'chalk';
import inquirer from 'inquirer';

const deck = new decks.StandardDeck;
deck.shuffleAll();

const getCompCard = () => {
    const choice = deck.draw(1);
    return choice;
}

const getUserCard = () => {
    let userChoice = "";
    let validInput = false;

    while(!validInput) {
        userChoice = inquirer.prompt("Pull another card from the deck: ");
        if (userChoice === "yes" || "y") {
            validInput = true;
        }
    }
    return deck.draw(1)
}

const colourCards = (userChoice) => {
    const result = getUserCard();
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
getUserCard()

// const card = deck.draw(1)

// console.log(chalk.green(card))
// console.log(colourCards(hearts))
// console.log(colourCards(clubs))
// console.log(colourCards(diamonds))
// console.log(colourCards(spades))

// module.exports = {
//     colourCards,
//     getUserCard,
// }



