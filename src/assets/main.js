$(function() {

  // your code will go here
  $.ajax({
      url: 'https://www.codeschool.com/users/yyan_prtech.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        result = response.courses.completed;
        $.each( result, function( i, val ) {
          $( "#badges").append( "<div class=\"course\"><h3>" + val.title + "</h3><img src=\"" + val.badge + "\"><a class=\"btn btn-primary\" href=\"" + val.url + "\" target=\"_blank\">See Course</a></div>" );
        });
      }
    });
});
