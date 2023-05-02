const cors = require("cors");
const express = require("express");

const apiMocker = require("connect-api-mocker");

// Express server running on port
const port = 9000;
const app = express();

// To enable CORS
app.use(cors());

// Customized server domain to watch with DBB SubDomain
app.use("/plantae/services", apiMocker("mock-api"));
app.use("*", (req, res) => {
  console.log("HELLOO");
  res.status(404).send({ error: { message: "Incorrect URL hit" } });
});

console.log(`Mock API server is up and running at: http:localhost:${port}`);
app.listen(port);
