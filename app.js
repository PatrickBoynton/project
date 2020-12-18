// var message = 'Hello world!';
//
// console.log('This is a test!');
// console.log(message);
//
// var num = 1;
// var sum  = num + num;
//
// console.log(sum);
//
// var name = 'Patrick';
// console.log(name);
//
// name = 'John';
// console.log(name);

// var $sentence = "Welcome to JavaScript.";
// var one word = "JavaScript is one word.";
// var learning-js = "I'm excited to learn JavaScript";
// var this = "var is a Javascript keyword, along with several other words.";

// console.log($sentence);
// console.log(one word);
// console.log(learning-js);
// console.log(this);

// var name = 'Patrick'
//
// console.log(name, name, name);

// var num = 2;
// var num2 = 3;
//
// console.log(num * num2);
//
// console.log(num / num2);
//
// console.log(num + num2);

// var car = "my car broke ";
// var broken = "broke down ";
// var afterboken = "I fixed ";
// var part = "yesterday ";
// var present = "today ";
//
//
// console.log(car + broken + afterboken + part + present);


// var veg = ['cabbage', 'carrot', 'rubarb', 'onion', 'beets'];
//
// var numbers = [1, 2, 3];
//
// var empty = [];
//
// console.log(veg);
// console.log(numbers);
// console.log(empty);
//
// console.log(veg.length);
// console.log(numbers.length);
// console.log(empty.length);
//
// console.log(veg[2]);
//
// var trees = ['pine', 'citrus', 'hemlock'];
//
// trees[3] = 'cherry';
//
// console.log(trees);

// function divide(number) {
//   return number / 2;
// }
//
// var result = divide(24);
//
// console.log(result);


// function sentence(string1, string2){
//   return string1 + string2;
// }
//
// var speech = sentence("Hello ", "world")
//
// console.log(speech);


// function difference(a, b) {
//   return a - b;
// }
//
// var result = difference(5, 8);
//
// console.log(result);

// assignments

// 1.
// function addNumbers(numberA, numberB) {
//     return numberA + numberB;
//  }
//
//  var twoPlusTwo = addNumbers(2, 2);
//
//  console.log(twoPlusTwo);

 // 2.

//  function yell(string){
//    return string.toUpperCase();
//  }
// var upper = yell('I had fun!');
//
// console.log(upper);
//
// function yell10(yell){
//   for (var i = 0; i < 10; i++) {
//     console.log('------');
//     console.log(yell);
//   }
// }
//
// yell10(yell('Hello'));

// 3.
// function compareLengths(a, b){
//   if (a.length > b.length) {
//     console.log(a + ' Is greater.');
//   }
//   else {
//     console.log(b + ' Is greater.');
//   }
// }
//
// compareLengths('Testing', 'this');

// 4.
// function isVowel(char) {
//   char.toUpperCase();
//
//   if (char === 'A' || char === 'E' || char === 'I' || char === 'O'  || char === 'U') {
//     return true;
//   }
//
//   return false;
// }
//
// console.log(isVowel('F'));

var changeButton = document.querySelector('#change');
var span = document.querySelector('#increase');
var body  = document.querySelector('body');

changeButton.addEventListener('click',logSpan);

function logSpan() {
  var number = parseInt(span.innerText);
  var  button = document.querySelector('#change');
  number += 1;

  span.innerText = number;

  changeButton.textContent = 'Add To Cart';

  setTimeout(function(){
    changeButton.textContent = 'Buy Now!';

    console.log('Done!');
  }, 3000);
}

document.querySelector('#details').addEventListener('click', function() {
  var fit = document.querySelector('.fit');
  var reviews = document.querySelector('.reviews');
  var details = document.querySelector('.details');

  fit.style.display = 'none';
  reviews.style.display = 'none';
  details.style.display = 'block';

});

document.querySelector('#fit').addEventListener('click', function() {
  var details = document.querySelector('.details');
  var reviews = document.querySelector('.reviews');
  var fit = document.querySelector('.fit');

  details.style.display = 'none';
  reviews.style.display = 'none';
  fit.style.display = 'block';
});

document.querySelector('#rating').addEventListener('click', function() {
  var details = document.querySelector('.details');
  var fit = document.querySelector('.fit');
  var reviews = document.querySelector('.reviews');

  details.style.display = 'none';
  fit.style.display = 'none';
  reviews.style.display = 'block';
});
