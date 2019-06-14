$(document).ready(function() {
$('form').submit(function(event) {
  event.preventDefault();
  var userInput = ("input#number").val();
  $("#output").text(output);
});
});
