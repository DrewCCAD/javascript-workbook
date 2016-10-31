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


function movePiece(startStack, endStack) {
  stacks[endStack].push(stacks[startStack].pop());
}
// function movePiece(startStack, endStack) {
//     startStack.pop();
//     endStack.push(stacks);
// }
//  get peice off the start stack.
//  move to end stack
//  and save it

function isLegal(startStack, endStack) {
  return !(stacks[startStack][stacks[startStack].length - 1] > stacks[endStack][stacks[endStack].length - 1])
}
// get a refrence to actual start stack and save it.
// does start stack have anyting in it?
// get a reference to  the actual end stack and save it.
// is the piece on top bigger or smaller then the piece ontop of the endstack.
// is there anything in the end stack if not dont have to check.
// if bad return something
// if good return something else

function checkForWin() {
  var isWinning = stacks.b.length === 4 || stacks.c.length === 4;
  if (isWinning) {
    console.log("You won! board will reset now");
    process.exit();
  }
  return isWinning;
}
// does the stack have a leingth of 4
// function checkForWin() {
//     if (stacks.c.length === 4 || stacks.b.length === 4) {
//         cnsole.log("you win, board is reset!");
//         stacks = {
//             a: [4, 3, 2, 1],
//             b: [],
//             c: []
//         };
//         return true;
//     } else {
//         return false;
//     }
// }

function towersOfHanoi(startStack, endStack) {
  startStack = startStack.toLowerCase();
  endStack = endStack.toLowerCase();
  isLegal(startStack, endStack);
  movePiece(startStack, endStack);
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('Please choose a starting stack to remove a block from: ', (startStack) => {
    rl.question('Please choose a stack to place block on: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', function () {
    it('should be able to move a block', function () {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', function () {
    it('should not allow an illegal move', function () {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', function () {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', function () {
    it('should detect a win', function () {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
} else {

  getPrompt();

}
