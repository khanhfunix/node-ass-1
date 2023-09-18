// route trending
const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/trending/", movieListController.getTrending);

module.exports = router;
