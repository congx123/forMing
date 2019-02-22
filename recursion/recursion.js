/*
  Complete the function `clone`.

  clone takes an array and performs a deep clone of the input array,
  regardless of how many nested levels are in the input array.

  var array1 = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ];
  var array2 = clone(array1);
  console.log(array2); //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
  array1 === array2 // false (cloned, not pointed at)

*/


var clone = function(array) {
  // Your code here.
  
  //new answer
  if (array.length < 1){
    return []
  } else {
    return array[0].concat(clone(array.slice(1)))
  }



  //old answer
  // var array = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ];
  // var array2 = clone(array1);
  // console.log(array2); //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
  // array1 === array2 // false (cloned, not pointed at)
  
  // if (array1.length <= 0){
  // 	return 0;
  // } else {
  // 	clone()
  // }


