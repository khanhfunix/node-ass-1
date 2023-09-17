const express = require("express");

const router = express.Router();

const movieListController = require("../controllers/movieList");

router.get("/search/:searchKey", movieListController.getSearch);
router.get("/search/", movieListController.getSearch);

module.exports = router;
