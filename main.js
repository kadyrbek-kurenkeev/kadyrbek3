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

console.log(("addbacaa".match(/a/g) || []).length);

// задание 3

var number = [1, 2, 3, 4, 5]; 
function average(number) {
    var sum = 0,
        count = 0;
    for (var count = number.length, i = count - 1; i >= 0; i--) {
        sum += number[i];
    }
    return count ? sum / count : 0;
}

console.log(average(number));
