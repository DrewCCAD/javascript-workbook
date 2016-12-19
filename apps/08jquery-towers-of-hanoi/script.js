
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
'use strict';

$(document).ready(function() {
  // my code:
  var $block = null;
  var lastBlock = $(this).children().last().data('block');

  $('[data-stack]').on('click', function(){
    if(!$block){
      $block = $(this).children().last().detach();
    } else {
      var $children = $(this).children();
      var blockValue = $block.data('block');

      if($children.length === 0 ||
      $children.last().data('block') > blockValue){
        $(this).append($block);
        $block = null;
      } else {
        console.log('invalid move!!' );
      }

      function checkForWin(){
        if($('[data-stack="2"]').children().length === 4 ||
        $('[data-stack="3"]').children().length === 4){
          console.log("You Won!");
          $('#announce-game-won').text('You Won!');
        }
      }
      checkForWin();
    }
  });
});