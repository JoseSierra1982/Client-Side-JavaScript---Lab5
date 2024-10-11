/*Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.

**Expected Result:**

// On page load
The area of a rectangle with a length of 10 and a width of 5 is 50.

**Hints:**

1.  The area of a rectangle is `length * width`. These should get passed into the IIFE as arguments.
2.  You do not have to return anything from this function, just log to the console.*/
let length;
let width;
(function (length,width){
    console.log('The area of a rectangle with a length of ' + length + ' and a width of ' + width + ' is ' + length*width);
})(5,6);
