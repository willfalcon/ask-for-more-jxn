const mq = window.matchMedia( "(min-width: 768px)" );

function thirdRow() {
  if ( $('#third_row').visible() ) {
    $('#3_1_content').removeClass('hide-left');
    console.log("Third row moved in");
  } else {
    setTimeout(thirdRow, 100);
  }
}
function start() {

  $('.box').delay(100).removeClass('hide-opacity');

  if ( $('#second_row').visible() ) {
    $('#2_1_content').removeClass('hide-right');
    thirdRow();
    console.log("Second row moved in");
  } else {
    setTimeout(start, 100);
  }

}

if (mq.matches) {
  $(document).ready(start);
}
