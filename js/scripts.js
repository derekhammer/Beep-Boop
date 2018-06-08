$(document).ready(function()
{
  $("#number-input").submit(function(event)
  {
    event.preventDefault();
    var userInput = $("#the-number").val();
    var result = userInput.split(" ").map(function(t){return parseInt(t)});;
    var resultLength = result.length;


    var finalResult =[]

    for (i = 0; i < resultLength; i++){
      if (result[i] === 0){
        finalResult.push("BEEP ");
      }
      else if (result[i] === 1){
        finalResult.push("BOOP ");
      }
      // else if (result[i]/3 === 0){
      //   finalResult.push("I'M SORRY BRO THATS A BAD NUMBER ");
      // }
      else{
        finalResult.push(result[i] + " ");
      }

}
var finalString = finalResult.join("");
alert(finalString);
  });

  });
