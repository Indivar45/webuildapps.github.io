/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, acivePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


var x = document.querySelector('#score-1').textContent;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () { 
    dice = Math.floor(Math.random() * 6) + 1; //generate a random number between 1-6
    document.querySelector('#current-' + activePlayer).textContent = dice; // display random number on the current score
    var diceDOM = document.querySelector('.dice'); //get dice element and store it into diceDOM variable
    diceDOM.style.display = 'block'; // setting dice display property as 'block'
    diceDOM.src = "../images/diceGame/dice-" + dice + ".png"; // changing images src based upon dice value
    if (dice != 1) {
        roundScore += dice;
        document.querySelector('#score-' + activePlayer).textContent = roundScore;
    } else { 
        document.querySelector('#score-' + activePlayer).textContent = 0;
        if (activePlayer == 1) { 
            activePlayer = 0;
        } else {
            activePlayer = 1;
        }
        document.getElementById('current-0').textContent = 1;
        document.getElementById('current-1').textContent = 1;
        diceDOM.style.display = 'none';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }
});