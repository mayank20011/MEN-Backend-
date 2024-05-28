import * as fs from "node:fs";
const jsondata = JSON.parse(fs.readFileSync("Dummydata.json", "utf-8"));
const users = jsondata.users;

// lets create rest api's

// POST Get /product
export function create(req, res) {
  users.push(req.body);
  res.status(201);
  res.json(users);
}

// READ Get /products

export function readall(req, res) {
  res.status(200).json(users);
}

// Read Get /product/:id

export function read(req, res) {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  if (userindex === -1) {
    res.send(`<h1>No Such Product in Database</h1>`);
  } else {
    res.status(200).json(users[userindex]);
  }
}

// Update put /product/:id
export function update(req, res) {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  if (userindex === -1) {
    res.send(`<h1>No Such Product with id:${id}</h1>`);
  } else {
    users.splice(userindex, 1, { ...req.body });
    res.json(users);
  }
}

// change patch /product/:id
export function change(req, res) {
  const id = +req.params.id;
  const userundex = users.findIndex((p) => p.id === id);
  if (userundex === -1) {
    res.send(`<h1>No Such Product</h1>`);
  } else {
    const user = users[userundex];
    users.splice(userundex, 1, { ...user, ...req.body });
    res.status(200).json(users);
  }
}

// Delete delete /product/:id

export function deletee(req, res) {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  if (userindex === -1) {
    res.send(`<h1>No product find with id:${id}</h1>`);
  } else {
    users.splice(userindex, 1);
    res.status(200).json(users);
  }
}
