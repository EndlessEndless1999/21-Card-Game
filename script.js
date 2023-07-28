
// import prompt from 'prompt-sync';
const prompt = import('prompt-sync');


// pseudo


import { decks } from 'cards';

// Create a standard 52 card deck 
const deck = new decks.StandardDeck();

// Shuffle the deck
deck.shuffleAll();



// deal 2 cards to user
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
    return sum; 

}
console.log(playerCards)
console.log(addCards(playerCards))





// player decision



// stick with current cards
// or pull another card


function playerDecision (playerCards) {
    // Show them the cards
    console.log(playerCards)
    // Ask player if want stick with current cards or pull another card
    playerAnswer = prompt('Do you want to stick with current cards or pull another set? y/n ')
    if (playerAnswer === 'y') {
        dealerTurn();
    } else {
        let newCard = deck.draw(1);
        playerCards.push(newCard);
        addCards(playerCards);
        evaluateSum(playerCards);
    }

}

// Check if addSum is over 21
function evaluateSum(sumCards) {
    if(sumCards > 21){
        return  "You lose"
    } else {
        playerDecision();
    }
}

addCards(playerCards);
console.log(playerDecision())

// each time a card is pulled
// we have to calculate whether its bust or okay
// if the player goes over 21, they lose and the game is restarted

// var that stores the players hand

// when the dealer reaches 17 they cannot get another card

// compare score
// win counter

// play again?

// // Pull 2 cards out of the hand to exchange
// const toExchange = hand.splice(2, 2);

// // Discard those 2 cards
// deck.discard(toExchange);

// // Draw 2 new ones from the deck
// hand.push(...deck.draw(2));






