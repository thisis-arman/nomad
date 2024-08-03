const { MongoClient, ServerApiVersion } = require("mongodb");
import * as dotenv from "dotenv";
const { ObjectId } = require("mongodb");
import express from "express";
import cors from "cors";
const stripe = require("stripe")(
  "sk_test_51NEOh0J6vP03PB2IYLUQMU3ol2sM8jIvCuIY7rCh7saHtgifFFFBbZxLnRtzeOByCxL7oPhtWnxnXhaSMXFWOaBc00FH0XMu1u"
);

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

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
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");
    const productsCollection = client.db("nomad").collection("products");
    app.get("/products", async (req, res) => {
      const query = req.query.search;
      console.log("Query:", query);

      try {
        let result;
        if (query) {
          // Check if collection has text index
          const indexes = await productsCollection.indexes();
          console.log("Indexes:", indexes);

          // Perform text search
          result = await productsCollection
            .aggregate([
              {
                $match: {
                  $or: [
                    { productName: { $regex: query, $options: "i" } }, // Case-insensitive
                    { description: { $regex: query, $options: "i" } }, // Case-insensitive
                  ],
                },
              },
            ])
            .toArray();
        } else {
          result = await productsCollection.find().toArray();
        }
        console.log("Result:", result);
        res.json({
          success: true,
          message: "Products retrieved successfully",
          data: result,
        });
      } catch (error: any) {
        console.error("Error retrieving products:", error);
        res.status(500).json({
          success: false,
          message: "Error retrieving products",
          error: error.message,
        });
      }
    });

    app.get("/get-products", async (req, res) => {
      const result = await productsCollection.find().toArray();
      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: result,
      });
    });

    app.get("/get-products/:category", async (req, res) => {
      const query = req.params.category;
      const result = await productsCollection
        .aggregate([{ $match: { category: query } }])
        .toArray();
      res.json({
        success: true,
        message: "Products retrieved successfully",
        data: result,
      });
    });

    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      console.log({ id });

      // Validate the MongoDB ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid product ID format",
        });
      }

      try {
        const objectId = new ObjectId(id);
        const result = await productsCollection.findOne({ _id: objectId });

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "Product not found",
          });
        }

        res.json({
          success: true,
          message: "Product retrieved successfully",
          data: result,
        });
      } catch (error) {
        console.error("Error retrieving product:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while retrieving the product",
        });
      }
    });

    app.get("/product-by-category", async (req, res) => {
      const query = req.query;
      console.log("category => ", query);
      if (query) {
        const result = await productsCollection
          .aggregate([{ $match: { category: query.category } }])
          .toArray();
        res.json({
          success: true,
          message: "Product retrieved successfully",
          data: result,
        });
      }
    });


  app.post("/products/add-product", async (req, res) => {
    try {
      
      const productInfo = req.body; 
      const result = await productsCollection.insertOne(productInfo); 

      res.json({
        success: true,
        message: "Product added successfully",
        data: result,
      });
    } catch (error:any) {
      res.status(500).json({
        success: false,
        message: "An error occurred while adding the product",
        error: error.message,
      });
    }
  });
    
 app.post("/products/:_id", async (req, res) => {
   // Use DELETE method
   try {
     const _id = req.params._id;
     console.log(_id);
     const result = await productsCollection.deleteOne({
       _id: new ObjectId(_id),
     }); 
     if (result.deletedCount === 1) {
       res.json({
         success: true,
         message: "Product has been deleted",
         data: result,
       });
     } else {
       res.status(404).json({
         success: false,
         message: "Product not found",
       });
     }
   } catch (error:any) {
     res.status(500).json({
       success: false,
       message: "An error occurred while deleting the product",
       error: error.message,
     });
   }
 });

    // PAYMENT

    app.post("/create-payment-intent", async (req, res) => {
      const { amount } = req.body;
      const amountInCents = amount * 100;

      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amountInCents, // Amount in cents
          currency: "usd",
        });

        res.status(200).send({
          clientSecret: paymentIntent.client_secret,
        });
      } catch (error: any) {
        res.status(500).send({ error: error.message });
      }
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








