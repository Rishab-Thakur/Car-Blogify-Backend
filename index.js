const express = require("express");
const cors = require("cors");
const { carBlogMetadata } = require("./CarBlogMetaData");

const app = express();
const PORT = 3002;

app.use(cors());

// Endpoint to get all car blog posts
app.get("/api/cars", (req, res) => {
  res.json(carBlogMetadata);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
