import express from "express";

const app = express();
const port = 8080;


app.set("view engine", "ejs");
app.set("views", "views");


app.get("/rollDice", (req, res) => {
  const dice = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice", { dice });
});


app.listen(port, () => {
  console.log("port is listening");
});