'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", ""),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
      };

const nameFilm1 = prompt("Один из последних просмотренных фильмов?", ""),
      raitingFilm1 = +prompt("На сколько оцените его?", ""),
      nameFilm2 = prompt("Один из последних просмотренных фильмов?", ""),
      raitingFilm2 = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[nameFilm1] = raitingFilm1;
personalMovieDB.movies[nameFilm2] = raitingFilm2;
console.log("Колличество просмотренных фильмов: " + personalMovieDB['count']);
console.log(personalMovieDB);
