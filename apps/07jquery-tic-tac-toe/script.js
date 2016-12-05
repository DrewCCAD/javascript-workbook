'use strict';

$(document).on('ready', function() {
    // Put app logic in here
    var playerTurn = 'X';
    // var playGame = true;

    $('[data-cell]').click(function() {
        $(this).text(playerTurn);
        checkForWin();
        playerTurn = (playerTurn === 'X') ? 'O' : 'X';

    });
    $('button').click(function() {
        $('[data-cell]').text('');
        playerTurn = 'X';
    });
    // function checkForWin() that checks each combination of winning data-cells
    // current playerTurn. Remember to use .text() to GET the the text content of
    // any data-cell. If so, select '#announce-winner' and SET its
    // .text() to say 'Player ' + playerTurn + 'Wins!'

    //     function checkForWin() {
    //     if (diagonalWin || verticalWin || horizontalWin) {
    //         console.log("Player " + playerTurn + " wins!");
    //         return true;
    //     }
    // }
    function checkForWin() {
        var cell0 = $('[data-cell="0"]').text();
        var cell1 = $('[data-cell="1"]').text();
        var cell2 = $('[data-cell="2"]').text();
        var cell3 = $('[data-cell="3"]').text();
        var cell4 = $('[data-cell="4"]').text();
        var cell5 = $('[data-cell="5"]').text();
        var cell6 = $('[data-cell="6"]').text();
        var cell7 = $('[data-cell="7"]').text();
        var cell8 = $('[data-cell="8"]').text();

        // horizontalWin top
        if (cell0 === playerTurn && cell1 === playerTurn && cell2 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        // horizontalWin middle
        if (cell3 === playerTurn && cell4 === playerTurn && cell5 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //horizontalWin bottom
        if (cell6 === playerTurn && cell7 === playerTurn && cell8 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //verticalWin left
        if (cell0 === playerTurn && cell3 === playerTurn && cell6 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //verticalWin middle
        if (cell1 === playerTurn && cell4 === playerTurn && cell7 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //verticalWin right
        if (cell2 === playerTurn && cell5 === playerTurn && cell8 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //diagonalWin left to right
        if (cell0 === playerTurn && cell4 === playerTurn && cell8 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
        //diagonalWin rigth to left
        if (cell2 === playerTurn && cell4 === playerTurn && cell6 === playerTurn) {
            $('#announce-winner').text('Player ' + playerTurn + ' Wins!');
        }
    };

    // function stopGame() {
    //     $('div[data-cell]:empty').html('<span></span>');
    //     playGame = false;
    // }

});