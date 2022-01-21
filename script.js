
let cards =[];//array -ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let player={
    Name :"Preksha",
    Chips: 45
}

let playerEl =document.getElementById('player-el');
playerEl.textContent =player.Name + ": $"+player.Chips;

function getRandomCard(){
    let randomNumber =Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function startGame(){
    isAlive =true;
    let firstCard = getRandomCard();
    let secondCard =getRandomCard();
    cards=[firstCard,secondCard];
    sum = firstCard+secondCard;
    renderGame();
}

function renderGame(){
    //renderout cards
    cardsEl.textContent = "Cards: " 

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+ ", ";
    }
    sumEl.textContent = "Sum: " +sum;
    if(sum <= 20){
        message='do you want to draw a new card?';
    }
    else if(sum === 21){
        message ="Wohoo! you got a blackjack!"
        hasBlackJack = true;
    }
    else{
        message = "you're got out of the game"
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){

        let card = getRandomCard();
        sum += card;
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}
// let age=22;
// if(age<21){
//     console.log('no entry');
// }
// else{
//     console.log('you are in');
// }
