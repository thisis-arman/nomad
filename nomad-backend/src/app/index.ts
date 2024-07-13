const { MongoClient, ServerApiVersion } = require("mongodb");
import * as dotenv from "dotenv";
import express from "express";
const port = process.env.PORT || 5000;
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const uri = process.env.DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();

    const productsCollection = client.db("nomad").collection("products");

    app.get("/products", async (req, res) => {
      const query = req.query;
      const result = await productsCollection.aggregate().toArray();
      console.log(result);
      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: result,
      });
    });

    // Send a ping to confirm a successful connection
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
