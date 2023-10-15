const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Model/userModel");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;

console.log(process.env.DATABASE);
//Database connection
mongoose
  .connect(process.env.DATABASE)
  .then((con) => console.log("connected successfully"));

app.listen(port, () => {
  console.log("listening to port " + port);
});
