// slide scrollup and down
function scrollToNext(){
	var winH = $(window).height();
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + winH},
        'slow');
}

function scrollToPrev(){
	var winH = $(window).height();
    $('html,body').animate({
        scrollTop: $(window).scrollTop() - winH},
        'slow');
}

$(document).keydown(function (evt) {
    if (evt.keyCode == 39) { // down arrow
      scrollToNext(); // scroll to the next new heading instead
    } else if (evt.keyCode == 37) { // up arrow
      scrollToPrev();
    }
  });


