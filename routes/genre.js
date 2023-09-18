// route genre

const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/discover", movieListController.getGenre);

module.exports = router;
