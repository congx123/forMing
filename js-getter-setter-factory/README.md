## JS Basics
- [ ] Write a factory function.
- [ ] It should return a function that stores a single value, like so:
- [ ] When called with one argument, it should store and return the passed value: `fetcherSetter(5) // stores 5`.
- [ ] When called with no arguments, it should return the stored value, or 'Value not set' if not initialized: `fetcherSetter() // returns 5`.

  makeFetchAndSet should return a function that is a getter setter.
  When the getter/setter is invoked with a single argument, it should set
  the value. When the getter/setter is invoked without any arguments,
  it should return the previously set value.
  If no value has been set then return 'Value not set'

```javascript


  Example:

  var fetcherSetter = makeFetchAndSet();
  fetcherSetter() // returns 'Value not set'
  fetcherSetter('New value')
  fetcherSetter() // returns 'New value'
  fetcherSetter(100)
  fetcherSetter() // returns 100
```

### Available Resources for this Prompt
  * MDN
