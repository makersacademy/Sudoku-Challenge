$(document).ready(function() {
  $('#preview').on('click', function() {
    $('#sudokustring').val().split("").forEach(function(number, i) {
      $($('td input')[i]).val(number)
    });
  });

  $('#solver').submit(function(event) {
    event.preventDefault();
    $.post( "/", $( "#sudokustring" ).serialize(), function( data ) {
      data.split("").forEach(function(number,i) {
        $($('td input')[i]).val(number)
      });
    });
  });

});

