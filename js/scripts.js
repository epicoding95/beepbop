
//user logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var myArray =[];
    $("#output").text(userInput);

debugger;


  myFunction(userInput);








  });
});

  function myFunction(userInput){
  var dave = "I'm sorry Dave, I'm afraid i can't do that.";
  var beep = "beep";
  var boop = "boop";


  var myArray =[];

  for (var i = 0; i <= userInput; i++){

  if (userInput === "") {
      return enter a number;
    } else if (str(i).includes(3)) {
      myArray.push(dave);


  }
    console.log(myArray.toString());
}
}
