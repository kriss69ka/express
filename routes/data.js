var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

router.get("/", function(req, res, next) {
  fetch("https://ghibliapi.herokuapp.com/films?limit=3")
    .then(res => res.json())
    .then(json => {
      return res.render("films", { films: json });
    });
});

module.exports = router;

// fetch("https://ghibliapi.herokuapp.com/films?limit=3")
//   .then(res => res.json())
//   .then(json => {
//     res.render("index", { title: "Express" });
//   });
