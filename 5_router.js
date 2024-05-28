import express from "express";
import productrouter from "./routes/productroutes.js";
import userroutes from "./routes/userroutes.js";
const server=express();

server.use(express.json());

//  thats how we use to set routes on appplication level but it is not considerd good lets create roter for product 
// server.post('/product',createProduct);
// server.get('/products',readProducts);
// server.get('/product/:id',readProduct);
// server.put('/product/:id',updateProduct);
// server.patch('/product/:id',changeProduct);
// server.delete('/product/:id',deleteproduct);
// we can also do chaining here too in server.requestmethode(route,function)



// const productrouter=express.Router();

server.use('/products',productrouter);  
server.use('/users',userroutes);


server.listen(8080,()=>
{
  console.log("Server Started");
});