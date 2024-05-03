// to do server side rendering, will modify index.html using nodejs
import * as fs from 'node:fs';
import * as http from 'node:http';
const indexfile=fs.readFileSync('index.html','utf-8');
const data=fs.readFileSync('Dummydata.json','utf-8');
console.log(indexfile);
const server=http.createServer((req,res)=>
{
  if(req.url.startsWith('/product'))
  {
    const id =req.url.split('/')[2];
    console.log(id);
    return ;
  }
  
  switch(req.url)
  {
    case '/':
      res.setHeader('Content-Type','text/html');
      res.end(indexfile);
      break;
    
    case '/api':
      res.setHeader('Content-Type','application/json');
      res.end(data);
      break;
      
    // case '/product':
    //   res.setHeader('Content-Type','text/html');
    //   const parseddata=JSON.parse(data);
    //   const title=parseddata[0].title;
    //   indexfile=indexfile.replace('**html**',title);
    //   res.end(indexfile);
    //   break;

    default:
     res.writeHead(404);
     res.end();
  }
});
server.listen(8080);