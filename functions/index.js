require("firebase-functions/lib/logger/compat");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
admin.initializeApp();

// organize and import other functions
const users = require("./users");

// api config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.post("/test", (req, res) => {
  console.log(req.body.email);
  res.send("hello");
});

/* ----------Users---------- */
app.post("/users/create", (req, res) => {
  users.addUser(req, res);
});

// listen command
exports.api = functions.https.onRequest(app);
