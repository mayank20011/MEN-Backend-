import * as http from 'node:http';
import * as fs from 'node:fs';

const indexfile=fs.readFileSync('index.html','utf16le');
const jsondata=fs.readFileSync('Dummydata.json','utf16le');

const jsondatastring=jsondata.toString();
// console.log(indexstring);
const server=http.createServer((req,res)=>
{
  res.end(`<h1>${jsondatastring}</h1>`);

});
server.listen(8080);