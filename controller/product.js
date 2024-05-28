import * as fs from 'node:fs';

const jsondata=JSON.parse(fs.readFileSync('Dummydata.json','utf-8'));
const products=jsondata.products;

// CRUD

export function createProduct(req,res)
{
   products.push(req.body);
   res.json(products);
}

export function allProducts(req,res)
{
  res.json(products);
}

export function product(req,res)
{
  const id= +req.params.id;
  const product= products.find(p=>p.id===id);
  res.json(product);
}

export function changeProduct(req,res)
{
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  products.splice(productIndex,1,{id:id, ...req.body});
  res.json(products);
}

export function updateProduct(req, res)
{
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  const product=products[productIndex];
  products.splice(productIndex,1,{...product,...req.body});
  res.json(products);
}

export function deleteProduct(req,res)
{
  const id=+req.params.id;
  const productIndex=products.findIndex(p=>p.id===id);
  products.splice(productIndex,1);
  res.json(products);
}