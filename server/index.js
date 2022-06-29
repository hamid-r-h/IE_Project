const express = require("express");
const mongoose = require("mongoose");
const login = require("./routes/auth/login");
const signup = require("./routes/auth/signup");
require("dotenv").config({ path: "./.env" });
const jwt = require("jsonwebtoken");
const addShop = require("./routes/user/addShop");


mongoose
  .connect("mongodb://localhost:27017/final-project")
  .then(() => console.log("db created"))
  .catch(() => console.log("db not ccreated"));

const app = express();
app.use(express.json());

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == undefined)
    return res.status(400).send({
      error: {
        message: "you dont have access",
      },
    });
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
    if (err)
      return res.status(400).send({
        error: {
          message: "Bad request!",
        },
      });
    req.user = user;
  });

  next();
}

app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);

app.post("/api/user/shop", authenticateToken, addShop)


app.listen(9000, () => console.log("listening on port 9000 ..."));
