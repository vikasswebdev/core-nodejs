import { getDb } from "../config/db.js";

export const getProducts = async (req, res) => {
  const db = await getDb();
  const products = await db.collection("products").find({}).toArray();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(products));
};

export const createProduct = async (req, res) => {
  const db = await getDb();
  const product = await db.collection("products").insertOne(req.body);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(product));
};
