const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { URI } = require("./config/keys");
const api = require("./routes/api");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to mongo
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// use routes
app.use("/api", api);

app.listen(port, () => console.log(`Server started on port:${port}`));
