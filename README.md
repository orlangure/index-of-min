# index-of-min
 Finds the minimum value or an object with the min property in an array

## Example

```js
const indexOfMin = require('index-of-min');

const arrayOfValues = [3, 2, 1];
console.log(indexOfMin(arrayOfValues));
// 2

const arrayOfObjects = [{a: 3}, {a: 2}, {a: 1}];
console.log(indexOfMin(arrayOfObjects, 'a'));
// 2
```