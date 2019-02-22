## basic-recursion

- [ ] Follow the directions inside `basic-recursion.js` and complete the function `getNumericValues`
- [ ]   Complete the function `getNumericValues`.
- [ ] It takes a single argument, an object containing nested objects of any depth.
- [ ] It returns all of the values of the objects that are numeric.
- [ ] Your function will only be tested with objects that have strings, numbers, or other objects as properties.
```javascript
        var exampleNestedObject = {
          name: 'Tolstoy',
          age: 99,
          home: {
            roommates: 2,
            address: {
              street: 'discombobulated',
              number: 13,
              city: 'stilton',
              zip: 94618
            }
          }
        }

       getNumericValues(exampleNestedObject); // returns [99, 2, 13, 94618]
```
### Available Resources for this Prompt
  * MDN
