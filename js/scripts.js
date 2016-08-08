
function capFL(str) {
  var firstLetter = str.charAt(0).toUpperCase();
  var middle = str.substring(1, str.length - 1)
  var lastLetter = str.charAt(str.length - 1).toUpperCase();
  return console.log(firstLetter + middle + lastLetter);
}

var sentence = prompt("enter a sentence");

capFL(sentence);
