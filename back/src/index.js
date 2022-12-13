const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(express.json());

connect(process.env.MONGO_STRING)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "testing is working" });
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listning on port: ${port}`));
