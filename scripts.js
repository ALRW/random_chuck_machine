$(document).ready(function() {

  function getQuote() {
    $.getJSON("http://api.icndb.com/jokes/random")
      .done(function(data) {
        $('#share').attr('href', "https://twitter.com/intent/tweet?text=" + data.value.joke);
        $('#quote').replaceWith('<p id="quote" class="flow-text">' + data.value.joke + '</p>');
      })
      .fail(function(data) {
        $('#quote').replaceWith('<p id="quote" class="flow-text">An Error Has Occurred.</p>');
      });
  }

  $('#new').on('click', function() {
    getQuote();
  });

  getQuote();
});
