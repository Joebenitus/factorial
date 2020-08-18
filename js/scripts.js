$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    const userInput = parseInt($("input#number").val());
    let finalNum = userInput;

    if (userInput === 0){
      $(".answer").text(userInput + "! = 1" )
    } else {
      for (let currentFactor = userInput; currentFactor > 1; currentFactor -= 1){
        finalNum *= (currentFactor - 1);
        $(".answer").text(userInput + "! = " + finalNum);
      }
      $(".answer").show();
    }
  });
});