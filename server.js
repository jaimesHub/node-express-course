const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// In order to make POST requests, first we need to include the "body-parser" library
app.user(bodyParser.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "Successfully got users. Nice!",
    users: mockUserData,
  });
});

// colons are used as variables that be viewed in the params
app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "Got one user",
    user: req.params.id,
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // This should come from the database
  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      sucess: true,
      message: "password and username match!",
      toke: "encrypted token goes here.",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

app.listen(8000, function () {
  console.log("Server is running...");
});
