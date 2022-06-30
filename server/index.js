const express = require("express");
const mongoose = require("mongoose");
const login = require("./routes/auth/login");
const signup = require("./routes/auth/signup");
require("dotenv").config({ path: "./.env" });
const jwt = require("jsonwebtoken");
const addShop = require("./routes/user/addShop");
const getProducts = require("./routes/products/getProducts");
const addProduct = require("./routes/user/product/addProduct");
const getReports = require("./routes/user/getReports");
const addReport = require("./routes/user/addReport");
const getProductDetail = require("./routes/products/getProductDetail");
const addToFavorites = require("./routes/user/addToFavorites");
const editUser = require("./routes/user/editUser");
const cors = require("cors");
const removeFromFavorites = require("./routes/user/removeFromFavorites");
const addExistingProduct = require("./routes/user/product/addExistingProduct");

mongoose
  .connect("mongodb://localhost:27017/final-project")
  .then(() => console.log("db created"))
  .catch(() => console.log("db not ccreated"));

const app = express();
app.use(express.json());
app.use(cors());

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
    if (err) {
      return res.status(400).send({
        error: {
          message: "Bad request!",
        },
      });
    } else {
      req.user = user;
      next();
    }
  });
}

app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);

app.post("/api/user/shop", authenticateToken, addShop);
app.post("/api/user/:shopid/product", authenticateToken, addProduct);
app.post("/api/user/:shopid/product/:productid", authenticateToken, addExistingProduct);
app.get("/api/user/:shopid/reports", authenticateToken, getReports);
app.post("/api/user/:shopid/report", authenticateToken, addReport);
app.post("/api/user/favorites/:id", authenticateToken, addToFavorites);
app.delete("/api/user/favorites/:id", authenticateToken, removeFromFavorites);
app.put("/api/user", authenticateToken, editUser);

app.get("/api/products", getProducts);
app.get("/api/products/:id", getProductDetail);

app.listen(9000, () => console.log("listening on port 9000 ..."));
