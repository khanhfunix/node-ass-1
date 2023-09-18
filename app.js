const express = require("express");

const app = express();

const cors = require("cors");
// import routes
const trendingRoutes = require("./routes/trending");
const voteAverageRoutes = require("./routes/voteAverage");
const genreRoutes = require("./routes/genre");
const movieTrailerRoutes = require("./routes/movieTrailer");
const searchRoutes = require("./routes/search");
const error404Routes = require("./routes/404");
// import middlewares
const verify = require("./middlewares/verifyToken");
// dung cors de chay song song back end va front end
app.use(cors());
// su dung cac route
app.use("/", error404Routes);

app.use("/api/movie", verify.verifyToken, trendingRoutes);
app.use("/api/movie", verify.verifyToken, voteAverageRoutes);
app.use("/api/movie", verify.verifyToken, genreRoutes);
app.use("/api/movie", verify.verifyToken, movieTrailerRoutes);
app.use("/api/movie", verify.verifyToken, searchRoutes);

app.listen(3001);
