const express = require("express");

const router = express.Router();

const error404Controller = require("../controllers/404");

router.get("/:something", error404Controller.get404);
router.get("/api/:something", error404Controller.get404);
router.get("/api/movie/", error404Controller.get404);

module.exports = router;
