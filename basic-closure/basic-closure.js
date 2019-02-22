/**
 * Complete the function `makeIncrementer`.
 *
 * It accepts a number as its only argument, `x` and returns a function that,
 * when invoked, should increment `x` by 1 and return the new `x` value.
 * Your function will be tested by passing in a single integer as the only argument.
 *
 * var incrementer = makeIncrementer(4);
 *
 * incrementer() // -> 5
 * incrementer() // -> 6
 * incrementer() // -> 7
 */

var makeIncrementer = function(x) {
  // YOUR CODE HERE

  //new answer
  return function(){
  	return x += 1
  }

  //old answer
  // var newFunction = function(){
  // 	return incrementer = x + 1;
  // }

};
