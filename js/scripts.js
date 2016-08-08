
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


var sentence = prompt("enter a sentence");

var cipher3 = function() {
  var output = sentence + cipher2(cipher1(sentence));
  console.log(output);
  return output;
}

function cipher4(str) {
  var indexHalf = str.length / 2;
  var finalNumber = Math.floor(indexHalf);
  var appendedLetter = str.charAt(finalNumber);
  var output = appendedLetter + cipher3();
  console.log(output);
  return output;
}

cipher4(sentence);


//capFL(sentence);
