// Default value for Kelvin
const kelvin = 0;

// Default value of celsius
const celsius = kelvin - 273;

// Default value of Farenheit ; Changing variable
let fahrenheit = celsius * (9 / 5) + 32;

//To remove decimal number
//fahrenheit = Math.floor(fahrenheit);

let Newton = celsius * (33 / 100);
//round down
Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);
