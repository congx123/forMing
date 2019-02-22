/*
  makeFetchAndSet should return a function that is a getter setter.
  When the getter/setter is invoked with a single argument, it should set
  the value. When the getter/setter is invoked without any arguments,
  it should return the previously set value.
  If no value has been set then return 'Value not set'

  Example:

  var fetcherSetter = makeFetchAndSet();
  fetcherSetter() // returns 'Value not set'
  fetcherSetter('New value')
  fetcherSetter() // returns 'New value'
  fetcherSetter(100)
  fetcherSetter() // returns 100

*/


var makeFetchAndSet = function() {
  
    //new answer
    return function(){
    if (arguments.length < 1){
      return "Value not set"
    } else {
      return arguments[0]
    }
  }


  //old answer
  // if (arguments === "New Value"){
  //   return "New value";
  // } else if (arguments.length === 0){
  //   return "New Value" 
  // } else if (arguments === undefined){
  //   return "Value not set"
  // }
};
