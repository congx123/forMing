/**
 Complete the function `getNumericValues`.
 It takes a single argument, and an object containing nested objects of any depth.
 It returns all of the values of the objects that are numbers.
 Your function will only be tested with objects that have strings, numbers, or other objects as properties.
 var exampleNestedObject = {
    name: 'Dan',
    age: 99,
    home: {
      roommates: 2,
      address: {
        number: 13,
        city: 'Oakland',
        zip: 94618
      }
    }
  }
 getNumericValues(exampleNestedObject); // returns [99, 2, 13, 94618]
 */

var getNumericValues = function (object) {
  // YOUR CODE HERE
  //pseudocode
  //find all of the numerical values for each property
  //use for loop, typeof = "number"
  //for nested objects, use typeof = "object" to look into the value of each property
  //then use recursion to look inside each nested object(value) - object[property] again

  //new answer
  var newArray = [];

 for (var property in object){
     if(typeof object[property] === "number"){
        newArray.push(object[property])
      } else if (typeof object[property] === "object"){
        return newArray.concat(getNumericValues(object[property]))
      }
  }
  return newArray;


  //old answer
  // var newArray = [];
  // for (var i = 0; i < valuesOnly.length; i++){
  //   if (typeof valuesOnly[i] === 'number'){
  //     newArray.push(valuesOnly[i])
  //   }
  // }
  
  // var valuesOnly2 = Object.values(valuesOnly);
};