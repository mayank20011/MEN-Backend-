// This is How We used to make webserver using nodejs
import * as http from 'node:http';
import * as fs from 'node:fs';

let data=JSON.parse(fs.readFileSync('Dummydata.json','utf16le').trim());
let indexfile=fs.readFileSync('index.html','utf16le').trim();

const server=http.createServer((req,res)=>
{
  const url=req.url;
  if(url.startsWith('/products/'))
  {
    const index=url.split('/')[2];
    if(index>=1 && index<=30)
    {
      res.setHeader('Content-Type','application/json')
      res.end(JSON.stringify(data.products[index-1]));
    }
    else
    {
      res.setHeader('Content-Type','text/html');
      res.end(`<h1>There are only 30 Products</h1>`);
    }
    
    return ;
  }
  switch(req.url)
  {
    case '/':
      res.setHeader('Content-Type','text/html');
      indexfile=indexfile.replace('**Helloworld**',`Hello Mayank, How are you Today?`);
      res.end(indexfile);
      break;

    case '/products':
      res.setHeader('Content-Type','application/json');
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(8080);