/**
var output = [];
function fizzBuzz() {
    var n = output.length;
    output.push(n+1);
    console.log(output);
}
fizzBuzz();
**/

var output = [];
function fizzBuzz() {
    var n = output.length+1;
    while (n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (n % 3 === 0) {
            output.push("Fizz");
        }
        else if (n % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(n);
        }
        n++;
    }
    console.log(output);
}
fizzBuzz();