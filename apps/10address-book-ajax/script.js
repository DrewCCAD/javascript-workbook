'use strict';
// var str = "<div>", + <h1>,
$(document).ready(function () {


  $.ajax('https://reqres-api.herokuapp.com/api/users', {
    success: function (users) {
      users.forEach(function (user) {
        var str = $('<tr><td>' + user.id + '</td><td>' +
          user.first_name + '</td><td>' + user.last_name +
          '</td><td><a href="#" data-id="' + user.id +
          '">view</a>' + '</td></tr>');

        $('tbody').append(str);
      });
    }
  });
  $('tbody').on('click', 'a', function () {

    $(this).parent().remove();
  });
});
$('tbody').on('click', '[data-id]', function(event) {
    event.preventDefault();
    var url = 'https://reqres-api.herokuapp.com/api/users/' + $(event.target).data('id');
    $.ajax(url, {
        success: function(user) {
            var str = '<h3>' + user.first_name + ' ' + user.last_name + '</h3><h4>' + user.occupation + '</h4><p>' + user.phone + '</p><p>' + user.address + '</p><img src="' + user.avatar + '">';
            $('#details').html(str);
        }
    });
});
$('form').submit(function(event) {
    event.preventDefault();
    console.log($(this));
});