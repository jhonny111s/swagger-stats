const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const swStats = require('swagger-stats');    

// Load your swagger specification 
const apiSpec = require('./swagger.json');

// Enable swagger-stats middleware in express app, passing swagger specification as option 
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/user", (req, res) => {
  res.status(200).send({ message: 'Get all'});
});

app.post("/user", (req, res) => {
  if (!Object.keys(req.body).length) return res.status(400).send('Missed body');
  res.status(201).send(JSON.stringify(req.body, null, 2));
});

app.put("/user/:id", (req, res) => {
  if (isNaN(req.params['id'])) return res.status(400).send('Id should be a number');
  setTimeout(() => {
    res.status(200).send(req.body);
  }, 1000);
});

app.delete("/user/:id", (req, res, next) => {
  if (isNaN(req.params['id'])) return res.status(400).send('Id should be a number');
  res.status(204).send();
});

app.get("/user/error", (req, res, next) => {
  try {
    throw new Error("Something broke...");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});