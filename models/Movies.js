const fs = require("fs");

const path = require("path");

const pathToMovieList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "movieList.json"
);

const pathToGenreList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "genreList.json"
);

const pathToVideoList = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "videoList.json"
);

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

module.exports = class Movie {
  static showTrendingList(cb) {
    getMovieFromFile((mov) => {
      mov.sort((a, b) => a.popularity - b.popularity);
      mov.reverse();
      cb(mov);
    });
  }

  static showRatingList(cb) {
    getMovieFromFile((mov) => {
      mov.sort((a, b) => a.vote_average - b.vote_average);
      mov.reverse();
      cb(mov);
    });
  }

  static searchGenreId(cb) {
    getGenreFromFile((mov) => {
      cb(mov);
    });
  }

  static showMovieList(cb) {
    getMovieFromFile((mov) => {
      cb(mov);
    });
  }
  static searchVideoId(cb) {
    getVideoFromFile((mov) => {
      cb(mov);
    });
  }
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
