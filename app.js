//    Forcast today is 293. This value will stay constant. 
const kelvin = [293, 63, 785, 45.5, 632.54, 97.9];

// //   The temperature of Kelvin is approximately 273 degrees less than kelvin
// let celsius = kelvin - 273;

// //    The temperature of fahrenheit is Celsius multiplied by the remainder of 9 divided by 5 plus 32
// let fahrenheit = celsius * (9/5) + 32;

// //    Rounding the number
// fahrenheit = Math.round(fahrenheit);

// //     Flooring the number
// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


//  I used the higher order For Each function to get the values out of the kelvin temperature array I created. I just took the steps provided in the directions and threw themn into the function. 
kelvin.forEach((num) => {
    let celsius = num - 273;
    let fahrenheit = celsius * (9/5) + 32;
    fahrenheit = Math.round(fahrenheit);
    fahrenheit = Math.floor(fahrenheit);
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
})

// For seperation in console
console.log('*******************************FAHRENHEIT**********************************************')
console.log('*********************************NEWTON********************************************')

//  Newton to Celsius

const celius = [152, 34, 988.36, 635, 1, 87];

celius.forEach((num) => {
    let newton = num * (33/100);
    newton = Math.floor(newton);
    console.log(`The temperature is ${newton} degrees Newton`);
})





