import {sum,diff} from './lib.js';

// const lib=require('./lib.js');
// lib is a object

const a=10;
const b=20;

function dif(a=0,b=0)
{
  return a-b;
}

console.log("Hello From NodeJs");

console.log(dif(a,b));
// console.log(lib.sum(a,b))
// console.log(sum(a,b));


console.log(`sum of 50, 55 is : ${sum(50,55)} and differnce is ${diff(50,55)}`);