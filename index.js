import * as express from 'express';
import * as fs from 'node:fs';

const data=JSON.parse(fs.readFileSync('Dummydata.json','utf16le'));
console.log(data);

