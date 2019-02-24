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

let tempData ={data:"Value not set"};
var makeFetchAndSet = function() {
    // returns a function that takes a parameter
    return function(arg){
        // set the tempData.data to possible outputs, input takes 1st priority, existing data 2nd
        (function(input){
            this.data = input || this.data 
        }).call(tempData,arg);

        // if no input was given and there is something in the tempData.data then this is getter
        if(!arg && tempData.data){
            return tempData.data;
        }else{
            return `Setting new value to ${arg}`;
        }
    }

    
    
}
var fetcherSetter = makeFetchAndSet();
console.log(fetcherSetter()) // returns 'Value not set' // GETTGER
console.log(fetcherSetter()) // returns 'Value not set' // GETTGER
console.log(fetcherSetter('New value')); //SETTER
console.log(fetcherSetter()); // returns 'New value' //GETTER
console.log(fetcherSetter(100)); //SETTER
console.log(fetcherSetter()); //GETTER
console.log(fetcherSetter()); //GETTER
