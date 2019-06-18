
//user
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());

    $("#output").text;

    myFunction(userInput);
  });
  });


//buisness
function myFunction(userInput){
  var dave = "I'm sorry Dave, I'm afraid I can't do that.";
  var beep = "beep";
  var boop = "boop";
  var myArray =[];


// debugger;
    for (var i = 0; i <=userInput; i++){
    myArray.splice(i.toString());


          if (userInput === ""){
            return NaN;
          } else if (i.toString().includes(3)){
            myArray.splice(i,1,dave);
          // console.log(myArray);
          } else if (i.toString().includes(2)){
            myArray.splice(i,1, boop);

          } else if (i.toString().includes(1)){
            myArray.splice(i,1, beep);

          }
           else (myArray.push(i));

          }
          console.log(myArray);
        }











    // console.log(myArray);
