const express = require("express");

const app = express();

const cors = require("cors");

const trendingRoutes = require("./routes/trending");
const voteAverageRoutes = require("./routes/voteAverage");
const genreRoutes = require("./routes/genre");
const movieTrailerRoutes = require("./routes/movieTrailer");
const searchRoutes = require("./routes/search");
const error404Routes = require("./routes/404");

const verify = require("./middlewares/verifyToken");

app.use(cors());

app.use("/", error404Routes);
// app.use(verify.verifyToken);
app.use("/api/movie", verify.verifyToken, trendingRoutes);
app.use("/api/movie", verify.verifyToken, voteAverageRoutes);
app.use("/api/movie", verify.verifyToken, genreRoutes);
app.use("/api/movie", verify.verifyToken, movieTrailerRoutes);
app.use("/api/movie", verify.verifyToken, searchRoutes);

app.listen(3001);
