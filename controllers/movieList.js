const Movies = require("../models/Movies");

const paging = require("../util/paging");

exports.getTrending = (req, res, next) => {
  Movies.showTrendingList((movie) => {
    const pageNumber = req.query.page;
    const totalPage = Math.ceil(movie.length / 20);
    paging.sendDataPerPage(pageNumber, movie);
    res.status(200).send({
      results: movie,
      page: pageNumber,
      totalPage,
      statusCode: 200,
    });
  });
};

exports.getRating = (req, res, next) => {
  Movies.showRatingList((movie) => {
    const pageNumber = req.query.page;
    const totalPage = Math.ceil(movie.length / 20);
    paging.sendDataPerPage(pageNumber, movie);
    res.status(200).send({
      results: movie,
      page: pageNumber,
      totalPage,
      statusCode: 200,
    });
  });
};

exports.getGenre = (req, res, next) => {
  const genreId = +req.query.genre;
  const pageNUmber = +req.query.page;
  if (!genreId) {
    res.status(400).send({ message: "Params Not Found", status: 400 });
    return;
  }
  Movies.searchGenreId((movieGenre) => {
    const genre = movieGenre.find((genre) => genre.id === genreId);
    if (!genre) {
      res.status(400).send({ message: "Not Found that Genre ID", status: 400 });
      return;
    }
    Movies.showMovieList((movie) => {
      const movieListRenderByGenre = [];
      for (mov of movie) {
        if (mov.genre_ids.includes(genre.id)) {
          movieListRenderByGenre.push(mov);
        }
      }
      const totalPage = Math.ceil(movieListRenderByGenre.length / 20);
      paging.sendDataPerPage(pageNUmber, movieListRenderByGenre);
      console.log(movieListRenderByGenre.length);
      res.status(200).send({
        results: movieListRenderByGenre,
        page: pageNUmber || 1,
        totalPage,
        genre: genre.name,
        statusCode: 200,
      });
    });
  });
};

exports.getMovieTrailer = (req, res, next) => {
  const movieId = +req.query.movieId;
  console.log(movieId);
  if (!movieId) {
    return res
      .status(400)
      .send({ message: "Not found id parram", statusCode: 400 });
  }
  Movies.searchVideoId((videoInfo) => {
    console.log(videoInfo[0]);
    const video = videoInfo.find((vid) => vid.id === movieId);
    console.log(video);

    if (!video) {
      return res
        .status(404)
        .send({ message: "Not Found any video", statusCode: 404 });
    }
    let videoRenderList = [];
    for (videoInfo of video.videos) {
      if (
        videoInfo.official === true &&
        videoInfo.site === "YouTube" &&
        (videoInfo.type === "Trailer" || videoInfo.type === "Teaser")
      ) {
        videoRenderList.push(videoInfo);
      }
    }
    if (videoRenderList.length === 0) {
      return res
        .status(404)
        .send({ message: "Not Found any video", statusCode: 404 });
    }

    res.status(200).send({
      results: videoRenderList,
      totalVideos: videoRenderList.length,
      statusCode: 200,
    });
  });
};

exports.getSearch = (req, res, next) => {
  const movieRender = [];

  const searchKey = req.params.searchKey;
  if (!searchKey) {
    return res
      .status(400)
      .send({ message: "Not found param", statusCode: 400 });
  }
  const searchKeyLowerCase = req.params.searchKey.toLowerCase();

  Movies.showMovieList((movie) => {
    for (mov of movie) {
      // console.log(mov.original_title === undefined);
      if (mov.original_title === undefined) {
        if (
          mov.original_name
            .replace(/ /g, "")
            .toLowerCase()
            .includes(searchKey) ||
          mov.overview
            .replace(/ /g, "")
            .toLowerCase()
            .includes(searchKeyLowerCase)
        ) {
          movieRender.push(mov);
        }
      } else if (mov.original_name === undefined) {
        if (
          mov.original_title
            .replace(/ /g, "")
            .toLowerCase()
            .includes(searchKeyLowerCase) ||
          mov.overview
            .replace(/ /g, "")
            .toLowerCase()
            .includes(searchKeyLowerCase)
        ) {
          movieRender.push(mov);
        }
      }
    }
    res.status(200).send({ results: movieRender, status: 200 });
  });
};
