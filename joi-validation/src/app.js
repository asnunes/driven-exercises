const express = require("express");
const joi = require("joi");
const products = require("./products");

const app = express();
app.use(express.json());

let currentId = 1;

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.sendStatus(404);
  }

  res.send(product);
});

app.post("/products", (req, res) => {
  // aqui os conteúdos são adicionados. Valide os dados no body usando Joi
  const schema = joi.object({
    name: joi.string().min(10).required(),
    description: joi.string().required(),
    categories: joi.array().items(joi.number()).required(),
    price: joi.number().positive().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.sendStatus(422);

  const { body } = req;

  products.push({
    ...body,
    id: currentId,
  });

  currentId++;

  res.sendStatus(201);
});

app.put("/products/:id", (req, res) => {
  // aqui os conteúdos são atualizados. Valide os dados no body usando Joi
  const schema = joi.object({
    name: joi.string().min(10),
    description: joi.string(),
    categories: joi.array().items(joi.number()),
    price: joi.number().positive(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.sendStatus(422);

  const { id } = req.params;
  const { body } = req;
  const index = products.findIndex((p) => p.id === parseInt(id));

  if (index === -1) {
    return res.sendStatus(404);
  }

  const oldProduct = products[index];
  products[index] = {
    id: oldProduct.id,
    name: body.name || oldProduct.name,
    description: body.description || oldProduct.description,
    categories: body.categories || oldProduct.categories,
    price: body.price || oldProduct.price,
  };

  res.sendStatus(200);
});

module.exports = app;
