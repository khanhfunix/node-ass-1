const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

// router.post("/videos", movieListController.postMovieTrailer);

router.get("/videos/", movieListController.getMovieTrailer);

module.exports = router;
