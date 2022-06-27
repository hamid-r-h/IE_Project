const express = require('express');
const mongoose = require('mongoose');
const signup = require('./auth/signup');
require("dotenv").config({ path: "./.env" });

mongoose
  .connect("mongodb://localhost:27017/final-project")
  .then(() => console.log("db created"))
  .catch(() => console.log("db not ccreated"));

const app = express();
app.use(express.json());

app.post('/api/auth/signup', signup);

app.listen(9000, () => console.log('listening on port 9000 ...'));