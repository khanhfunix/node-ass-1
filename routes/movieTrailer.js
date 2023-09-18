// route videos

const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/videos/", movieListController.getMovieTrailer);

module.exports = router;
