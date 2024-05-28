import * as fs from "node:fs";
const jsondata = JSON.parse(fs.readFileSync("Dummydata.json", "utf-8"));
const products = jsondata.products;

// lets create rest api's

// POST Get /product
export function create(req, res) {
  products.push(req.body);
  res.status(201);
  res.json(products);
}

// READ Get /products

export function readall(req, res) {
  res.status(200).json(products);
}

// Read Get /product/:id

export function read(req, res) {
  const id = +req.params.id;
  const productindex = products.findIndex((p) => p.id === id);
  if (productindex === -1) {
    res.send(`<h1>No Such Product in Database</h1>`);
  } else {
    res.status(200).json(products[productindex]);
  }
}

// Update put /product/:id
export function update(req, res) {
  const id = +req.params.id;
  const productindex = products.findIndex((p) => p.id === id);
  if (productindex === -1) {
    res.send(`<h1>No Such Product with id:${id}</h1>`);
  } else {
    products.splice(productindex, 1, { ...req.body });
    res.json(products);
  }
}

// change patch /product/:id
export function change(req, res) {
  const id = +req.params.id;
  const productindex = products.findIndex((p) => p.id === id);
  if (productindex === -1) {
    res.send(`<h1>No Such Product</h1>`);
  } else {
    const product = products[productindex];
    products.splice(productindex, 1, { ...product, ...req.body });
    res.status(200).json(products);
  }
}

// Delete delete /product/:id

export function deletee(req, res) {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    res.send(`<h1>No product find with id:${id}</h1>`);
  } else {
    products.splice(productIndex, 1);
    res.status(200).json(products);
  }
}
