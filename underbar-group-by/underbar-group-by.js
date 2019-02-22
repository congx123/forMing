var _ = {};


/*
  groupBy(collection, iteratee)

  Splits a collection into sets, grouped by the result of running each
  value through iteratee. If iteratee is a string instead of a function,
  groups by the property named by iteratee on each of the values.

  You DO NOT have access to the other underscore methods. If you need a function you must write it.

  
  Example:
    var numbers = [1.3, 2.1, 2.4];
    var roundDown = function(num) {
      return Math.floor(num);
    }
    _.groupBy(numbers, roundDown) // returns { 1: [1.3], 2: [2.1, 2.4] }

  var animals = ['cat', 'hat', 'horse'];

  _.groupBy(animals, 'length') // returns { 3: ['cat', 'hat'], 5: ['horse'] }
    
 */


  
_.groupBy = function(collection, iteratee) {
  // Your code here.
    //new answer
    var newObj = {};

    for (var i = 0; i < collection.length; i++){
      if (typeof iteratee === "function"){
        if(!newObj.hasOwnProperty(iteratee(collection[i]))){
          newObj[iteratee(collection[i])] = [collection[i]];
        } else {
          newObj[iteratee(collection[i])].push(collection[i])
        }
      }
    }
    
    return newObj;
};

    //old answer
    // var emptyObj = {};

    // for (var i = 0; i < collection.length; i++){
    //   var numProperty = (iteratee(collection[i]))
    //   emptyObj.numProperty = collection[i];
    // }
    
    // return emptyObj;

