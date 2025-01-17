const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT;

//database Connection
const db = require("./server/config/database");

db.authenticate()
  .then(() => {
    console.log("Connection to DB has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the DB:", err);
  });

app.listen(PORT || 3001);
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// Get Routes
let product = require("./server/routes/products");
let categories = require("./server/routes/categories");
let signup = require("./server/routes/auth/signup");
let login = require("./server/routes/auth/login");
let cart = require("./server/routes/cart");
let affiliaions = require("./server/routes/affiliations");
let orders = require("./server/routes/orders");
let profile = require("./server/routes/profile");
let wishlist = require("./server/routes/wishlist");

//middlewares
const verifyToken = require("./server/middlewares/auth.middleware").verifyToken;

app.use("/api/auth", signup);
app.use("/api/auth", login);
app.use("/api/product", product);
app.use("/api/categories", categories);
app.use("/api/cart", verifyToken, cart);
app.use("/api/affiliations", verifyToken, affiliaions);
app.use("/api/orders", verifyToken, orders);
app.use("/api/wishlist", verifyToken, wishlist);
app.use("/api/profile", verifyToken, profile);
