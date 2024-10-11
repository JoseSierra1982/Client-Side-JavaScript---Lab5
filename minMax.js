/***Instructions:**
Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.
**Expected Result:**

console.log(minMax([1, 2, 3, 4, 5]));
// { min: 1, max: 5 }

**Hints:**

1.  You can use `Math.min()` and `Math.max()` to get the min and max of a list of numbers.
2.  You can use the Spread `...` operator to spread the values of an array into separate arguments.*/

let min;
let max;
const numbers = [1, 2, 3, 4, 5];

function minMax(numbers) {
    min = Math.min(...numbers);
    max = Math.max(...numbers);

    const result = {
        MIN: min,
        MAX: max,
    };

    return result;
}

const result = minMax(numbers);
console.log('The min value of the array is ' + result.MIN + ' and the max value is ' + result.MAX);
