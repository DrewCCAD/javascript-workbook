'use strict';

$(document).ready(function() {
    // Put app logic here
    var block = div;
    var blockmoving = $(this).children().last().detach();
    var number = $("[data - block = '100']")
    var numberblockmoving = blockmoving.data("block")
    var numberofblock = block.data("block");
    var reallyanumber = number("110")

});
// Moving Blocks
//     On click() of a[data - stack], detach() the last() of the children()
//     and set it equal to a variable called block.Then, when another[data - stack]
//     is click() ed, check
//     if the block variable is assigned,
//     if so, append the block to the stack and set block to null.


// Verify move
//     Only move the block if the value of the data- block attribute is less than the
//     last block of the stack, or if the stack is empty.


// Check for win
//   Create a function checkForWin() that checks .forEach() stack and determines if one of the
//   last two stacks has four [data-block]s. Run this function after every move. If you won,
//   put the .text 'You Won! inside the div#announce-game-won element.