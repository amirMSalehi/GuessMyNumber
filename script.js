"use strict";
let secrtNumber = Math.trunc(Math.random() * 20) + 1;
let score =20;
let highscore =20;
function writeMessage(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click' ,function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        writeMessage('pleas enter yor number');
    }else if(guess === secrtNumber) {
        writeMessage('Good job');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secrtNumber;
    }else if(guess !== secrtNumber) {
        writeMessage(guess > secrtNumber ? 'to hight' : 'to low');
        if(score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'red';
        }else {
            writeMessage('You lost');
        }
    }
});
// btn the Reset 
function restPage() {
    location.reload();
}