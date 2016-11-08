'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var board = [];

// solution is 4 chosen letters example: 'abcd'
// extra credit add a solution generator?
var solution = 'abcd';

// extra how to prompt letters that can be used?
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i]);
    }
}

// if hardcoded commit this out at the bottom above getprompt()...
function generateSolution() {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    solution = 'abcd';
    var correctletterlocation = 0;
    var correctLetters = 0;
    var solutionArray = solution.split('');
    var guessArray = guess.split('');

    for (var i = 0; i < solutionArray.length; i++) {
        if (solutionArray[i] === guessArray[i]) {
            correctletterlocation++;
            solutionArray[i] = null;
        }
    }
    for (var i = 0; i < guessArray.length; i++) {
        var targetIndex = solutionArray.indexOf(guessArray[i]);
        if (targetIndex > -1) {
            correctLetters++;
            solutionArray[targetIndex] = null;
        }
    }
    return correctletterlocation + "-" + correctLetters;
}
// your code here
// for loop an array
// if the letter is correct and if position of letter is correct.


function mastermind(guess) {
    var hint = generateHint(solution, guess);
    board.push(guess + " " + hint);

    if (guess === solution) {
        return 'You guessed it!';
    }

    if (board.length === 10) {
        return 'You ran out of turns! The solution was ' + solution;
    }
    return guess;
}
// your code here
// when the guess matches the solution



function getPrompt() {
    rl.question('guess: ', (guess) => {
        console.log(mastermind(guess));
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#mastermind()', function () {
        it('should register a guess and generate hints', function () {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function () {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function () {
        it('should generate hints', function () {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function () {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {

    // if hardcoded commit this out...
    generateSolution();
    getPrompt();
}