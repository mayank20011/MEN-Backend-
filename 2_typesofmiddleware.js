// TYpes of middleware
// 1) application level middleware.
// 2) router level middleware.
// 3) error handling middleware.
// 4) built in middleware.
// 5) third parth middleware.






// 1) application level middleware

import express from "express";
import * as fs from "node:fs";
const jsondata=fs.readFileSync("Dummydata.json",'utf8');
console.log(jsondata);
const server=express();
const auth =(req,res,next)=>
{
    if(req.query.password=='123')
      {
        next();
      }
      else
      {
        res.sendStatus(404);
      }
}

// lets call this middleware
server.use(auth);


server.get('/',(req,res)=>
  {
    res.set('Content-Type','text/html');
    res.send('<h1 style="color:green;">Get Request</h1>');
  });
server.delete('/',(req,res)=>
  {
     res.set('Content-Type','text/html');
     res.send('<h1 style="color:red;">Delete Request</h1>');
  });

  // this auth will work on anykind of request and on every route.


// 2) Route level middleware works only on specific route and and request, eq:- if we want the auth middleware to work if req type is get and url is "/"

server.get('/jsondata',auth,(req,res)=>
  {
      // auth is between '/' and callback fun which means it will work betwwen req and res.
      
      res.set('Content-Type','application/json');
      res.send(jsondata);
  })

server.post('/',(req,res)=>
  {
    // for this application level authentication will run
    res.json({"REQUEST_TYPE":"POST"});
  })



//  if we say methode = get i any form thats how data will go
// https://www.facebook.com/login/device-based/regular/login/?jazoest=2919&lsd=AVrUgyOg-1E&display=&isprivate=&return_session=&skip_api_login=&signed_next=&trynum=1&timezone=-330&lgndim=eyJ3IjoxNTM2LCJoIjo4NjQsImF3IjoxNTM2LCJhaCI6ODE2LCJjIjoyNH0%3D&lgnrnd=023107_p5hK&lgnjs=1715938267&email=dsc&prefill_contact_point=dsc&prefill_source=&prefill_type=contact_point&first_prefill_source=&first_prefill_type=contact_point&had_cp_prefilled=true&had_password_prefilled=false&ab_test_data=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA%2F%2F%2FAAAABAA&encpass=%23PWD_BROWSER%3A5%3A1715938325%3AAfNQANZfDN7olI%2Fe1O6Wd4Ip9iud7PKC48jOfhKdVxJWm05QDgOk%2BTXI6AhfZPOuW22NmrXufOCxgHtjTWSyaj5FPoB0OiIRFp1XJPxy7cbRn%2B21y6MuHUd6%2BKGbTdg3hrJfCBMlSg%3D%3D


// if we say methode=get thats how data will go (hidden) so we always use post
// https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=120&lwc=1348028





  server.listen(8080,()=>
    {
      console.log("Server Started");
    });


    // lets learn about built in middlewares in 2.1_built_in_middleware