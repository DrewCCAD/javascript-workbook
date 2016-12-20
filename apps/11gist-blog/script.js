'use strict';

$(document).ready(function() {
    // Spec 1.1
    // Using jQuery to make an AJAX call, insert a list of links into #gists using JavaScript forEach with the "description" of each gist as the text.
    // -#id of each blogPost is the 'discription'

    // Spec 1.2
    // Within each loop, write an if condition to insert only gists that start with a '#gist' in the "description". After fitering, remove the '#gist ' from the title. (use sub-string to remove stuff with the #gist.)

    // Spec 1.3
    // Set the href attribute on each link to "#", and a "data-url" attribute equal to the "url" value. (like what did in address book)

    $.ajax('http://127.0.0.1:8080/apps/11gist-blog/api/gists.json', {
        success: function(gists) {
            gists.forEach(function(gist) {
                // make an if statement look discription start with #gist
                if (gist.description.startsWith('#post')) {
                    var blog = $('<li><a href="#" data-url="' + gist.url + '">' + gist.description.substring(6) + '</a></li>');
                    $('#posts').append(blog);
                }
            });
        }
    });
    // Spec 2
    // After the links are are inserted, add a click listener, and prevent the default event from occuring. Then make an ajax call with the "data-url" value, grabbing it with $.data('url'). (like lines of 24-30 in address book code)
    // Spec 3
    // Insert the "content" of the file named gist.md into #gist.

    // Spec 3.1
    // Since our "content" is written in Markdown, we can use the Marked.js library to convert the content to html. Simply call marked() on your content. e.g. marked(content).

    $('#posts').on('click', 'a', function(link) {
        link.preventDefault();
        var clicked = $(this).data('url');
        $.ajax(clicked, {
            success: function(url) {
                var postContent = marked(url.files['post.md'].content);
                $('#post').append(postContent);
                console.log(postContent);
                $.ajax(url['comments_url'], {
                    success: function(comment) {
                        $('#comments').html('<h4>' + comment[0]['user']['login'] + '</h4><p>' + comment[0].body + '</p>');
                    },
                });
            }
        })
    });
});

// Spec 4
// After inserting your content, make another ajax call using the "comments_url", and insert the ["blogPost"]["login"] and "body" in a list in #comments. *(make 3 ajax call one to main url then second to url, third to comment url)

// Spec 5
// Make it look nice! This is going to be YOUR blog!