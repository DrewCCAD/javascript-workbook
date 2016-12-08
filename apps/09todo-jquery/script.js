'use strict';
// Spec 1
// Using jQuery, put a submit event listener on the form.

// Spec 2
// Inside your callback prevent the default event from occuring
// when you submit. Then within the $(this) context, .find()
// the value of #todo and assign it to a variable called todoText.

// Spec 3
// Construct a string containing a list item <li></li> with your todoText in the middle.
// .append() the html string to the end of your #todo-list.

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        console.log($(this));

        var value = $(this).find('input[type="text"]').val();
        // $('ul#todo-list').append('<li>' + value + '</li>');
        $('#todo-list').append('<li><input type="checkbox"/>' + value + '</li>');
        $(this).find('input[type="text"]').val('')
        $('#todo-list').sortable();
    });
    // input[type="checkbox" i]
    $('#todo-list').on('click', 'input[type="checkbox"]', function() {
        $(this).parent().remove();
    });

});

// use .on for removing on click for spec 6