import http from "http";
import connect from "./config/db.js";
import { createProduct, getProducts } from "./controllers/productController.js";
const hostname = "127.0.0.1";
const port = 3002;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

connect();

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
