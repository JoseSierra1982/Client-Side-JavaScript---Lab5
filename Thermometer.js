// Returning a given temperature in Celcious
//Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.For bonus points, write it as a one line arrow function
//The formula for Fahrenheit to Celsius is `(F - 32) * 5 / 9`.
let fahrenheit;
function getCelsius(fahrenheit) 
{
    let converted;
    converted = (fahrenheit - 32)*5/9;
    return converted;
}
console.log(`The temperature is ${getCelsius(32)} \xB0C`);