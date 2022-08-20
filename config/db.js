// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";

const dbName = "test";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url, { useNewUrlParser: true });

const connect = async () => {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  }
};

export const getDb = async () => {
  await connect();
  return client.db(dbName);
};

export default connect;
