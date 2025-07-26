let player = {
    name: "Jack",
    chips: 145
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;


let strtBtn = document.querySelector("#start-btn");
let newBtn = document.querySelector("#new-btn");
let msgEl = document.querySelector("#msg-el");
let cardEl = document.querySelector("#card-el");
let sumEl = document.querySelector("#sum-el");
let personEl = document.querySelector("#person_el");

personEl.textContent = player.name + " : $" + player.chips;

function randomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum === 1) {
        return 11; // Ace
    } else if (randomNum > 10) {
        return 10; // Face cards
    } else {
        return randomNum; // Number cards
    }

}
function startGame() {
    isAlive = true;
    let card1 = randomCard();
    let card2 = randomCard();
     cards = [card1, card2];
     sum = card1 + card2;
     renderGame();
}
// Function to render the game state
function renderGame() {
    cardEl.textContent = "Cards : "+ " ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        msgEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        msgEl.textContent = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        msgEl.textContent = "You're out of the game!";
        isAlive = false;
    }
    sumEl.textContent = "Sum : " + sum;

}

strtBtn.addEventListener("click", startGame)

newBtn.addEventListener("click", () => {
    if(isAlive===true && hasBlackJack===false){
    let card3 = randomCard();
    cards.push(card3)
    sum += card3;
    renderGame();
    }
})


