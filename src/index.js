import './sass/styles.scss';

$(document).ready(function() {
  event.preventDefault();
  $(".bottom").hide();
  $("#menu").click(function(){
    $(".bottom").toggle();
    display: block;
  });


});
