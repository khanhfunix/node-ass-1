// route vote average

const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/top-rate/", movieListController.getRating);

module.exports = router;
