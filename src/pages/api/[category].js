import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const productsCollection = client
      .db("pc_components")
      .collection("components");

    if (req.method === "GET") {
      const categoryRegex = new RegExp(req.query.build, "i");

      const products = await productsCollection
        .find({ category: categoryRegex })
        .toArray();

      res.send({
        message: "success",
        status: 200,
        data: products,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({
      message: "Internal server error.",
      error: error.message,
    });
  } finally {
    // Ensure you close the client connection after using it
    await client.close();
  }
}

export default run;
