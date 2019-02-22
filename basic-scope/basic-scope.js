/*
 * `solutionReturningFunction` currently returns an array of elements, but only some of them will be defined at runtime.
 * Remove elements from the returned array that are undefined when outerFunction is invoked.
 *
 * Do NOT modify this file except for removing elements from the
 * array `solutionReturningFunction` returns.
 */

var outerFunction = function() {
  var eight = function eight(eight) {
    return 'eight';
  }();

  var aFunction = function () {
    var one = 'one';

    var anInnerFunction = function () {
      var two = 'two';
      return one;
    };

    return anInnerFunction;
  };

  var anotherFunction = function () {
    var three = 'three';

    var anotherInnerFunction = function () {
      var four = 'four';
      return four;
    };

    var yetAnotherInnerFunction = function () {
      return four;
    };

    return yetAnotherInnerFunction;
  };

  var five = 'five';

  var solutionReturningFunction = function () {
    var six = aFunction();
    var seven = anotherFunction();

    // Remove elements from this array that are undefined when outerFunction is invoked
    
    //new
    return [five, six(), eight]

    //old
    // return [one, four, eight];

    //original
    // return [one, two , three, four, five, six(), seven(), eight]
  };



  var solution = solutionReturningFunction();

  return solution;
};