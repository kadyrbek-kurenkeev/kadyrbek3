// задание 1

// function declaration

function min(a,b){
  if (a < b){
    return a;
  }else{
    return b;
  }
}

// function expression

var min = function(a,b){
  if (a < b){
    return a;
  }else{
    return b;
  }
}
// задание 2

var symb = "a", str = "dddbbaaaccad";
function count(str, symb) {

  for (var count = -1, index = 0; index != -1; count++, index = str.indexOf(symb, index + 1));

  return count;
}

console.log(count(str, symb));

// задание 3

const grades = [1, 2, 3,];

var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;

console.log(avg);