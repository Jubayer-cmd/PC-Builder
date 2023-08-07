const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const componentsCollection = client
      .db("pc_components")
      .collection("components");

    if (req.method === "GET") {
      if (req.query.productId) {
        // Fetch a single product detail by product ID
        const productId = req.query.productId;
        const product = await componentsCollection.findOne({
          _id: new ObjectId(productId),
        });

        if (product) {
          res.send({ message: "success", status: 200, data: product });
        } else {
          res.status(404).json({ message: "Product not found", status: 404 });
        }
      } else {
        // Fetch all products
        const data = await componentsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: data });
      }
    }

    if (req.method === "POST") {
      const data = req.body;
      const result = await componentsCollection.insertOne(data);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
