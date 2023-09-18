// route search

const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/search/", movieListController.getSearch);

module.exports = router;
