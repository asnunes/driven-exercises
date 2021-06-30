const app = require("../../src/app");
const request = require("supertest");
const products = require("../../src/products");

const server = request(app);

describe("POST /products", () => {
  function generateValidBody() {
    return {
      name: "Nome do produto",
      description: "descricao do produto",
      categories: [1, 2, 3, 4],
      price: 10.97,
    };
  }

  it("deveria responder com 422 quando não há um nome no body", async () => {
    const body = generateValidBody();
    delete body.name;

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando não há uma description no body", async () => {
    const body = generateValidBody();
    delete body.description;

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando não há categories no body", async () => {
    const body = generateValidBody();
    delete body.categories;

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando não um price no body", async () => {
    const body = generateValidBody();
    delete body.price;

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando name tem menos de 10 caracteres", async () => {
    const body = generateValidBody();
    body.name = "ola";

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando categories não é uma array de números", async () => {
    const body = generateValidBody();
    body.categories = "ola";

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando price não é um float", async () => {
    const body = generateValidBody();
    body.price = "ola";

    const res = await server.post("/products").send(body);

    expect(res.status).toBe(422);
  });
});

describe("PUT /products/:id", () => {
  function generateValidBody() {
    return {
      name: "Nome do produto",
      description: "descricao do produto",
      categories: [1, 2, 3, 4],
      price: 10.97,
    };
  }

  beforeEach(() => {
    products.splice(0);
    products.push({
      id: 1,
      name: "Nome do produto",
      description: "descricao do produto",
      categories: [1, 2, 3, 4],
      price: 10.97,
    });
  });

  it("deveria responder com 422 quando name tem menos de 10 caracteres", async () => {
    const body = generateValidBody();
    body.name = "ola";

    const res = await server.put("/products/1").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando categories não é uma array de números", async () => {
    const body = generateValidBody();
    body.categories = "ola";

    const res = await server.put("/products/1").send(body);

    expect(res.status).toBe(422);
  });

  it("deveria responder com 422 quando price não é um float", async () => {
    const body = generateValidBody();
    body.price = "ola";

    const res = await server.put("/products/1").send(body);

    expect(res.status).toBe(422);
  });
});
