var generateName = require('sillyname');
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

const superheroes = require('superheroes');
const name = superheroes.random();
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();
//=> 'Spider-Ham'
console.log(`My name is ${name}`);