import * as http from 'node:http';
import * as fs from 'node:fs';

const indexfile=fs.readFileSync('index.html','utf16le').trim();

const server=http.createServer((req,res)=>
{
  res.setHeader('Content-Type','text/html');
  res.end(indexfile.replace('**Helloworld**',"Hello Mayank"));

});
server.listen(8080);