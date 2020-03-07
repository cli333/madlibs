const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// test here
const { libber } = require("./utils/utils");
const test = `More than 300 years in the future, society has been transformed by new technology, leading to human bodies being interchangeable and death no longer being permanent. Takeshi Kovacs is the only surviving soldier of a group of elite interstellar warriors who were defeated in an uprising against the new world order. His mind was imprisoned for centuries until impossibly wealthy businessman Laurens Bancroft offers him the chance to live again. Kovacs will have to do something for Bancroft, though, if he wants to be resurrected. Bancroft's request of Kovacs is to solve a murder -- Bancroft's. "Altered Carbon" is based on Richard K. Morgan's cyberpunk noir novel of the same name.`;
//
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  libber(test, 10);
  res.json("Hello there!");
});

app.listen(port, () => console.log(`Listening on port:${port}`));
