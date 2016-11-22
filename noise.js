$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    var note = $(this).html();
    playSound(note);
  });

  $(window).keydown(function(event) {
    var note = event.key;
    playSound(note);
  });

});

var playSound = function(note) {
  var id = "#" + note + "Audio";
  $(id).get(0).play();
};
