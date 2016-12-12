'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(start, end) {
    var block = start.pop();
    end.push(block);
}

// Your code here
//  get peice off the start stack.
//  move to end stack
//  and save it

// }

function isLegal(startStack, endStack) {

    // if (start !== undefinded) {
    //     return [start.length -1];
}

// Your code here
// get a refrence to actual start stack and save it.
// does start stack have anyting in it?
// get a reference to  the actual end stack and save it.
// is the piece on top bigger or smaller then the piece ontop of the endstack.
// is there anything in the end stack if not dont have to check.
// if bad return something
// if good return something else

}

function checkForWin() {
    if (stacks.c.length === 4 || stacks.b.length === 4) {
        cnsole.log("you win, board is reset!");
        stacks = {
            a: [4, 3, 2, 1],
            b: [],
            c: []
        };
        return true;
    } else {
        return false;
    }
}
// Your code here
// does the stack have a leingth of 4



function towersOfHanoi(startStack, endStack) {
    var start = stacks[startStack];
    var end = stacks[endStack];
    // isLegal(start, end);
    movePiece(start, end);
    checkForWin();

}

function getPrompt() {
    printStacks();
    rl.question('start stack: ', (startStack) => {
        rl.question('end stack: ', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#towersOfHanoi()', function() {
        it('should be able to move a block', function() {
            towersOfHanoi('a', 'b');
            assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
        });
    });

    describe('#isLegal()', function() {
        it('should not allow an illegal move', function() {
            stacks = {
                a: [4, 3, 2],
                b: [1],
                c: []
            };
            assert.equal(isLegal('a', 'b'), false);
        });
        it('should allow a legal move', function() {
            stacks = {
                a: [4, 3, 2, 1],
                b: [],
                c: []
            };
            assert.equal(isLegal('a', 'c'), true);
        });
    });
    describe('#checkForWin()', function() {
        it('should detect a win', function() {
            stacks = { a: [], b: [4, 3, 2, 1], c: [] };
            assert.equal(checkForWin(), true);
            stacks = { a: [1], b: [4, 3, 2], c: [] };
            assert.equal(checkForWin(), false);
        });
    });
} else {

    getPrompt();

}
