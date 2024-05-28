// importing statements
import express from "express";
import productRouter from "./routes/productroutes.js";

// initializing port
const port = process.env.PORT || 8080;


const server = express();

server.use(express.json());
server.use('/',productRouter);


// starting server
server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
