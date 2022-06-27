const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/final-project")
  .then(() => console.log("db created"))
  .catch(() => console.log("db not ccreated"));

const app = express();


app.listen(3000, () => console.log('listening on port 3000 ...'));