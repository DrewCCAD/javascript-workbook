'use strict';

$(document).ready(function () {


  // $.ajax('https://reqres-api.herokuapp.com/api/users', {
  //     success: function(response) {
  //         response.forEach(function(str) {
  //             console.log(str.name);
  //             $('str').append('<li><input type="text"/>' + str + '</li>');
  //         })
  //     }
  // });
  // $('form').submit(function(event) {
  //     event.preventDefault();
  //     console.log($(this));
});
// Copy paste requirements into code which has api data structure.
// Separate things into named functions as much as possible
// Remember to use the settings object with the success method for ajax
// What does this mean: Let's take "id" 1 and put that at the end of the url 
// What does this mean: create a var called str that builds an html string that matches the <tr></tr> in the html markup, but with the user keys. At the end of each loop, append the str to the tbody element.
// Remember what we had to do to register clicks on things that are dynamically added
// Remember how to prevent default


// Spec 2 - Iterate over the users collection
// In a success callback, pass in users as your reponse, and the iterate over each user
// using JavaScript forEach. In each loop, create a var called str that builds an html
// string that matches the <tr></tr> in the html markup, but with the user keys. At the
// end of each loop, append the str to the tbody element.

// Spec 3 - Individiual AJAX calls
// You should have produced links for each row. Put a click listener on each link, and in the
// callback, prevent the default event from occuring. Create a var url that starts as a string
// 'https://reqres-api.herokuapp.com/api/users/'. Now grab the data-id value from the link using
// the .data method, and attach it to the end of the url. Now make an .ajax with that url, and
// in a success callback, pass in user as the response. Build another str that builds an html
// string that matches the default markup in the div#details element.