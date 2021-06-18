const app = require("../../src/app");
const request = require("supertest");
const fs = require("fs");
const path = require("path");

const server = request(app);

describe("GET /posts", () => {
  it("should respond with status 200", async () => {
    const res = await server.get("/posts").send();

    expect(res.status).toBe(200);
  });

  it("should respond with 10 posts if no query string was provided", async () => {
    const res = await server.get("/posts").send();

    expect(res.body?.length).toBe(10);
  });

  it("should respond with 5 posts if query string with limit=5 was provided", async () => {
    const res = await server.get("/posts?limit=5").send();

    expect(res.body?.length).toBe(5);
  });

  it("should respond with first 5 posts if query string with limit=5 was provided", async () => {
    const postsPath = path.resolve(__dirname, "../../src/data/posts.json");
    const posts = JSON.parse(fs.readFileSync(postsPath));
    const first5Posts = posts.slice(0, 5);

    const res = await server.get("/posts?limit=5").send();

    expect(res.body).toEqual(first5Posts);
  });
});
