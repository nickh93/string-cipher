
function cipher1(str) {
  var firstLetter = str.charAt(0).toUpperCase();
  var lastLetter = str.charAt(str.length - 1).toUpperCase();
  var output = firstLetter + lastLetter;
  console.log(output);
  return output;
}

var cipher2 = function(str) {
  var firstLetter = str.charAt(0).toUpperCase();
  var lastLetter = str.charAt(str.length - 1).toUpperCase();
  var output = lastLetter + firstLetter;
  console.log(output);
  return output;
}

var cipher3 = function(currentSentence) {
  var output = currentSentence + cipher2(cipher1(currentSentence));
  console.log(output);
  return output;
}

function cipher4(str) {
  var indexHalf = str.length / 2;
  var finalNumber = Math.floor(indexHalf);
  var appendedLetter = str.charAt(finalNumber);
  var output = appendedLetter + cipher3(str);
  console.log(output);
  return output;
}

var sentence = prompt("enter a sentence");
var finalResult = cipher4(sentence);

function cipher5(str) {
  var output = str.split("").reverse().join("");
  console.log(output);
  return output;
}

$(".text-reg").click(function() {
    alert(sentence);
});

$(".text-cipher").click(function() {
  alert(cipher5(cipher4(sentence)));
});
