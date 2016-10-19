'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// text book version....
// function rockPaperScissors(hand1, hand2) {

//     var answer1 = hand1;
//     var answer2 = hand2;

//     if (answer1 === answer2) {
//         return "It's a tie!";

//     } else if (answer1 === 'rock') {
//         if (answer2 === 'scissors') {
//             return 'Hand one wins!';

//         } else if (answer2 === 'paper')
//             return 'Hand two wins!'

//     } else if (answer1 === 'paper') {
//         if (answer2 === 'rock') {
//             return 'Hand one wins!';

//         } else if (answer2 === 'scissors')
//             return 'Hand two wins!'

//     } else if (answer1 === 'scissors') {
//         if (answer2 === 'paper') {
//             return 'Hand one wins!';

//         } else if (answer2 === 'rock')
//             return 'Hand two wins!'
//     }
// }

function rockPaperScissors(hand1, hand2) {
    if (hand1 === hand2) {
        return "It's a tie!";
    } else if (hand1 === "rock" && hand2 === "paper") {
        return "Hand two wins!";
    } else if (hand1 === "paper" && hand2 === "scissors") {
        return "Hand two wins!";
    } else if (hand1 === "scissors" && hand2 === "rock") {
        return "Hand two wins!";
    } else if (hand1 === "rock" && hand2 === "scissors") {
        return "Hand one wins!";
    } else if (hand1 === "paper" && hand2 === "rock") {
        return "Hand one wins!";
    } else if (hand1 === "scissors" && hand2 === "paper") {
        return "Hand one wins!";
    } else {
        return "invalid entry, please try again";
        rockPaperScissors();
    }
}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log(rockPaperScissors(answer1, answer2));
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', function() {
        it('should detect a tie', function() {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', function() {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
    });
} else {

    getPrompt();

}
