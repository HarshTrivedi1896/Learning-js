/* const name = "harsh"
const age = 25

console.log(`My name is ${name} and I am ${age} years old.`);

const chocolate =  new String("chocolate")
// c -> 0, h -> 1, o -> 2, c -> 3, o -> 4, l -> 5, a -> 6, t -> 7, e -> 8
console.log(chocolate[3]);
console.log(chocolate.charAt(4));
console.log(chocolate.indexOf('o')); 

console.log(chocolate.toUpperCase()); // output: CHOCOLATE
// but that doesn't change the original string, because strings are stored in stack memory
 */

const name = "harsh-stephen-hanus      -hello- "
const names2 = "        hanus      "
const names = name.split("-")
console.log(names2.trim());
console.log(names);

//    Strings methods

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String