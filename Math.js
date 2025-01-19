/* const x=700
console.log(x);

const y= new Number(1000) 
console.log(y);

console.log(y.valueOf());
console.log(y.toString());
console.log(y.toString().length);
console.log(y.toFixed(2)); // 1000.00

console.log(y.toExponential(2)); // 1.00e+3

const k = 123456.7;

console.log(k.toPrecision(7)); // 123456.8
console.log(k.toPrecision(6)); // 123457
console.log(k.toPrecision(5)); // 1.2346e+5 */

// +++++++++++++++++++++++

/* console.log(Math);

console.log(Math.PI);
console.log(Math.random());

console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.1));
console.log(Math.abs(-4.1));
console.log(Math.min(4.1, -4.1));
console.log(Math.max(4.1, -4.1));
console.log(Math.pow(4, 2));
 */
/* console.log(Math.floor((Math.random() * 10) + 1));

const max = 4.7;
const min = 4.1;

const x = ((Math.random() * (Math.round(max) - Math.round(min) + 1)) + (min - max))
console.log(x);
/* 
const y = (Math.random() * (Math.round(max) - Math.round(min) + 1)) // + (min - max)
/* console.log(y.toPrecision(y, 2)); // 4.1
 */
/* console.log(y);  */

// TRYING AGAIN 

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min; // Scale and shift
}

function printRandomNumbersInRange(count) {
    const min = 4.1;
    const max = 4.7;

    for (let i = 0; i < count; i++) {
        const randomNumber = getRandomInRange(min, max);
        if (randomNumber >= min && randomNumber <= max) {
            console.log(randomNumber.toFixed(2)); 
        }
    }
}


printRandomNumbersInRange(20);
