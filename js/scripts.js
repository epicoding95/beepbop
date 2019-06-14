
//user logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());

    $("#output").text(userInput);
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
      return NaN;
    } else if ([i].includes(3)) {
      myArray.push(dave);
    }
    else if ([i].includes(2)) {
      myArray.push(boop)
    }
    else if ([i].includes(1)) {
    myArray.push(beep)
    }
    else if ([i].includes(0)) {
    myArray.push(0)

}

}
console.log(myArray);

}
