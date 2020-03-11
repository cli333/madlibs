const express = require("express");
const router = express.Router();
const Madlib = require("../models/Madlib");
const { libber } = require("../utils/utils");

// get a random madlib
router.get("/", (req, res) => {
  Madlib.count({}, (err, count) => {
    if (err) {
      console.log(err);
    } else {
      const randomNumber = Math.floor(Math.random() * count);

      Madlib.findOne()
        .skip(randomNumber)
        .exec((err, madlib) => {
          if (err) {
            console.log(err);
          } else {
            res.json(madlib);
          }
        });
    }
  }).catch(err => res.status(404).json({ success: false }));
});

// convert to madlib form
router.post("/", (req, res) => {
  const madlibForm = libber(req.body.data, req.body.maxCount);
  res.json(madlibForm);
});

// save the submitted madlib
router.post("/new", (req, res) => {
  const newMadlib = new Madlib({
    data: req.body.data
  });
  newMadlib
    .save()
    .then(() => res.json("Madlib saved!"))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
