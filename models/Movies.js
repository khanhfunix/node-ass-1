// handle data

const fs = require("fs");

const path = require("path");

// path toi file movie
const pathToMovieList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "movieList.json"
);

// path toi file Genre
const pathToGenreList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "genreList.json"
);

// path toi file Video
const pathToVideoList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "videoList.json"
);

// ham lay file content
const getMovieFromFile = (cb) => {
  fs.readFile(pathToMovieList, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
const getGenreFromFile = (cb) => {
  fs.readFile(pathToGenreList, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
const getVideoFromFile = (cb) => {
  fs.readFile(pathToVideoList, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

// dung class de quan ly cac chuc nang
module.exports = class Movie {
  // xu ly logic sap xep movie theo trending
  static showTrendingList(cb) {
    getMovieFromFile((mov) => {
      mov.sort((a, b) => a.popularity - b.popularity);
      mov.reverse();
      cb(mov);
    });
  }
  // xu ly logic sap xep movie theo Rating
  static showRatingList(cb) {
    getMovieFromFile((mov) => {
      mov.sort((a, b) => a.vote_average - b.vote_average);
      mov.reverse();
      cb(mov);
    });
  }
  // lay ra movie
  static showMovieList(cb) {
    getMovieFromFile((mov) => {
      cb(mov);
    });
  }
  // xu ly logic lay ra genreID
  static searchGenreId(cb) {
    getGenreFromFile((mov) => {
      cb(mov);
    });
  }
  // tim videoID
  static searchVideoId(cb) {
    getVideoFromFile((mov) => {
      cb(mov);
    });
  }
  // lay genre + sort theo ngay publish
  static showGenreList(cb) {
    getMovieFromFile((mov) => {
      // sort theo publish at
      mov.videos.sort(
        (a, b) => new Date(a.published_at) - new Date(b.published_at)
      );

      cb(mov);
    });
  }
};
