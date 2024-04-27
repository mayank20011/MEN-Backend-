import {sum,diff,product} from './lib.js';
import express from 'express';

let a=[1,2,3,4,5,6,7,8,9,10];

console.log(`sum of Each Element from Array is: ${sum(...a)} and product is : ${product(...a)} and difference is: ${diff(...a)}`);

console.log('Hello, Whaat is your name?');
const server=express();
server.listen(3000);

var [filepath, nodepath, ...commandlinearguments]=process.argv;
const newarray=commandlinearguments.map((a)=>
{
  return parseInt(a);
});

console.log(sum(...newarray));