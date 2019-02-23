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
    if(typeof(iteratee) == "function"){
      for(item of collection){
        newObj.hasOwnProperty(iteratee(item))?newObj[iteratee(item)].push(item):newObj[iteratee(item)]=[item];
      }
    }else if(typeof(iteratee) == "string"){
      for(item of collection){
        newObj.hasOwnProperty(item[iteratee])?newObj[item[iteratee]].push(item):newObj[item[iteratee]]=[item];
      }
    }
    
    return newObj;
};

var numbers = [1.3, 2.1, 2.4];
var roundDown = function(num) {
  return Math.floor(num);
}
console.log(_.groupBy(numbers, roundDown) )// returns { 1: [1.3], 2: [2.1, 2.4] }


// case with string
var animals = ['cat', 'hat', 'horse'];
console.log(_.groupBy(animals, 'length')); // returns { 3: ['cat', 'hat'], 5: ['horse'] }


