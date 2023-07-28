
import inquirer from 'inquirer';

import chalk from 'chalk'

// pseudo


import { decks } from 'cards';

// Create a standard 52 card deck 
const deck = new decks.StandardDeck();

let playerScore;
let dealerScore;

// Shuffle the deck
deck.shuffleAll();



// deal 2 cards to user// var that stores the players hand
const playerCards = deck.draw(2);

// deal 2 cards to cpu
const dealerCards = deck.draw(2);


// sum of 2 cards for user/cpu

const addCards = (cards) => {
    //1. get each value of the hand
    //2. add them together 

    let sum = 0;

   for (let i= 0; i < cards.length; i++) {
    if(cards[i].rank.abbrn === "J" || cards[i].rank.abbrn === "Q" || cards[i].rank.abbrn === "K"){
        sum += 10;
    } else if(cards[i].rank.abbrn === "A") {
        sum += 1; //TBC
    } else {
        sum += parseInt(cards[i].rank.abbrn);
    }
   }
    playerScore = sum;
    console.log(chalk.green(`The players score is ${playerScore}`));
    evaluateSum(sum); 

}

const addDealerCards = (cards) => {
    //1. get each value of the hand
    //2. add them together 

    let sum = 0;

   for (let i= 0; i < cards.length; i++) {
    if(cards[i].rank.abbrn === "J" || cards[i].rank.abbrn === "Q" || cards[i].rank.abbrn === "K"){
        sum += 10;
    } else if(cards[i].rank.abbrn === "A") {
        sum += 1; //TBC
    } else {
        sum += parseInt(cards[i].rank.abbrn);
    }
   }
    dealerScore = sum;
    console.log(chalk.magenta(`The dealers score is ${dealerScore}`));
    evaluateDealerSum(sum); 

}




// player decision
// stick with current cards
// or pull another card


function playerDecision () {
    // Show them the cards
    console.log(playerCards)
    // Ask player if want stick with current cards or pull another card
    inquirer.prompt([
        {
            type: 'list',
            name: 'decision',
            message: 'Would you like another card?',
            choices: ['Yes', 'No']
        }
    ]).then(answers => {
        if(answers.decision === 'Yes'){
            ///ADD CARD TO PLAYERS HAND
            playerCards.push(...deck.draw(1));
            addCards(playerCards);
        }else {
            addDealerCards(dealerCards);
        }
    })

}

function dealerTurn () {
    console.log(dealerCards);
    dealerCards.push(...deck.draw(1));
    addDealerCards(dealerCards);
}

// if the player goes over 21, they lose and the game is restarted
function evaluateSum(sumCards) {
    if(sumCards > 21){
        console.log(chalk.red(`You lose. Your total is ${sumCards}`));
    } else {
        playerDecision();
    }
}

function evaluateWinner(player, dealer){
    if(player > dealer){
        console.log(chalk.green('You win! Well done.'));
    } else {
        console.log(chalk.yellow('You lose. Try again!'));
    }
}

function evaluateDealerSum(sumCards){
    if(sumCards > 21){
        evaluateWinner(playerScore, 0)
    }
    if(sumCards >= 17){
        evaluateWinner(playerScore, dealerScore);
    }else{
        dealerTurn();
    }
}

addCards(playerCards);




