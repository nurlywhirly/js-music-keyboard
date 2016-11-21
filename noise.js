$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    playSound(note);
  })
});

var playSound = function(note) {
  var id = "#" + note + "Audio",
      file = "media/" + note + "_note.mp3",
      audio = new Audio(file);

  audio.play();
};
