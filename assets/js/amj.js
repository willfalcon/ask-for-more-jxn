
$(document).ready(function() {
  $('.box').delay(100).removeClass('hide-opacity');

  $('#2_1_content').delay(1600).removeClass('hide-right');
  console.log("Second row moved in");
  $('#3_1_content').delay(2400).removeClass('hide-left');
  console.log("Third row moved in");


});


function thirdRow() {
  if ( $('#third_row').visible() ) {
    $('#3_1_content').removeClass('hide-left');
    console.log("Third row moved in");

  } else {
    setTimeout(thirdRow, 100);
  }

}

function start() {


  if ( $('#second_row').visible() ) {

    $('#2_1_content').removeClass('hide-right');
    console.log("Second row moved in");

  } else {
    setTimeout(start, 100);
  }

}

const mq = window.matchMedia( "(min-width: 768px)" );

if (mq.matches) {
  $(document).ready(start);
  $(document).ready(thirdRow);

}
